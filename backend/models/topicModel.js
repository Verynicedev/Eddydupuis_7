// import connection
import db from "../config/database.js";

// Get All Topics
export const getTopics = (result) => {
    db.query("SELECT * FROM topic", (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Get Single Topic
export const getTopicById = (id, result) => {
    db.query("SELECT * FROM topic WHERE topicId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    }); 
}

// Insert Topic to Database
export const insertTopic = (data, result) => {
    db.query("INSERT INTO topic SET ?", [data], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Update Topic to Database
export const updateTopicById = (data, id, result) => {
    db.query("UPDATE topic SET title = ?, content = ?, imageUrl = ? WHERE topicId = ?", [data.title, data.content, data.imageUrl, id], (err, results) => { 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}

// Delete Topic to Database
export const deleteTopicById = (id, result) => {
    db.query("DELETE FROM topic WHERE topicId = ?", [id], (err, results) => { 
        if(err) {
            console.log(err);
    result(err, null);
        } else {
    result(null, results);
    }
    }); 
}