import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./routes/auth.js";
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONDB)
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("connected", () => {
    console.log("MongoDB Disconnected");
})

/** Middlewares */
app.use("/api/v1/auth", AuthRoute); // whenevver we make request for this endpoint use this authRouth
app.use("/api/v1/users", UsersRoute);
app.use("/api/v1/hotels", HotelsRoute);
app.use("/api/v1/rooms", RoomsRoute);

// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected");
// })


// app.get("/", (req, res) => {
//     res.send("Hello my first request")
// })

app.listen(7700, () => {
    connect()
    console.log("backend is running");
});