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

  static async getAllFeedbacksFromOneProfile(id) {
    const sql = `
        SELECT 
            feedback.*,             -- Selects all columns from feedback table
            surveys.*,              -- Selects all columns from surveys table
            questions.*,            -- Selects all columns from questions table
            answers.*               -- Selects all columns from answers table
        FROM 
            feedback 
            JOIN surveys ON feedback.survey_id = surveys.survey_id
            JOIN questions ON surveys.survey_id = questions.survey_id
            LEFT JOIN answers ON (answers.profile_id = feedback.profile_id AND answers.question_id = questions.question_id)
        WHERE 
            feedback.profile_id = ?;
            `;
    try {
      const result = await this.query(sql, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getOneFeedbackFromOneProfile(id, survey_id) {
    const sql = `
        SELECT 
            feedback.*,             -- Selects all columns from feedback table
            surveys.*,              -- Selects all columns from surveys table
            questions.*,            -- Selects all columns from questions table
            answers.*               -- Selects all columns from answers table
        FROM 
            feedback 
            JOIN surveys ON feedback.survey_id = surveys.survey_id
            JOIN questions ON surveys.survey_id = questions.survey_id
            LEFT JOIN answers ON (answers.profile_id = feedback.profile_id AND answers.question_id = questions.question_id)
            WHERE 
        feedback.profile_id = ? AND feedback.survey_id = ?;
         `;
    try {
      const result = await this.query(sql, [id, survey_id]);
      return result;
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
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteFeedback(id) {
    const sql = `
        
        START TRANSACTION;
    
        DELETE FROM feedbacks WHERE id = ?;
    
        COMMIT;
    `;

    try {
      const result = await this.query(sql, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
