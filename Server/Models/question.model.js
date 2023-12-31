import query from '../Db/query.js';

export default class QuestionModels {
  static async getAll() {
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
