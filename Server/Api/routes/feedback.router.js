import { Router } from 'express';
import FeedbackController from '../../Controllers/feedback.controller.js';

export default Router()
  // feedback routes
  .get('/', FeedbackController.getAllFeedbacks)
  .get('/all/:userId', FeedbackController.getAllFeedbacksFromOneProfile)
  .get('/:feedbackId', FeedbackController.getOneFeedbackFromOneProfile)
  .post('/:feedbackId/answers', FeedbackController.insertFeedbackAnswers)
  .post('/:userId/survey/:surveyId', FeedbackController.createOne);
