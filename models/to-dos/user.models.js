import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // username: String,
    // email: String,
    // password: String,
    // isActive: Boolean
    //Definingg objects instead of Strings
    username: {
      //adding validations
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'], //custom message
    },
  },
  { timestamps: true }
);

//mongoose.model accepts 2 parameters
export const User = mongoose.model('User', userSchema);

//NOTE:: mongoose add an extra 's' behind every word; say, for "User", it writes Users, and so on
