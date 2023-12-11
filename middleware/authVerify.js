const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { BlacklistToken } = require('../models');
dotenv.config()
 
const authVerify = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split("Bearer")[1].trim()
        if(token === undefined){
            throw Error("Token tidak boleh kosong !")
        }

        // Check if the token is blacklisted
        const isBlacklisted = await BlacklistToken.findOne({
            where: {
                token: token,
            },
        });

        if (isBlacklisted) {
            throw new Error("Token telah dinonaktifkan");
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