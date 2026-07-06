
const mongoose = require("mongoose");
const {Schema} = mongoose ;

const userSchema = new Schema({
        name : String ,
        age : Number ,
        gender : String ,
        city : String
})

//Model creation
const User = mongoose.model("user" , userSchema);

module.exports = User ;