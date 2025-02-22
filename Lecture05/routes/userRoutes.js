const express=require('express');
const router=express.Router();

const allRoutes=router.get('/all',(req,res)=>{
    res.send("Hello Welcome to all/userss page");
})

const addRoutes=router.post('/add',(req,res)=>{
    res.send("Hello Welcome to add/users page");
});

const patchRoutes=router.patch('/:id',(req,res)=>{
    res.send("Hello Welcome to update/users page");
});

const putRouter=router.put('/:id',(req,res)=>{
    res.send("Hello Welcome to edit/users page");
}
);

const deleteRouter=router.delete('/:id',(req,res)=>{
    res.send("Hello Welcome to delete/users page");
});


module.exports={
    allRoutes,
    addRoutes,
    patchRoutes,
    putRouter,
    deleteRouter
};