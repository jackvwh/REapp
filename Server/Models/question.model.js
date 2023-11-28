import mysqlConnection from '../Db/db.js';

async function query(sql, params) {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });
}

export default class QuestionModels {
  static async getAll() {
    console.log('QuestionModels get all');
    const sql = 'SELECT * FROM questions';
    try {
      const result = await query(sql);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getOne(id) {
    const sql = 'SELECT * FROM questions WHERE question_id = ?';
    try {
      const result = await query(sql, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createOne(question, answerType) {
    const sql = `
    
    START TRANSACTION;

    INSERT INTO questions (question_text, answer_type)
    VALUES (?, ?);

    COMMIT;
  `;

    try {
      const result = await query(sql, [question, answerType]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateOne(id, question, answerType) {
    const sql = `
    
    START TRANSACTION;

    UPDATE questions SET question_text = ?, answer_type = ?
    WHERE question_id = ?;

    COMMIT;
  `;

    try {
      const result = await query(sql, [question, answerType, id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteOne(id) {
    const sql = `
  
    START TRANSACTION;
    
    DELETE FROM questions WHERE question_id = ?;
    
    COMMIT;`;

    try {
      const result = await query(sql, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
