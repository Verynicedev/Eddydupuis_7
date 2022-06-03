// import connection
import db from "../config/database.js";

// Package de cryptage de MDP //
import bcrypt from "bcrypt";

// Get UserByEmail
export const getUserByEmail = (email, result) => {
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    }); 
}

// Get Single User
export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE userId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    }); 
}

// Insert User to Database
export const insertUser = (data, result) => {
    bcrypt.hash(data.password, 10)
    .then(hash => {
        db.query("INSERT INTO user SET pseudonyme = ?, email = ?, password = ?", [data.pseudonyme, data.email, hash, data.role], (err, results) => { 
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }); 
    });
}

// Update User to Database
export const updateUserById = (data, id, result) => {
    bcrypt.hash(data.password, 10)
    .then(hash => {
        db.query("UPDATE user SET pseudonyme = ?, email = ?, password = ? WHERE userId = ?", [data.pseudonyme, data.email, hash, data.role, id], (err, results) => { 
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }); 
    }); 
}

// Delete User to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM user WHERE userId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
    result(err, null);
        } else {
    result(null, results);
    }
    }); 
}