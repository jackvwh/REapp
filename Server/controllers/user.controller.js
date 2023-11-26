
  import {
    UserModels
  } from '../Models/users.models.js';
  
  class UserController {
    constructor() {
      this.userModels = new UserModels();
    }
    async updateUser(req, res) {
      const id = req.params.id;
      const { image, userName, firstName,lastName, email, birthdate, interests } = req.body;
  
      try {
        const updatedUser = await this.UserModels.updateUser(
          id,
          image,
          userName,
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
  


  