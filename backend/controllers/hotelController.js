import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

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
        await Hotel.findByIdAndDelete(
            req.params.id
        );
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
    const {min, max, ...others} = req.query;
    try{
        const allHotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(allHotels);
    }
    catch(err){
        next(err);
    }
};

/** Api function to Count by cities */
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try{
        const list = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({city: city});
        }));
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    };
};

/** Api function to Count by type */
export const countByType = async (req, res, next) => {
    try{
        const countHotel = await Hotel.countDocuments({type: "Hotel"});
        const countApartment = await Hotel.countDocuments({type: "apartment"});
        const countResort = await Hotel.countDocuments({type: "resort"});
        const countVilla = await Hotel.countDocuments({type: "villa"});
        const countCabin = await Hotel.countDocuments({type: "cabin"});
        res.status(200).json([
            {type: "hotel", count: countHotel},
            {type: "apartments", count: countApartment},
            {type: "resorts", count: countResort},
            {type: "villas", count: countVilla},
            {type: "cabins", count: countCabin}
        ]);
    }
    catch(err){
        next(err);
    };
};

/** Api function to get hotel rooms */
export const getHotelRooms = async (req, res, next ) => {
    try{
        const hotelId = await Hotel.findById(req.params.id); //finding hotel in our db by their id
        const list = await Promise.all(hotelId.rooms.map((room)=>{     // we use Promise.all because we have multiple rooms
            return Room.findById(room);
        }));
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    };
};