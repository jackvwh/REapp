import mysqlConnection from "../Db/db.js";

class UserModels {
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

  static async createUser(
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    privilege,
    signup_date
  ) {
    const sql = ` 
        START TRANSACTION;
        INSERT INTO user_profiles (username, password, first_name, last_name, email, birthdate, privilege, signup_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        
        SET @last_id = LAST_INSERT_ID();

        COMMIT;
      `;

    try {
      const result = await this.query(sql, [
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date,
      ]);
      return result;
    } catch (error) {
      console.error('error creating user', error);
      throw error;
    }
  }
  static async updateUser(
    profileId,
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    activities
  ) {
    const sql = `
        START TRANSACTION;
    
        UPDATE user_profiles 
        SET username = ?, password = ?, first_name = ?, last_name = ?, email = ?, birthdate = ?
        WHERE profile_id = ?;
        
        DELETE FROM user_activities WHERE profile_id = ?;
        
        INSERT INTO user_activities (profile_id, activity_id) 
        SELECT ?, id FROM activities WHERE activity_type IN (?);
    
        COMMIT;
      `;

    try {
      const results = await this.query(sql, [
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        profileId,
        profileId,
        profileId,
        activities,
      ]);

      return results;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  static async deleteUser(profileId) {
    const sql = `
        START TRANSACTION;
    
        DELETE FROM user_activities WHERE profile_id = ?;
        
        DELETE FROM user_profiles WHERE profile_id = ?;
    
        COMMIT;
      `;

    try {
      const results = await this.query(sql, [profileId, profileId]);

      return results;
    } catch (error) {
      console.error('Error deleting user profile:', error);
      throw error;
    }
  }
}

export default UserModels;
