import User from "../models/User.js";

/** Api function to update user */
export const updateUser = async (req, res, next) => {
   try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, // geting requesting query params
            { $set: req.body},  // we update using mongodb $set mtd, what to is inside body
            {new: true} // setting new true will update our new data on mongodb else it will not update
        );
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
};

/** Api function to delete user */
export const deleteUser = async (req, res, next) => {
    try{
        // we won't create a vairable since we are not returning anything
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
    }
    catch(err){
        next(err);
    }
};

/** Api function to get an user */
export const getUser = async (req, res, next) => {
   try{
        const oneUser = await User.findById(
            req.params.id
        );
        res.status(200).json(oneUser);
    }
    catch(err){
        next(err);
    }
};

/** Api function to get all user */
export const getAllUser = async (req, res, next) => {
    try{
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }
    catch(err){
        next(err);
    }
};