// import express
import express from "express";

 // import function from user controller
import { loginUserByEmail, showUserById, createUser, updateUser, deleteUser } from "../controllers/user.js";
// import function from topic controller
import { showTopics, showTopicById, createTopic, updateTopic, deleteTopic } from "../controllers/topic.js";
// import function from comment controller
import { showComments, showCommentById, createComment, updateComment, deleteComment } from "../controllers/comment.js";

 
// init express router
const router = express.Router();
 
//////////////////////////////////////////////////////////

// Routes des users
// Login User
router.get('/users/login', loginUserByEmail);

// Get Single User
router.get('/users/:id', showUserById);
 
// Create New User
router.post('/newusers', createUser);
 
// Update User
router.put('/users/:id', updateUser);
 
// Delete User
router.delete('/users/:id', deleteUser);

//////////////////////////////////////////////////////////

// Routes des topics
// Get All Topics
router.get('/topics', showTopics);
 
// Get Single Topic
router.get('/topics/:id', showTopicById);
 
// Create New Topic
router.post('/newtopics', createTopic);
 
// Update Topic
router.put('/topics/:id', updateTopic);
 
// Delete Topic
router.delete('/topics/:id', deleteTopic);

//////////////////////////////////////////////////////////

//Routes des comments
// Get All Comments
router.get('/comments', showComments);
 
// Get Single Comment
router.get('/comments/:id', showCommentById);
 
// Create New Comment
router.post('/newcomments', createComment);
 
// Update Comment
router.put('/comments/:id', updateComment);
 
// Delete Comment
router.delete('/comments/:id', deleteComment);
 
// export default router
export default router;