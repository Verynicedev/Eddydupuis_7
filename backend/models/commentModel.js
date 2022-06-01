// import connection
import db from "../config/database.js";

// Get All Comments
export const getComments = (result) => {
    db.query("SELECT * FROM comment", (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Get Single Comment
export const getCommentById = (id, result) => {
    db.query("SELECT * FROM comment WHERE commentId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    }); 
}

// Insert Comment to Database
export const insertComment = (data, result) => {
    db.query("INSERT INTO comment SET ?", [data], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Update Comment to Database
export const updateCommentById = (data, id, result) => {
    db.query("UPDATE comment SET content = ? WHERE commentId = ?", [data.content, id], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Delete Comment to Database
export const deleteCommentById = (id, result) => {
    db.query("DELETE FROM comment WHERE commentId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
    result(err, null);
        } else {
    result(null, results);
    }
    }); 
}