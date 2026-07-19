const express = require("express")
const authrouter = express.Router() ;
const validUser = require("../../Utils/Validation");
const bcrypt = require("bcrypt");
const User = require("../Models/User");

authrouter.post("/register", async (req, res) => {
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

authrouter.post("/login" ,async (req ,res) =>{
    try{
        const doc = await User.findById(req.body._id) ;
        //By this simple single line  code it has became  verify easy to us to know if in case even if a nother file also needs to verify the .password then again rather reebering syntax through this it will help us
        const pass = await doc.verifyPassword(req.body.password)
        if((req.body.emailID != doc.emailID) ||(!pass))
            throw  new  Error("Invaid credentials")
        //TO generate he JWT token 
        const token  = doc.getJWT();
        res.cookie("token" , token)
        res.send("Login  successful")
    }catch(err){
        res.send(err.message)
    }
})

authrouter.post("/logout" ,async (req, res) => {
    try{
        //See to meke logout simply means  that user needs to login again or we can say that we need to make user ion such a way that use can't able to ge access 
        //And one more thing is that as ever user request to server then use along with the request user will send the cookies and as ever cookies reaches to this server now this server will do one thing that as ever if server send any cookies then the browser o postman automatically remove the old cookie because browser will thought that as server sended new token it means that as if token name and path all these are same then  browser as all are same so browser will update the token as because toekns needs to be identify unique name so that browser an get to know to which server this browser needs to send the token to which eserver  so here server will take this as an adavantage for the logout purpose  as i will generate the randome dummy token which will be  invalid from as if user hit request with that token definitely  token will going to rejected so we user can't able to use the serveices
        // res.cookie("token" , "afbfggfg gy egfh ") ;
        // res.cookie("tokens" , "abcdefghijk") ;
        res.cookie("token" , null ,{expires : new Date(Date.now())})
        res.send("Logout Successfully")
    }catch(err){
        res.status(400).send("Error message :" +err.message)
    }
})

module.exports = authrouter ; 