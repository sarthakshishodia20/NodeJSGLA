const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

const allUsers=(req,res)=>{
    res.send("Hello Welcome to all/userss page");
}

const addUser=(req,res)=>{
    res.send("Hello Welcome to add user page");
}

const updateUser=(req,res)=>{
    res.send("Hello Welcome to update user page");
}

const deleteUser=(req,res)=>{
    res.send("Hello Welcome to delete user page");
}





