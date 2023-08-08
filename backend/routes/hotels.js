import express from "express";
import { 
    createHotel, deleteHotel, 
    getAllHotel, getHotel,
    updateHotel,
} from "../controllers/hotelController.js";


const router = express.Router();

// Create hotel route
router.post("/", createHotel);

// Update Hotel route
router.put("/:id", updateHotel);

// Delete hotel route
router.delete("/:id", deleteHotel);

// Get an hotel route
router.get("/:id", getHotel);

// Get All hotel route
router.get("/", getAllHotel);

export default router