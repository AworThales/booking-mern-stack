import express from "express";
import { verifyAdmin } from "../utils/verification.js";
import { 
    createHotel,
    deleteHotel,
    getAllHotel, 
    getHotel, 
    updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

// Create hotel route
router.post("/", verifyAdmin, createHotel);

// Update Hotel route
router.put("/:id", verifyAdmin, updateHotel);

// Delete hotel route
router.delete("/:id", verifyAdmin, deleteHotel);

// Get an hotel route
router.get("/:id", getHotel);

// Get All hotel route
router.get("/", getAllHotel);

export default router