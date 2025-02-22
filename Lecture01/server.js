const express=require('express');
const app=express();
const port=process.env.PORT || 3030;

app.get("/",(req,res)=>{
    res.send("<h1>Root Page</h1>");
});

app.get("/home",(req,res)=>{
    res.send("<h1>Home Page</h1>");
}
);

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
}
);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

