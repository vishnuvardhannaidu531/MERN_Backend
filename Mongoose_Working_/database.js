// const mongoose = require('mongoose');

// const { Schema } = require("mongoose");

// async function  main(){
//     await mongoose.connect("mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/")
// }
// main().then(()=>console.log("Connected to DB sicessfully"))
// .catch((err)=>console.log(err))
 

// const mongoose = require("mongoose");
// const {Schema} = mongoose ;
// async function main(){
//     await mongoose.connect("mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/");

//     //At here we an write the  schema
//     const userSchema = new Schema({
//         name : String ,
//         age : Number ,
//         gender : String ,
//         city : String
//     })
// }

// main().then(()=>console.log("connected to database"))
// .catch((err)=>console.log(err));


// const mongoose = require("mongoose");
// const {Schema} = mongoose ;
// async function main(){
//     await mongoose.connect("mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/BookStore");

//     //At here we an write the  schema
//     // const userSchema = new Schema({
//     //     name : String ,
//     //     age : Number ,
//     //     gender : String ,
//     //     city : String
//     // })

//     // //Model creation
//     // const User = mongoose.model("user" , userSchema);

//     // const obj  =  new User({name:"Vishnu" ,  age : 19 ,gender :"Male" ,  city : "Kadiri"})
//     // await obj.save();

//     // await User.create({name :"vishnu" , age : 20 , city : "kadiri"}) ;

//     // // await User.insertMany([{name  : "vishnu" ,age : 20 ,city : "Kadiri"}, {name : "vardhan" , age :20 ,city :"Jowkula" , gender : "Male"}]) ;

//     // const ans = await User.find({}) ;
//     // console.log(ans) ;
//     // const ans = await User.find({name : "vishnu"}) ;
//     // console.log(ans) ;
// }

// main().then(()=>console.log("connected to database"))
// .catch((err)=>console.log(err));



const mongoose = require("mongoose");
const {Schema} = mongoose ;
async function main(){
    await mongoose.connect("mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/BookStore");
}
module.exports = main
