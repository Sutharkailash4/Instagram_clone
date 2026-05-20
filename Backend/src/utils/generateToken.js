const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {

    return jwt.sign(
        {
            id : user._id,
            email : user.email
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn : "7d"
        }
    )
}

module.exports = generateAccessToken;