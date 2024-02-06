import mongoose, { Schema, Document } from "mongoose";

interface BrandDoc extends Document {
  name: string;
  description: string;
  image: string;
}

const BrandSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Brand = mongoose.model<BrandDoc>("brand", BrandSchema);

export { Brand }