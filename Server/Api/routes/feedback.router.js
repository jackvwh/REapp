import { Router } from 'express';
import FeedbackController from '../../Controllers/feedback.controller.js';

export default Router()
  // feedback routes
  .get('/', (req, res) => {
    res.send('Hello Feedback!');
  })
  .get('/:feedbackId', FeedbackController.apiGetAllFeedbacksFromOneProfile)
  .get('/:feedbackId/:surveyId', FeedbackController.apiGetOneFeedbackFromOneProfile)
  .post('/:feedbackId/answers', FeedbackController.apiInsertAnswers)
  .get('/:feedbackId/answers', FeedbackController.apiGetAllAnswersFromOneProfile)
  .post('/:feedbackId/survey/:surveyId', FeedbackController.createOne)
  .delete('/:feedbackId', FeedbackController.deleteOne);
