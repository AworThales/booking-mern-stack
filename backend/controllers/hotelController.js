import Hotel from "../models/Hotel.js";

/** Api function to create hotel */
export const createHotel = async (req, res, next) => {
     // Recieving data from the user
     const newHotel = new Hotel(req.body);
     try{
         const saveHotel = await newHotel.save();
         res.status(200).json(saveHotel);
     }
     catch(err){
         next(err);
     }
};

/** Api function to update hotel */
export const updateHotel = async (req, res, next) => {
   try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, // geting requesting query params
            { $set: req.body},  // we update using mongodb $set mtd, what to is inside body
            {new: true} // setting new true will update our new data on mongodb else it will not update
        );
        res.status(200).json(updateHotel);
    } catch (err) {
        next(err);
    }
};

/** Api function to delete hotel */
export const deleteHotel = async (req, res, next) => {
    try{
        // we won't create a vairable since we are not returning anything
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted successfully");
    }
    catch(err){
        next(err);
    }
};

/** Api function to get an hotel */
export const getHotel = async (req, res, next) => {
   try{
        const oneHotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(oneHotel);
    }
    catch(err){
        next(err);
    }
};

/** Api function to get all hotel */
export const getAllHotel = async (req, res, next) => {
    try{
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch(err){
        next(err);
    }
};