const jwt = require("jsonwebtoken");

const identifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token){
            return res.status(401).json({
                message : "Token Not Provided ! Unauthorized Access"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = identifyUser;