import mysqlConnection from '../Db/db.js';

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

  static async getUserById(profile_id) {
    const sql = `
      SELECT 
        user_profiles.*,
        activities.*,
        user_activities.*
      FROM 
        user_profiles
          LEFT JOIN user_activities ON user_profiles.profile_id = user_activities.profile_id
          LEFT JOIN activities ON user_activities.activity_id = activities.activity_id
      WHERE user_profiles.profile_id = ?;

      `;
    try {
      const result = await this.query(sql, [profile_id]);
      // convert the flat array of objects to a user objects with nested activities
      const user = {
        profileId: result[0].profile_id || Number(profile_id),
        username: result[0].username,
        password: result[0].password,
        firstName: result[0].first_name,
        lastName: result[0].last_name,
        email: result[0].email,
        birthdate: result[0].birthdate,
        activities: [],
      };
      while (result.length > 0) {
        const activity = {
          activityId: result[0].activity_id,
          activityType: result[0].activity_type,
        };
        user.activities.push(activity);
        result.shift();
      }
      return user;
    } catch (error) {
      console.error('error getting user', error);
      throw new Error(error);
    }
  }

  static async createUser(
    username,
    password,
    first_name,
    last_name,
    email,
    birthdate,
    privilege
  ) {
    const sql = ` 
        START TRANSACTION;

        INSERT INTO user_profiles (username, password, first_name, last_name, email, birthdate, privilege)
        VALUES (?, ?, ?, ?, ?, ?, 1);
        
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
      ]);
      return result;
    } catch (error) {
      console.error('error creating user', error);
      throw new Error(error);
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
        SELECT ?, activity_id FROM activities WHERE activity_type IN (?);
    
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
      throw new Error(error);
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
      throw new Error(error);
    }
  }
}

export default UserModels;
