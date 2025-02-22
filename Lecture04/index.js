const express=require('express');
const app=express();
const port=3000;

const isLoggedIn=require('./isLoggedIn');
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/home',isLoggedIn,(req,res,next)=>{
    console.log("Working Backend");
    res.send('Home Page');
    next();
})

app.get('/product/:id[0-9]',(req,res)=>{ //regular expression bhi likh sakte hai iske andr
    res.send('Product Page');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    });
// Output: Server is running on port 3000