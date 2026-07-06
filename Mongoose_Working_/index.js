// const express = require("express") ;
// const app = express();
// require("./database")

// app.use(express.json()) ;

// app.listen(3000 , () => {
//     console.log("Listening at port number 3000")
// })

// const express = require("express") ;
// const app = express();
// const main =  require("./database")

// app.use(express.json()) ;

// main().then(
//     ()=>{
//         console.log("Connected to the DB");
//         app.listen(3000 , () => {
//             console.log("Listening at port number 3000")
//         })

//     }
// ).catch((err)=> console.log(err));

// const express = require("express") ;
// const app = express();
// const main =  require("./database")
// const User = require("./Models/User")

// app.use(express.json()) ;

// main().then(
//     async ()=>{
//         console.log("Connected to the DB");
//         app.listen(3000 , () => {
//             console.log("Listening at port number 3000")
//         })
//         const ans = await User.find({name : "vishnu"}) ;
//         console.log(ans);
//     }
// ).catch((err)=> console.log(err));


const express = require("express") ;
const app = express();
const main =  require("./database")
const User = require("./Models/User")

app.use(express.json()) ;

app.get("/info" , async(req , res )=>{
    // const ans  = await User.find({name : "vishnu"})
    const ans  = await User.find({})
    // res.send("Hello Coder Army") ;
    res.status(200).send(ans); 
})

app.post("/info" ,async (req,res)=>{
    // await User.create(req.body) ;
    // res.send("data Successfully stored in the database")
    //As wheneveer we do  network call then  we need execute that in the try catch block 
    //Because some times it may send us the error so we  need t handle it so for that we need to use this thing 
    try{
        await User.create(req.body) ;
        res.send("data Successfully stored in the database")
    }catch(err){
        res.status(500).send(err);
    }
})

app.delete("/info" , async (req , res)=>{
    try{
        await User.deleteOne({name : "vishnu"});
        res.send("Item deleed Successfully") ;
    }catch(err){
        res.status(500).send(err);
    }
    
})
main().then(
    async ()=>{
        console.log("Connected to the DB");
        app.listen(3000 , () => {
            console.log("Listening at port number 3000")
        })
        // const ans = await User.find({name : "vishnu"}) ;
        // console.log(ans);
    }
).catch((err)=> console.log(err));