const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.get('/all',userController.allUsers);

router.post('/add',userController.addUser);

router.patch('/:id',userController.updateUser);

router.put('/:id',userController.updateUser);

router.delete('/:id',userController.deleteUser);

module.exports=router;