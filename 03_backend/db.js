import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prashrijan:prashrijan@cluster0.owgze.mongodb.net/"
    );
    console.log("Connection Successful");
  } catch (err) {
    console.error(err);
  }
};

export default connectDb;
