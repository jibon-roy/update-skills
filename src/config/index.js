import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected");
    return true;
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
