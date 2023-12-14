import UserModels from '../Models/users.models.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default class UserController {
  //this is used for login currently
  static async getUserById(req, res) {
    try {
      const user = await UserModels.getUserById(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while getting user' + error });
    }
  }

  static async getUserProfile(req, res) {
    try {
      // Extract userId from JWT token, not from route parameters
      const userId = req.user.userId;
      const user = await UserModels.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user profile:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while getting user profile' });
    }
  }

  static async LoginUser(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserModels.ValidateUser(username, password);

      if (user) {
        //Generate a JWT token
        const token = jwt.sign(
          { userId: user.profile_id, privilege: user.privilege },
          process.env.JWT_SECRET,
          {
            expiresIn: '8h',
          }
        );

        res.cookie('token', token, {
          // httpOnly: true, //this little bitch here is all or nothing i hate it
          secure: true,
          sameSite: 'Lax',
          maxAge: 8 * 60 * 60 * 1000, // 8 hours
        });
        res.status(200).json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  }

  static async Logout(req, res) {
    res.clearCookie('token');
    res.status(200).send('Logged out successfully');
  }

  static async createUser(req, res) {
    const { username, password, first_name, last_name, email, birthdate } = req.body;

    try {
      const newUser = await UserModels.createUser(
        username,
        password,
        first_name,
        last_name,
        email,
        birthdate
      );
      //needs to work like a a login and set a token and cookie
      const token = jwt.sign(
        { userId: user.profile_id, privilege: user.privilege },
        process.env.JWT_SECRET,
        {
          expiresIn: '8h',
        }
      );

      res.cookie('token', token, {
        // httpOnly: true,
        secure: true,
        sameSite: 'Lax',
        maxAge: 8 * 60 * 60 * 1000, // 8 hours
      });
      res.status(200).json({ user: newUser, token });
    } catch (error) {
      console.error('error creating user', error);
      res
        .status(500)
        .json({ error: 'An error occurred while creating a user' + error });
    }
  }

  static async updateUser(req, res) {
    const userId = req.params.userId;
    const { username, password, firstName, lastName, email, birthdate, activities } =
      req.body;
    try {
      const updatedUser = await UserModels.updateUser(
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
        birthdate,
        activities
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
    const id = req.params.userId;
    try {
      const deletedUser = await UserModels.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'An error occurred while deleting user' + error });
    }
  }
  static async updatePrivilege(req, res) {
    try {
      const { username, privilege } = req.body;
      await UserModels.updateUserPrivilege(username, privilege);
      res.status(200).json({ message: 'User privilege updated successfully' });
    } catch (error) {
      console.error('Error updating user privilege:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}
