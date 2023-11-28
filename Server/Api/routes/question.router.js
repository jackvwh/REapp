import { Router } from 'express';
import QuestionController from '../../Controllers/question.controller.js';

export default Router()
  // questions routes
  .get('/', QuestionController.getAll)
  .get('/:id', QuestionController.getOne)
  .post('/', QuestionController.createOne)
  .put('/:id', QuestionController.updateOne)
  .delete('/:id', QuestionController.deleteOne);
