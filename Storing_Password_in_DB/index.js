// const bcrypt = require("bcrypt") ;

// //As suppose if i want to store the  password then
// const password = "vishnu@531" ;

// async function Hash(){
//     const hashpass = await bcrypt.hash(password , 10) ;
    
//     console.log(hashpass);
// }

// Hash() ;

// const bcrypt = require("bcrypt") ;

// //As suppose if i want to store the  password then
// const password = "vishnu@531" ;

// async function Hash(){
//     console.time("hash")
//     const hashpass = await bcrypt.hash(password , 10) ;
//     console.timeEnd("hash");
//     console.log(hashpass);
// }

// Hash() ;

const bcrypt = require("bcrypt") ;

//As suppose if i want to store the  password then
const password = "vishnu@531" ;
async function Hash(){
    console.time("hash") ;
    const salt = await bcrypt.genSalt(10) ;
    const hashpass = await bcrypt.hash(password , salt) ;
    console.timeEnd("hash");
    console.log(salt)
    console.log(hashpass);
}

Hash() ;