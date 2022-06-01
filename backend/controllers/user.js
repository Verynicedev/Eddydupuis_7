// Import function from User Model
import { getUserById, insertUser, updateUserById, deleteUserById } from "../models/userModel.js";

// Get Single User 
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New User
export const createUser = (req, res) => {
    const data = req.body;
    console.log(data)
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update User
export const updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data)
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete User
export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}