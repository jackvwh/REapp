
  import {
    UserModels
  } from '../Models/users.models.js';
  
  class UserController {
    constructor() {
      this.userModels = new UserModels();
    }

    async createUser(req, res) {
      const {
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        privilege,
        signup_date,
      } = req.body;
  
      try {
        const newUser = await this.UserModels.createUser(
          username,
          password,
          first_name,
          last_name,
          email,
          birthdate,
          privilege,
          signup_date
        );
        res.status(200).json(newUser);
      } catch (error) {
        console.error("error creating user", error);
        res.status(500).json({ error: 'An error occurred while creating a user' });
      }
    }
  
    async updateUser(req, res) {
      const id = req.params.id;
      const { image, userName,password, firstName,lastName, email, birthdate, interests } = req.body;
  
      try {
        const updatedUser = await this.UserModels.updateUser(
          id,
          image,
          userName,
          password,
          firstName,
          lastName,
          email,
          birthdate,
          interests
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating user' });
      }
    }
  
    async deleteUser(req, res) {
      const id = req.params.id;
  
      try {
        const deletedUser = await this.UserModels.deleteUser(id);
        res.status(200).json(deletedUser);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting user' });
      }
    }
  }
  
  export default new UserController();
  


  

