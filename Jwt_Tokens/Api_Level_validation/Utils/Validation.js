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