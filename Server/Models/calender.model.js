import mysqlConnection from "../Db/db.js";

class CalenderModels{
    static async query(sql, params) {
      return new Promise((resolve, reject) => {
        mysqlConnection.query(sql, params, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }

    static async getEventsByUserId(userId) {
      const result = await db.query('SELECT * FROM events WHERE profile_id = ?', [userId]);
      return result;
    }
}

export default CalenderModels;