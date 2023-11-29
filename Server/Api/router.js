import { Router } from 'express';
import homeRouter from './routes/home.router.js';
import userRouter from './routes/user.router.js';
import feedbackRouter from './routes/feedback.router.js';
import surveyRouter from './routes/survey.router.js';
import questionRouter from './routes/question.router.js';
import testdataController from '../Controllers/test.controller.js';

export default Router()
  .get('/', homeRouter)
  .use('/feedback', feedbackRouter)
  .use('/surveys/', surveyRouter)
  .use('/questions', questionRouter)
  .use('/testdata', testdataController.insertTestData);
