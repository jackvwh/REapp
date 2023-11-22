import {
  createUser_db,
  deleteUser_db,
  readUserById_db,
  readAllUsers_db,
  updateUser_db,
} from "../models/albums.models.js";

class UserController {
  async createUser(req, res) {
    const { firstName, lastName, email, userName, password } = req.body;

    try {
      const newUser = await createUser_db(
        firstName,
        lastName,
        email,
        userName,
        password
      );
      res.status(200).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while creating user" });
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;
    const {
      image,
      userName,
      firstName,
      lastName,
      email,
      birthdate,
      interests,
      about,
    } = req.body;

    try {
      const updatedUser = await updateUser_db(
        id,
        image,
        userName,
        firstName,
        lastName,
        email,
        birthdate,
        interests,
        about
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating user" });
    }
  }

  deleteUser(req, res) {
    const id = req.params.id;

    try {
      const deletedUser = deleteUser_db(id);
      res.status(200).json(deletedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while deleting user" });
    }
  }
}

export default new UserController();
