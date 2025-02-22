const express=require('express');
const router=express.Router();
const app=express();

const data=require('../database/data');
const {showAllUsers}=require('../controllers/userControllers');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

router.get('/showAll',showAllUsers);

router.get('/new',(req,res)=>{
    res.render('newUser');
})

router.post('/userdata',(req,res)=>{
    const {name,password,email}=req.body;
    const user={
        name,
        password,
        email
    }
    // res.send(user);
    data.push(user);
    console.log(user);
});

module.exports=router;