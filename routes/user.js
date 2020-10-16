const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/UserController');
 
userRouter.post('/register', userController.register);
 
userRouter.post('/login', userController.login);
 
userRouter.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);
 
userRouter.get('/users', userController.allowIfLoggedin, userController.getUsers);
 
userRouter.put('/user/:userId', userController.allowIfLoggedin, userController.updateUser);
 
userRouter.delete('/user/:userId', userController.allowIfLoggedin, userController.deleteUser);
 
module.exports = userRouter;