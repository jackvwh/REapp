import {
    createUser_db,
    deleteUser_db,
    readUserById_db,
    readAllUsers_db,
    updateUser_db,
  } from '../models/albums.models.js';


  export async function updateUser(req, res) {
    const id = req.params.id;
    const { image, fullName, email, age, interests, hobbies, about } = req.body;
  
    try {
      const updatedUser= await updateUser_db(
        id,
        image,
        fullName,
        email,
        age,
        interests,
        hobbies,
        about
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occured while updating user' });
    }
  }

    export function deleteUser(req, res) {
    const id = req.params.id;

    try {
        const deletedUser = deleteUser_db(id);
        res.status(200).json(deletedUser);
        }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occured while deleting user' });
        }
    }



  