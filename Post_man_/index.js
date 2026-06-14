const express = require("express")

const app = express();
// app.use((req,res)=>{
//     console.log(req)
//     res.send("I am server")
// })

// app.get("/",(req,res)=>{
//     res.send("get  request has done by the user ")
// })

// app.get("/",(req,res)=>{
//     res.send({"name":"vishnu"})
// })

// app.post("/",(req,res)=>{
//     res.send("Post request has done by the user ")
// })

//See from the request we will get to know which method will be execute through this method://From this one 

// app.use(express.json(),(req,res)=>{
//     // console.log("hello i think whenever data will come this will be executed")
// });

// app.use(express.json());

// app.get("/user",(req,res)=>{
//     res.send("Client requested through get method")
// })

// app.post("/user",(req,res)=>{
//     // console.log(req[body])

//     console.log(req.body)
//     res.send("Client requested through Post method")
// })
// console.log("hello")

const BookStore=[
    {id:1 ,name:"vishnu",age:19},
    {id:2 ,name:"vardhan",age:19},
    {id:3 ,name:"Naidu",age:19}
]


app.use(express.json());
//These all asynchronous tasks are waiting in the queue so the above line has to  write first
app.post("/book/:username",(req,res)=>{
    console.log(req.query);
    BookStore.push(req.body);
    //See client has to know whether we had pushed data
    res.send("element is added ")
})

// app.use(express.json());
// console.log("Hello")
app.listen(400,()=>{
    console.log("Server is running at the port  number 40")
})