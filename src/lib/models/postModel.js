import { Schema, model } from "mongoose";

// Define the schema
const slideSchema = new Schema({
  heading: String,
  text: String,
  bgImage: String,
});

// Define and export the model
const SlideModel = model("sliderData", slideSchema);

export { SlideModel, slideSchema };
