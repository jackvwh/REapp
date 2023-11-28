import SurveyModels from '../Models/survey.model.js';

export default class SurveyController {
  static async getAll(req, res) {
    try {
      const result = await SurveyModels.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error getting all surveys -' + error });
    }
  }

  static async getOne(req, res) {
    try {
      const result = await SurveyModels.getOne(req.params.surveyId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error getting survey -' + error });
    }
  }

  static async createOne(req, res) {
    const { surveyTitle, description, questions } = req.body;
    try {
      const result = await SurveyModels.createOne(
        surveyTitle,
        description,
        questions
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error creating survey -' + error });
    }
  }

  static async updateOne(req, res) {
    const { surveyTitle, description, questions } = req.body;
    const { surveyId } = req.params;
    try {
      const result = await SurveyModels.updateOne(
        surveyId,
        surveyTitle,
        description,
        questions
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error updating survey -' + error });
    }
  }

  static async deleteOne(req, res) {
    try {
      const result = await SurveyModels.deleteOne(req.params.surveyId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting survey -' + error });
    }
  }

  static async addQuestion(req, res) {
    const { questionId } = req.body;
    const { id } = req.params;
    try {
      const result = await SurveyModels.addQuestion(id, questionId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error adding question to survey -' + error });
    }
  }

  static async deleteQuestion(req, res) {
    const { surveyId, questionId } = req.params;
    try {
      const result = await SurveyModels.deleteQuestion(surveyId, questionId);
      res.status(200).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Error deleting question from survey -' + error });
    }
  }
}
