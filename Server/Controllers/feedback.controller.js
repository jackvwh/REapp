import AnswerModels from '../Models/answer.model.js';
import FeedbackModels from '../Models/feedback.model.js';

export default class FeedbackController {
  static async apiGetAllFeedbacksFromOneProfile(req, res, next) {
    try {
      const { id } = req.params;
      const result = await FeedbackModels.getAllFeedbacksFromOneProfile(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetOneFeedbackFromOneProfile(req, res) {
    try {
      const { userId, surveyId } = req.params;
      const result = await FeedbackModels.getOneFeedbackFromOneProfile(
        userId,
        surveyId
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error getting user feedback ' + error });
    }
  }
  static async apiInsertAnswers(req, res) {
    console.log(req.body);
    const { feedbackId } = req.params;
    const { answers } = req.body;
    try {
      const result = await AnswerModels.insertAnswers(feedbackId, answers);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error inserting feedback answers- ' + error });
    }
  }
  static async apiGetAllAnswersFromOneProfile(req, res, next) {
    try {
      const { id } = req.params;
      const result = await AnswerModels.getAllAnswersFromOneProfile(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async createOne(req, res) {
    const { userId, surveyId } = req.params;
    try {
      const result = await FeedbackModels.createFeedback(userId, surveyId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error creating feedback record - ' + error });
    }
  }

  static async deleteOne(req, res) {
    try {
      const result = await FeedbackModels.deleteOne(req.params.feedbackId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
