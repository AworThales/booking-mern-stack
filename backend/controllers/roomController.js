import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

/** Create Room Function */
export const createRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)
    try{
        const saveRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: saveRoom._id}
            });
        } catch (err) {
            next(err);
        }

        res.status(200).json(saveRoom);
    }
    catch(err){
        next(err);
    };
};

/** Update Room  Availability Fuction */
export const updateRoomAvailability = async (req, res, next) =>{
    try{
        await Room.updateOne({"roomNumbers._id": req.body.id}, {
            $push: {"roomNumbers.$.unavailableDates": req.body.dates}
        });
        res.status(200).json("Room sucessfully updated");
    }
    catch(err) {
        next(err);
    };
};

/** Update Room Fuction */
export const updateRoom = async (req, res, next) =>{
    try{
        const updateRomm = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );

        res.status(200).json(updateRomm);
    }
    catch(err) {
        next(err);
    };
};


/** Delete Romm Function */
export const deletRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try{
        await Room.findByIdAndDelete(req.params.id );
        
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            });
        } catch (err) {
            next(err);
        };

        res.status(200).json("Room deleted successfully...!");
    }
    catch(err) {
        next(err);
    };
};

/** Get Room Function */
export const getRoom = async (req, res, next) => {
    try{
        const oneRoom = await Room.findById(
            req.params.id
        );
        res.status(200).json(oneRoom);
    }
    catch(err) {
        next(err);
    };
};

/** Get All Room function */
export const getAllRoom = async (req, res, next) => {
    try{
        const allRooms =await Room.find(
            req.params.id
        );
        res.status(200).json(allRooms);
    }
    catch(err) {
        next(err);
    };
};
