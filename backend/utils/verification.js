import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

/** Token verification */
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"));
    };

    jwt.verify(token, process.env.JWT, (err, userTokenInfo) => {
        if(err) return next(createError(403, "Invalid token!"));
        req.user = userTokenInfo;
        next();
    });
};

/** user verification */
export const verifyUser = (req, res, next)=>{
    // to verify user, it must be athenticated first
   verifyToken(req,res, ()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    } else {
        return next(createError(403, "You are not Authorized!"));
    };
   });
};


/** admin verification */
export const verifyAdmin = (req, res, next)=>{
    // to verify Admin, it must be athenticated first
   verifyToken(req,res, ()=>{
    if(req.user.isAdmin){
        next();
    }else {
        return next(createError(403, "You are not Authorized!"));
    };
   });
};