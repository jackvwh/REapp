import query from '../Db/query.js';

export default class ActivityModels {
  static async getActivityOptions() {
    const sql = 'SELECT * FROM activities;';
    try {
      const result = await query(sql);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllActivities() {
    const sql = 'SELECT * FROM activities';
    try {
      const result = await query(sql);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async insertActivity(activity_type, activity_description) {
    const sql = `
    
            INSERT INTO activities (activity_type, activity_description) 
            VALUES (?, ?)`;

    try {
      const result = await query(sql, [activity_type, activity_description]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteActivity(activity_id) {
    const sql = `
        
        START TRANSACTION;

        DELETE FROM user_activities WHERE activity_id = ?;
        DELETE FROM activities WHERE activity_id = ?;
        
        COMMIT;
        
        `;

    try {
      const result = await query(sql, [activity_id, activity_id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
