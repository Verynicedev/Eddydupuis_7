// Import function from User Model
import { getUserByEmail, getUserById, insertUser, updateUserById, deleteUserById } from "../models/userModel.js";

// const bcrypt = require('bcrypt');
// import bcrypt from "bcrypt";
// const jwt = require('jsonwebtoken');


// Login User by Email 
export const loginUserByEmail = (req, res) => {
    getUserByEmail(req.body.email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
            // const user = {
            //     userId: result[0].userId,
            //     userEmail: result[0].email,
            //     userPassword: result[0].password,
            //     userPseudonyme: result [0].pseudonyme,
            // };

            // bcrypt
            //     .compare(password, user.userPassword)
            //     .then((valid) => {
            //         if (!valid) {
            //             return res.status(401).json({ error: 'Mot de passe incorrect!'});
            //         }
            //         const accessToken = generateAccessToken(user);
            //         res.status(200).json({ accessToken: accessToken});
            //     })
            //     .catch((err) => res.status(500).json({ err }));
        }
    });
}

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