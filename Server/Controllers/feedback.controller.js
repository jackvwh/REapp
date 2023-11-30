import FeedbackModels from '../Models/feedback.model.js';

export default class FeedbackController {
  static async getAllFeedbacks(req, res) {
    try {
      const result = await FeedbackModels.getAllFeedbacks();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getAllFeedbacksFromOneProfile(req, res) {
    try {
      const { userId } = req.params;
      const result = await FeedbackModels.getAllFeedbacksFromOneProfile(userId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async getOneFeedbackFromOneProfile(req, res) {
    try {
      const { feedbackId } = req.params;
      const result = await FeedbackModels.getOneFeedbackFromOneProfile(feedbackId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error getting user feedback ' + error });
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
    const { feedbackId } = req.params;
    try {
      const result = await FeedbackModels.deleteFeedback(feedbackId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error deleting feedback record - ' + error });
    }
  }

  static async insertFeedbackAnswers(req, res) {
    console.log(req.body);
    const { feedbackId } = req.params;
    const { answers } = req.body;
    try {
      const result = await FeedbackModels.insertFeedbackAnswers(feedbackId, answers);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: ' Error inserting feedback answers- ' + error });
    }
  }
}
