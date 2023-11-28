import mysqlConnection from '../Db/db.js';

async function query(sql, params) {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

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
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getOne(id) {
    console.log('getOne id', id);
    const sql = `
  
      SELECT * FROM surveys 
      LEFT JOIN survey_to_questions ON surveys.survey_id = survey_to_questions.survey_id
      LEFT JOIN questions ON survey_to_questions.question_id = questions.question_id
      WHERE surveys.survey_id = ?;
    `;

    try {
      const result = await query(sql, [id]);
      return result;
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
