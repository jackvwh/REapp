import QuestionModels from '../Models/question.model.js';

// for checking if answer type is valid
const answerTypes = ['text', 'boolean', '1-5', '1-10', 'number'];

export default class QuestionController {
  static async getAll(req, res) {
    console.log('QuestionController get alll');
    try {
      const result = await QuestionModels.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching questions' });
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const result = await QuestionModels.getOne(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching question' });
    }
  }

  static async createOne(req, res) {
    const { question, answerType } = req.body;
    if (!answerTypes.includes(answerType)) {
      return res.status(400).json({ error: 'Invalid answer type' });
    }
    try {
      const result = await QuestionModels.createOne(question, answerType);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error creating question' });
    }
  }

  static async updateOne(req, res) {
    const { id } = req.params;
    const { question, answerType } = req.body;
    if (!answerTypes.includes(answerType)) {
      return res.status(400).json({ error: 'Invalid answer type' });
    }
    try {
      const result = await QuestionModels.updateOne(id, question, answerType);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error updating question' });
    }
  }

  static async deleteOne(req, res) {
    try {
      const result = await QuestionModels.deleteOne(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting question' });
    }
  }
}
