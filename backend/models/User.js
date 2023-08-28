import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
},
    {timestamps: true} //Timestamps true is going to give us created_At and updated_At
);

export default mongoose.model("User", UserSchema);