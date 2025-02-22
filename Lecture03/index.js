const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send("Req Sent");
})

app.get('/product/:type',(req,res)=>{
    console.log(req.params);
    res.send("Req Sent");
})

app.get('/product',(req,res)=>{
    console.log(req.query);
    res.send("Req Sent");
});

app.get('/product/:id/:price',(req,res)=>{
    console.log(req.params);
    const id=req.params.id;
    const price=req.params.price;
    console.log(id,price);
    res.send("Req Sent");
});

app.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
});
