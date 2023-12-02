import { Router } from 'express';
import ActivityController from '../../Controllers/activity.controller.js';

export default Router()
  .get('/', ActivityController.getAllActivities)
  .get('/options', ActivityController.getActivityOptions)
  .post('/', ActivityController.insertActivity)
  .delete('/:activityId', ActivityController.deleteActivity);
