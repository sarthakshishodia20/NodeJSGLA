const express=require('express');
const app=express();
const add=require('./public/mathFeatures');
const path=require('path');

app.get('/',(req,res)=>{
    res.send('This is Root Page');
})
app.use(express.static(path.join(__dirname,'public')));

app.get('/home',(req,res)=>{
    let person={
        name:'John Doe',
        age:25,
        city:'New York'
    }
    // res.send("Hello Home Page");
    // res.sendFile(path.join(__dirname,'/home.html'));
    res.json(person);

})


app.get('/mathFeatures.js',(req,res)=>{
    console.log(add(5,6));
    res.send('Addition is: '+add(5,6));
});

app.get('*',(req,res)=>{
    console.log(__dirname);
    console.log(req.url);
    res.send('404 Page Not Found');
});

console.log(add);

app.listen(4000,(req,res)=>{
    console.log("Server is running on port 3000");
});
