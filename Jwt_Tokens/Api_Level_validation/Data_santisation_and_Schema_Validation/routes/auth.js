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

module.exports = authrouter ; 