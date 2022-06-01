// Import function from Comment Model
import { getComments, getCommentById, insertComment, updateCommentById, deleteCommentById } from "../models/commentModel.js";
 
// Get All Comments
export const showComments = (req, res) => {
    getComments((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Comment 
export const showCommentById = (req, res) => {
    getCommentById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Comment
export const createComment = (req, res) => {
    const data = req.body;
    console.log(data)
    insertComment(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Comment
export const updateComment = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data)
    updateCommentById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Comment
export const deleteComment = (req, res) => {
    const id = req.params.id;
    deleteCommentById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}