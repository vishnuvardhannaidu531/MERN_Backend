const express = require("express") ;
const userRouter = express.Router() ;
const User = require("../Models/User");
const Valid = require("../Valid")
// Get all users
userRouter.get("/info", Valid ,async (req, res) => {
    try {
        //If the token recived at this server is true then it will return the payload other wise it will throw an error that will handle at the catch block or we  can say it as if eror occurs then it moves to the catch block
        const payload = req.payload ; 
        // console.log(payload)
        const users = await User.findOne({emailID : payload.emailID})        
        res.send(users);    
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// Delete user
userRouter.delete("/info/:id", Valid , async (req, res) => {
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
userRouter.put("/info", Valid ,async (req, res) => {
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

module.exports = userRouter ;