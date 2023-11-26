class UserModels {
    async updateUser(profileId, username, password, firstName, lastName, email, birthdate, activities) {
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
        const results = await query(sql, [
          username,
          password,
          firstName,
          lastName,
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
  
    async deleteUser(profileId) {
      const sql = `
        START TRANSACTION;
    
        DELETE FROM user_activities WHERE profile_id = ?;
        
        DELETE FROM user_profiles WHERE profile_id = ?;
    
        COMMIT;
      `;
  
      try {
        const results = await query(sql, [profileId, profileId]);
  
        return results;
      } catch (error) {
        console.error('Error deleting user profile:', error);
        throw error;
      }
    }
  }
  

  const userProfileManager = new UserProfileManager();
  userProfileManager.updateUser
  userProfileManager.deleteUser
  