const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

const main = require("./database");
const User = require("./Models/User");
const validUser = require("../Utils/Validation");

app.use(express.json());

// Register User
app.post("/register", async (req, res) => {
    try {
        // Validate request body
        validUser(req);

        // Hash password
        req.body.password = await bcrypt.hash(req.body.password, 10);

        // Save user
        await User.create(req.body);

        res.status(201).send("User registered successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.post("/login" ,async (req ,res) =>{
    try{
        //I  need to do  validation as verifying that the credentials send  by  the user is true or not
        const doc = await User.findById(req.body._id) ;
        // const hashpass = await bcrypt.hash(req.body.password , )

        //AS the salt will be that document so as we want to compare as  through by applying that has function so we will compare thing
        const pass = await bcrypt.compare(req. body.password , doc.password)
        if((req.body.emailID != doc.emailID) ||(!pass))
            throw  new  Error("Invaid credentials")
        res.send("Login  successful")
    }catch(err){
        res.send(err.message)
    }
})

// Get all users
app.get("/info", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get user by ID
app.get("/info/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete user
app.delete("/info/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send("User deleted successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update user
app.put("/info", async (req, res) => {
    try {
        const { _id, ...update } = req.body;

        await User.findByIdAndUpdate(_id, update, {
            runValidators: true,
            new: true
        });

        res.send("User updated successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

main()
    .then(() => {
        console.log("Connected to DB");

        app.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    })
    .catch((err) => console.log(err));

// const express = require("express") ;
// const app = express();
// const main =  require("./database")
// const User = require("./Models/User")
// const bcrypt = require("bcrypt");
// const validUser = require("../Utils/Validation");

// app.use(express.json()) ;

// app.post("/register" , async (req , res) => {
//     try{
//         //See as if at here only if i do all the things  as the password converison into hash code and password 
//         //Validation such as the password sended by user has to  be constrains as password must contain lower case , upper case and numbers and evn it has to contain special characters 
//         //By this we were making the user not keep a  weak password 
//         //And even as first anem  minimum  has to be of 3 characters as even  this constyraint has also needs to be apply
//         //If i write those all things in this api then it will become messy or coplex code 
//         //So we will keep this code in another file
//         validUser(req)
//         // const {password , ...doc} = req.body ;
//         // const hashpass = await bcrypt.hash(password , 10) ;
//         // data.body.password = hashpass ; 
//         req.body.password = await bcrypt.hash(req.body.password , 10)
//         await User.create(req.body);
//         res.send("User registered Successfully")
//     }catch(err){
//         // console.log("Error :"+err.message);
//         res.status(500).send(err.message)
//     }
// }) ;

// app.get("/info" , async(req ,res) =>{
//     try{
//         const ans = await User.find({});
//         res.send(ans) ;
//     }catch(err){
//         res.status(500).send(err.message)
//     }
// })

// //Searching through id 
// app.get("/info/:id" ,  async (req,res)=>{
//     try{
//         const result = await User.findById(req.params.id) ;
//         res.send(result)
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// })

// //Deleting the document through an id
// app.delete("/info/:id" ,async (req, res)=>{
//     try{
//         await User.findByIdAndDelete(req.params.id) ;
//         res.send("Document deleted Successfully")
//     }catch(err){
//         res.status(500).send(err.message) ; 
//     }
// })

// //Now to updating the documents as per the id 
// //For that we can use findByIDAndUpdate

// app.put("/info" , async(req , res) =>{
//     // try {
//     //     await User.findByIdAndUpdate(req.body._id ,req.body) ;
//     //     res.send("Data updated Successfully") ;
//     // }catch(err){
//     //     res.status(500).send(err.message)  ; 
//     // }

//     try {
//         const {_id , ...update} = req.body
//         await User.findByIdAndUpdate(_id ,  update , {"runValidators" : true}) ;
//         res.send("Data updated Successfully") ;
//     }catch(err){
//         res.status(500).send(err.message)  ; 
//     }
// })
// main().then(
//     async ()=>{
//         console.log("Connected to the DB");
//         app.listen(3000 , () => {
//             console.log("Listening at port number 3000")
//         })
//         // const ans = await User.find({name : "vishnu"}) ;
//         // console.log(ans);
//     }
// ).catch((err)=> console.log(err));