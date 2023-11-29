import mysqlConnection from '../Db/db.js';

export default class AnswerModels {
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

  static async insertAnswers(feedbackId, answers) {
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

  static async getAllAnswersFromOneProfile(id) {
    const sql = `
        SELECT 
            answers.*,             -- Selects all columns from answers table
            questions.*            -- Selects all columns from questions table
        FROM
            answers
            JOIN questions ON answers.question_id = questions.question_id
        WHERE
            answers.profile_id = ?;`;
    try {
      const result = await this.query(sql, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
