// Import function from Topic Model
import { getTopics, getTopicById, insertTopic, updateTopicById, deleteTopicById } from "../models/topicModel.js";
 
// Get All Topics
export const showTopics = (req, res) => {
    getTopics((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Topic 
export const showTopicById = (req, res) => {
    getTopicById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Topic
export const createTopic = (req, res) => {
    const data = req.body;
    console.log(data)
    insertTopic(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Topic
export const updateTopic = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data)
    updateTopicById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Topic
export const deleteTopic = (req, res) => {
    const id = req.params.id;
    deleteTopicById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}