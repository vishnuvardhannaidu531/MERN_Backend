const mongoose = require("mongoose");
const {Schema} = mongoose ;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

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

//See at here never ever write the  ()=> this function because as  the method is of the class so definlitely if we use this ()=> this type of function then it will take the th
// at global or that this pointer will act as the lexical scope as we know this thing but in  class this need to point to the current object which has called this function  right to that function it has to point right
userSchema.methods.getJWT = function(){
        const token = jwt.sign({ name : this.fname , emailID: this.emailID }, process.env.SECRET_KEY , {expiresIn : "1min"});
        return  token ;
}
//See in this method we will verify that  the password that sended by the user is same password that which we had stored in our database 
userSchema.methods.verifyPassword = async function (pass){
        return  await bcrypt.compare(pass , this.password)
}
const User = mongoose.model("user" , userSchema);
module.exports = User ;