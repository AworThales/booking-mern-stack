import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

// Create
router.post("/", async (req,res) => {

    // Recieving data from the user
    const newHotel = new Hotel(req.body);
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }
    catch(err){
        res.status(500).json(err); //server error
    }
});

// Update
router.put("/:id", async (req, res) =>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, // geting requesting query params
            { $set: req.body},  // we update using mongodb $set mtd, what to is inside body
            {new: true} )  // setting new true will update our new data on mongodb else it will not update
        res.status(200).json(updateHotel);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try{
        // we won't create a vairable since we are not returning anything
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted successfully")
    }
    catch(err){
        res.status(500).json(err)
    }
});

// Get
router.get("/:id", async (req, res) =>{
    try{
        const oneHotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(oneHotel);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// Get All
// Get
router.get("/", async (req, res) =>{
    try{
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch(err){
        res.status(500).json(err);
    }
})

export default router