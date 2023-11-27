const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
 
const authVerify = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split("Bearer")[1].trim()
        if(token === undefined){
            throw Error("Token tidak boleh kosong")
        }
        const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY)
        if(verifyToken){
            next()
        }
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            return res.status(401).json({
                message: error.message
            })
        }
        if(error instanceof jwt.JsonWebTokenError){
            return res.status(401).json({
                message: error.message
            })
        } else {
            return res.status(401).json({
                message: error.message
            })
        }
    }
    
}

module.exports = authVerify