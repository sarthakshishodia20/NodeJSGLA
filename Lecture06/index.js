const express=require('express');
const app=express();
const PORT=3000;
const router=express.Router();
const userRoutes=require('./routes/userRoutes');

app.use(express.json());
app.use('/users',router);

// to show all/users pages
// Read Operation
router.get('/all',userRoutes.allRoutes);
// to add new/users
// create operation
// to create something we made post request
router.post('/add',userRoutes.addRoutes);

// to update/users
// patch used for minor changes
router.patch('/:id',userRoutes.patchRoutes);

// to edit/users  put used for major changes
router.put('/:id',userRoutes.putRouter);

// to delete/users
router.delete('/:id',userRoutes.deleteRouter);


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
});
// module.exports=router;