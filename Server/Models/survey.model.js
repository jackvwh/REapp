import query from '../Db/query.js';

export default class SurveyModels {
  static async getAll() {
    const sql = `

          SELECT * FROM surveys
          LEFT JOIN survey_to_questions ON surveys.survey_id = survey_to_questions.survey_id
          LEFT JOIN questions ON survey_to_questions.question_id = questions.question_id
          ORDER BY surveys.survey_id;
    `;

    try {
      const result = await query(sql);
      // convert the flat array of rows into an array of surveys
      const surveys = [];
      while (result.length > 0) {
        const survey = {
          survey_id: result[0].survey_id,
          survey_title: result[0].survey_title,
          description: result[0].description,
          created_at: result[0].created_at,
          questions: [],
        };

        while (result.length > 0 && result[0].survey_id === survey.survey_id) {
          const question = {
            question_id: result[0].question_id,
            question_text: result[0].question_text,
            answer_type: result[0].answer_type,
            combined_at: result[0].combined_at,
          };

          survey.questions.push(question);
          result.shift();
        }

        surveys.push(survey);
      }

      return surveys;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getOne(id) {
    const sql = `
  
      SELECT * FROM surveys 
      LEFT JOIN survey_to_questions ON surveys.survey_id = survey_to_questions.survey_id
      LEFT JOIN questions ON survey_to_questions.question_id = questions.question_id
      WHERE surveys.survey_id = ?;
    `;

    try {
      const result = await query(sql, [id]);
      // convert the flat array of rows into survey object
      const survey = {
        survey_id: result[0].survey_id,
        survey_title: result[0].survey_title,
        description: result[0].description,
        created_at: result[0].created_at,
        questions: [],
      };
      while (result.length > 0) {
        const question = {
          question_id: result[0].question_id,
          question_text: result[0].question_text,
          answer_type: result[0].answer_type,
          combined_at: result[0].combined_at,
        };

        survey.questions.push(question);
        result.shift();
      }
      return survey;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createOne(surveyTitle, description, questions) {
    const sql = `
                
      START TRANSACTION;
  
      INSERT INTO surveys (survey_title, description)
      VALUES (?, ?);

      SET @surveyId = LAST_INSERT_ID();

      INSERT INTO survey_to_questions (survey_id, question_id)
      SELECT @surveyId, question_id FROM questions WHERE question_id IN (?);

      COMMIT;
    `;

    try {
      const result = await query(sql, [surveyTitle, description, questions]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateOne(id, surveyTitle, description, questions) {
    const sql = `
                    
      START TRANSACTION;
  
      UPDATE surveys SET survey_title = ?, description = ? WHERE survey_id = ?;
  
      DELETE FROM survey_to_questions WHERE survey_id = ?;

      INSERT INTO survey_to_questions (survey_id, question_id)
      SELECT ?, question_id FROM questions WHERE question_id IN (?);
  
      COMMIT;
    `;
    try {
      const result = await query(sql, [
        surveyTitle,
        description,
        id,
        id,
        id,
        questions,
      ]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteOne(id) {
    const sql = `
        
      START TRANSACTION;

      DELETE FROM survey_to_questions WHERE survey_id = ?;

      DELETE FROM surveys WHERE survey_id = ?;
      
      COMMIT;
    `;

    try {
      const result = await query(sql, [id, id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteQuestion(survey_id, question_id) {
    const sql =
      'DELETE FROM survey_to_questions WHERE question_id = ? AND survey_id = ?';
    try {
      const result = await query(sql, [question_id, survey_id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async addQuestion(survey_id, question_id) {
    const sql = `
    
      START TRANSACTION;

      INSERT INTO survey_to_questions (question_id, survey_id )
      VALUES (?, ?);

      COMMIT;
    `;
    try {
      const result = await query(sql, [question_id, survey_id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
