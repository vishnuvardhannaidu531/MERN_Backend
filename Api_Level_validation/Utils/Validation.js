// function validUser(data){
//     const mandatoryFields = ["fname" , "password" , "emailID"]
//     const IsAllowed = mandatoryFields.every((k)=> Object.keys(data.body).includes(k));
//     if(!IsAllowed)
//         throw new Error("Needs to fill mandatory Fields");
//     //Lets at first check wheteher the fname of the user is more than  the 3  characters
//     const  name = data.body.fname;
//     if(name.size <3){
//         throw new Error("Name  has to  be more than the 3 characters")  ;
//     }
//     if(name.size >15){
//         throw new Error("Name should not contain more than  15 characters")
//     }
//     //And even we  eeed tol  validate email also 
//     //To do this thing we may do that validation  by our own or we  can use the validators for it

//     //Checking in password as lowercase , upperase and special characers whether present in this or not
//     // //See as password has to be store in  the hash code manner
    // const {password , ...doc} = data.body ;
    // const hashpass = await bcrypt.hash(password , 10) ;
    // data.body.password = hashpass ;
// }
const validator = require("validator");

// function validUser(req) {
//     const { fname, emailID, password } = req.body;
        
//     // Mandatory fields
//     if (!fname || !emailID || !password) {
//         throw new Error("Please fill all mandatory fields.");
//     }

//     // Name validation
//     if (typeof fname !== "string") {
//         throw new Error("First name must be a string.");
//     }

//     if (fname.length < 3 || fname.length > 20) {
//         throw new Error("First name should contain 3 to 20 characters.");
//     }

//     // Email validation
//     if (!validator.isEmail(emailID)) {
//         throw new Error("Invalid email address.");
//     }

//     // Password validation
//     if (!validator.isStrongPassword(password)) {
//         throw new Error(
//             "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
//         );
//     }
// }



function validUser(req) {
    const { fname, emailID, password } = req.body;
        
    // Mandatory fields
    if (!fname || !emailID || !password) {
        throw new Error("Please fill all mandatory fields.");
    }

    if (
        typeof fname !== "string" ||
        fname.length < 3 ||
        fname.length > 20 ||
        !validator.isEmail(emailID) ||
        !validator.isStrongPassword(password)
    ) {
        throw new Error("Invalid credentials.");
    }
}

module.exports = validUser;