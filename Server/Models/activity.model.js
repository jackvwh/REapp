import mysqlConnection from '../Db/db.js';

export default class ActivityModels {
  static async query(sql, params) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query(sql, params, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result);
      });
    });
  }

  static async getAllActivities() {
    const sql = 'SELECT * FROM activities';
    try {
      const result = await this.query(sql);
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
      const result = await this.query(sql, [activity_type, activity_description]);
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
      const result = await this.query(sql, [activity_id, activity_id]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
