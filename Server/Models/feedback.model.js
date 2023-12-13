import mysqlConnection from '../Db/db.js';

export default class FeedbackModels {
  static async query(sql, params) {
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
  static async getAllFeedbacks() {
    const sql = `
    SELECT 
        feedback.*,
        surveys.*,
        questions.*,            
        answers.*
    FROM 
        feedback 
        LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
        LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
        LEFT JOIN questions ON answers.question_id = questions.question_id
          `;
    try {
      const result = await this.query(sql);
      // convert the result to an array of objects
      const feedbacks = [];
      while (result.length > 0) {
        const feedback = {
          feedback_id: result[0].feedback_id,
          survey_id: result[0].survey_id,
          profile_id: result[0].profile_id,
          created_at: result[0].created_at,
          answers: [],
        };

        while (result.length > 0 && result[0].feedback_id === feedback.feedback_id) {
          const answer = {
            answer_id: result[0].answer_id,
            question_id: result[0].question_id,
            answer_text: result[0].answer_text,
            answer_value: result[0].answer_value,
            answer_bool: result[0].answer_bool,
            question: {
              question_id: result[0].question_id,
              question_text: result[0].question_text,
              answer_type: result[0].answer_type,
              combined_at: result[0].combined_at,
            },
          };

          feedback.answers.push(answer);
          result.shift();
        }

        feedbacks.push(feedback);
      }
      return feedbacks;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllFeedbacksFromOneProfile(userId) {
    const sql = `
    SELECT 
        feedback.*,
        surveys.*,
        questions.*,
        answers.*
    FROM 
        feedback 
        LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
        LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
        LEFT JOIN questions ON answers.question_id = questions.question_id
    WHERE 
        feedback.profile_id = ?;
          `;
    try {
      const result = await this.query(sql, userId);
      // convert the result to an array of objects
      const feedbacks = [];
      while (result.length > 0) {
        const feedback = {
          feedback_id: result[0].feedback_id,
          survey_id: result[0].survey_id,
          profile_id: result[0].profile_id,
          created_at: result[0].created_at,
          answers: [],
        };

        while (result.length > 0 && result[0].feedback_id === feedback.feedback_id) {
          const answer = {
            answer_id: result[0].answer_id,
            question_id: result[0].question_id,
            answer_text: result[0].answer_text,
            answer_value: result[0].answer_value,
            answer_bool: result[0].answer_bool,
            question: {
              question_id: result[0].question_id,
              question_text: result[0].question_text,
              answer_type: result[0].answer_type,
              combined_at: result[0].combined_at,
            },
          };

          feedback.answers.push(answer);
          result.shift();
        }

        feedbacks.push(feedback);
      }
      return feedbacks;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getOneFeedbackFromOneProfile(feedbackId) {
    const sql = `
      SELECT 
          feedback.*,             -- Selects only required columns from feedback table
          surveys.*,              -- Selects only required columns from surveys table
          questions.*,            -- Selects only required columns from questions table
          answers.*               -- Selects only required columns from answers table
      FROM 
          feedback 
          LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
          LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
          LEFT JOIN questions ON answers.question_id = questions.question_id
      WHERE feedback.feedback_id = ?;
        
      `;
    try {
      const result = await this.query(sql, [feedbackId]);

      // convert the result to an array of objects
      const feedback = {
        feedback_id: result[0].feedback_id,
        survey_id: result[0].survey_id,
        profile_id: result[0].profile_id,
        created_at: result[0].created_at,
        answers: [],
      };

      while (result.length > 0) {
        const answer = {
          answer_id: result[0].answer_id,
          question_id: result[0].question_id,
          answer_text: result[0].answer_text,
          answer_value: result[0].answer_value,
          answer_bool: result[0].answer_bool,
          question: {
            question_id: result[0].question_id,
            question_text: result[0].question_text,
            answer_type: result[0].answer_type,
            combined_at: result[0].combined_at,
          },
        };

        feedback.answers.push(answer);
        result.shift();
      }

      return feedback;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createFeedback(userId, surveyId) {
    const sql = `
      START TRANSACTION;

      INSERT INTO feedback (profile_id, survey_id)
      VALUES (?, ?);
          
      COMMIT;`;
    try {
      const result = await this.query(sql, [userId, surveyId]);
      console.log(`Feedback created for profile ID: ${userId}, survey ID: ${surveyId}, Feedback ID: ${result.insertId}`);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  
}

  static async deleteFeedback(feedback_id) {
    const sql = `
        
      START TRANSACTION;

      DELETE FROM answers WHERE feedback_id = ?;
  
      DELETE FROM feedbacks WHERE feedback_id = ?;
  
      COMMIT;
    `;

    try {
      const result = await this.query(sql, feedback_id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async insertFeedbackAnswers(feedbackId, answers) {
    const sql = `
      
      INSERT INTO answers (feedback_id, question_id, answer_text, answer_value, answer_bool)
      VALUES ?;
      `;
    try {
      // Prepare the data for bulk insert
      const values = answers.map(answer => [
        feedbackId,
        answer.questionId,
        answer.answerText,
        answer.answerValue,
        answer.answerBool,
      ]);

      // Perform the bulk insert
      const result = await this.query(sql, [values]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
