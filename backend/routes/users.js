import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verification.js";
import { 
    deleteUser, 
    getAllUser, 
    getUser, 
    updateUser 
} from "../controllers/userController.js";

const router = express.Router();


// router.get("/checkauth", verifyToken, (req,res,next) =>{
//     res.send("Hello user, you are authenticated");
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next) =>{
//     res.send("Hello User, your logged in, you can delete account");
// });

// router.get("/checkadmin/:id", verifyUser, (req,res,next) =>{
//     res.send("Hello Admin, your logged in, you can delete all account");
// });

// Update User route
router.put("/:id", verifyUser, updateUser);

// Delete hotel route
router.delete("/:id", verifyUser, deleteUser);

// Get an hotel route
router.get("/:id", verifyUser, getUser);

// Get All hotel route
router.get("/", verifyAdmin, getAllUser);


export default router