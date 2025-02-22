const express=require('express');
const app=express();

const userRoutes=require('./routes/userRoutes');

app.use('/users', userRoutes);
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(3000, function(){
    console.log('Server is running on port 3000');
});