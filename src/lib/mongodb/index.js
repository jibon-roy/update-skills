import mongoose from "mongoose";

const connectdb = async () => {
  if (mongoose.connection[0].readyState) {
    return true;
  }
};
