import express from 'express';
import { verifyAdmin } from '../utils/verification.js';
import { 
    createRoom, 
    deletRoom, 
    getAllRoom, 
    getRoom, 
    updateRoom
} from '../controllers/roomController.js';

const router = express.Router();

/** Create Room Route */
router.post("/:hotelId", verifyAdmin, createRoom);

/** Update Room Route */
router.put("/:id", verifyAdmin, updateRoom);

/** Delete Room route */
router.delete("/:id/:hotelId", verifyAdmin, deletRoom);

/** Get Room Route */
router.get("/:id", getRoom);

/** Get All Room Route */
router.get("/", getAllRoom);

export default router