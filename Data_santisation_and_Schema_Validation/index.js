
const express = require("express") ;
const app = express();
const main =  require("./database")
const User = require("./Models/User")

app.use(express.json()) ;

app.post("/register" , async (req , res) => {
    try{
        await User.create(req.body);
        res.send("User registered Successfully")
    }catch(err){
        // console.log("Error :"+err.message);
        res.status(500).send(err.message)
    }
}) ;

app.get("/info" , async(req ,res) =>{
    try{
        const ans = await User.find({});
        res.send(ans) ;
    }catch(err){
        res.status(500).send(err.message)
    }
})

//Searching through id 
app.get("/info/:id" ,  async (req,res)=>{
    try{
        const result = await User.findById(req.params.id) ;
        res.send(result)
    }catch(err){
        res.status(500).send(err.message);
    }
})

//Deleting the document through an id
app.delete("/info/:id" ,async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id) ;
        res.send("Document deleted Successfully")
    }catch(err){
        res.status(500).send(err.message) ; 
    }
})

//Now to updating the documents as per the id 
//For that we can use findByIDAndUpdate

app.put("/info" , async(req , res) =>{
    // try {
    //     await User.findByIdAndUpdate(req.body._id ,req.body) ;
    //     res.send("Data updated Successfully") ;
    // }catch(err){
    //     res.status(500).send(err.message)  ; 
    // }

    try {
        const {_id , ...update} = req.body
        await User.findByIdAndUpdate(_id ,  update , {"runValidators" : true}) ;
        res.send("Data updated Successfully") ;
    }catch(err){
        res.status(500).send(err.message)  ; 
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