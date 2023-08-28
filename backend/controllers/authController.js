import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

/** Api function to Register new user */
export const register = async (req, res, next) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            // username: req.body.username,
            // email: req.body.email,
            ...req.body,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).send("User was created successfully...!");
    }
    catch(err){
        next(err);
    }
};

/** Api function to login user */
export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username}); // fetch user from DB
        if(!user) return next(createError(404, "User doesn't exist!")); // checking and return error if user not found
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);  // comparing user password and DB password if found user
        if(!isPasswordCorrect) return next(createError(404, "Wrong username or password!"));  // return error if isPasswordCorrect is false

        // hashing this info; id & isAdmin, to help verify the user, it take user data and secret_key
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);

        const { password, isAdmin, ...othersData} = user._doc;  // taking off password, isAdmin from user and send otherData of the user, else it will send password. we attach"._doc" so we can see our data
        res.cookie("access_token", token, {  // setting our token into our cookie
            httpOnly: true,   // we doing this bcoz it doesn't allow client side to reach this cookie
        }).status(200).json({details: {...othersData}, isAdmin}); // if everything is okay send users data that is left
    }
    catch(err){
        next(err);
    }
};