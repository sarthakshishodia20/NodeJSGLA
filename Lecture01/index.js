
const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url==='/home' && req.method==='GET'){
        // res.write('Welcome to Home Page');
        res.statusCode=200;
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url==='/about' && req.method==='GET'){
        res.statusCode=200;
        res.end('<h1>About Page</h1>');
    }
    else if(req.url==='/' && req.method==='GET'){
        res.statusCode=200;
        res.end('<h1>Root Page</h1>');
    }
    else{
        res.statusCode=404;
        res.end('<h1>404 Page Not Found</h1>');
    }
});

server.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
});