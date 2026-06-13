const http=require("http")
// const server = http.createServer((req,res)=>{
//     res.end('Hello from server')
// });
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("home  page")
    }else if(req.url === "/about"){
        res.end("about page");
    }else{
        res.end("error occured ")
    }
});
server.listen(4000,()=>{
    console.log("Server listening at port 4000")
})