import mongoose, { Schema, Document } from "mongoose";

interface CollectionDoc extends Document {
  name: string;
  description: string;
  image: string;
  parentId: string;
  nodeDepth: string;
}

const CollectionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  parentId: { type: String, required: true },
  nodeDepth: { type: String, required: true },
}, { timestamps: true });

const Collection = mongoose.model<CollectionDoc>("collection", CollectionSchema);

export { Collection }