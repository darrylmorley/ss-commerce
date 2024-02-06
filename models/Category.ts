import mongoose, { Schema, Document } from "mongoose";

interface CategoryDoc extends Document {
  name: string;
  description: string;
  image: string;
  parentId: string;
  nodeDepth: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  parentId: { type: String, required: true },
  nodeDepth: { type: String, required: true },
}, { timestamps: true });

const Category = mongoose.model<CategoryDoc>("category", CategorySchema);

export { Category }