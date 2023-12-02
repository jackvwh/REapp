import { Router } from 'express';
import ActivityController from '../../Controllers/activity.controller.js';

export default Router()
  .get('/', ActivityController.getAllActivities)
  .post('/', ActivityController.insertActivity)
  .delete('/:activityId', ActivityController.deleteActivity);
