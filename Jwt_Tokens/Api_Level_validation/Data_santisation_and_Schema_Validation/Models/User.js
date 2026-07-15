const mongoose = require("mongoose");
const {Schema} = mongoose ;

const userSchema = new Schema({
        fname :{
                type : String,
                required:true,
                minLength : 3, 
                maxLength : 10  
        },
        lname : {
                type : String
        },
        age : {
                type : Number, 
                min : 18,
                max : 70
        },
        gender : {
                type :String,
                validate(value){
                        if(!(["male" , "female" , "others"].includes(value)))
                                throw new Error("Invalid gender")

                }
        },
        emailID : {
                type : String ,
                unique: true ,
                trim  : true ,
                lowercase : true,
                required :true
        },
        password : {
                type : String,
                required : true  
        },  
        photo : {
                type :String,
                default : "This is the default photo"
        }
} , {timestamps : true})
const User = mongoose.model("user" , userSchema);
module.exports = User ;