import express from "express";
import { verifyAdmin } from "../utils/verification.js";
import { 
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getAllHotel, 
    getHotel, 
    getHotelRooms, 
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
router.get("/find/:id", getHotel);

// Get All hotel route
router.get("/", getAllHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router