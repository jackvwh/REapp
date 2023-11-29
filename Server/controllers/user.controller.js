import UserModels from '../Models/users.models.js';

export default class UserController {
  static async createUser(req, res) {
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
      const newUser = await UserModels.createUser(
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
      console.error('error creating user', error);
      res.status(500).json({ error: 'An error occurred while creating a user' });
    }
  }

  static async updateUser(req, res) {
    const id = req.params.id;
    const {
      username,
      password,
      first_name,
      last_name,
      email,
      birthdate,
      interests,
    } = req.body;

    try {
      const updatedUser = await UserModels.updateUser(
        id,
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate,
        interests
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while updating user' + error });
    }
  }

  static async deleteUser(req, res) {
    const id = req.params.id;

    try {
      const deletedUser = await UserModels.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting user' });
    }
  }
}
