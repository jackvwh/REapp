import { Router } from 'express';
import SurveyController from '../../Controllers/survey.controller.js';

export default Router()
  .get('/', SurveyController.getAll)
  .get('/:surveyId', SurveyController.getOne)
  .post('/', SurveyController.createOne)
  .put('/:surveyId', SurveyController.updateOne)
  .delete('/:surveyId', SurveyController.deleteOne)
  .delete('/:surveyId/questions/:questionId', SurveyController.deleteQuestion)
  .post('/:surveyId/questions', SurveyController.addQuestion);
