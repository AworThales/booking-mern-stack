import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./routes/auth.js";
import UsersRoute from "./routes/users.js";
import HotelsRoute from "./routes/hotels.js";
import RoomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors"
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
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoute); // whenevver we make request for this endpoint use this authRouth
app.use("/api/v1/users", UsersRoute);
app.use("/api/v1/hotels/", HotelsRoute);
app.use("/api/v1/rooms", RoomsRoute);

// Error midleware handler
app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        // sending response to users
        success: false,
        status: errorStatus,
        message: errMessage,
        stack: err.stack,  //to explain more detail from error message
    });
});

// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected");
// })


// app.get("/", (req, res) => {
//     res.send("Hello my first request")
// })

app.listen(5000, () => {
    connect();
    console.log("backend is running");
});