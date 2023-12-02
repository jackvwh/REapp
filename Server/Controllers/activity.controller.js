import ActivityModels from '../Models/activity.model.js';

export default class ActivityController {
  static async getAllActivities(req, res) {
    try {
      const result = await ActivityModels.getAllActivities();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async insertActivity(req, res) {
    const { activityType, activityDescription } = req.body;
    try {
      const result = await ActivityModels.insertActivity(
        activityType,
        activityDescription
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async deleteActivity(req, res) {
    const { activityId } = req.params;
    try {
      const result = await ActivityModels.deleteActivity(activityId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
