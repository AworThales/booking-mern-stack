import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String] //is not going to b one photo and each item will be string
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5 //rating will mbe in this ranges
    },
    rooms: {
        type: [String]  //array of string bcoz each room will have id
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Hotel", HotelSchema);