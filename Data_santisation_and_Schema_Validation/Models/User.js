
// const mongoose = require("mongoose");
// const {Schema} = mongoose ;

// const userSchema = new Schema({
//         fname :{
//                 type : String,
//                 required:true,
//                 minLength : 3, 
//                 maxLength : 10  
//         },
//         lname : {
//                 type : String
//         },
//         age : {
//                 type : Number, 
//                 min : 18,
//                 max : 70
//         },
//         gender : {
//                 type :String,
//                 // enum : ["male",  "female" , "others"]
//                 validate(value){
//                         if(!(["male" , "female" , "others"].includes(value)))
//                                 throw new Error("Invalid gender")

//                 }
//         },
//         emailID : {
//                 type : String ,
//                 unique: true ,
//                 trim  : true ,
//                 lowercase : true 
//         },
//         password : {
//                 type : String,
//                 required : true  
//         },  
//         //See as we  know that the photo will be hosted some where and then its url is stored at here 
//         photo : {
//                 type :String,
//                 default : "This is the default photo"//A here we  can store the url of  the photos which have will be assigned by default for he users
//         }
//         // name : String ,
//         // age : Number ,
//         // gender : String ,
//         // city : String
// })

// //Model creation
// const User = mongoose.model("user" , userSchema);

// module.exports = User ;



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
                // enum : ["male",  "female" , "others"]
                validate(value){
                        if(!(["male" , "female" , "others"].includes(value)))
                                throw new Error("Invalid gender")

                }
        },
        emailID : {
                type : String ,
                unique: true ,
                trim  : true ,
                lowercase : true 
        },
        password : {
                type : String,
                required : true  
        },  
        //See as we  know that the photo will be hosted some where and then its url is stored at here 
        photo : {
                type :String,
                default : "This is the default photo"//A here we  can store the url of  the photos which have will be assigned by default for he users
        }
        // name : String ,
        // age : Number ,
        // gender : String ,
        // city : String
} , {timestamps : true})

//Model creation
const User = mongoose.model("user" , userSchema);

module.exports = User ;