import mongoose, { Schema, Document } from "mongoose";

interface ProductDoc extends Document {
  externalId: number;
  sku: string;
  manufacturerSku: string;
  upc: string;
  ean: string;
  name: string;
  description: string;
  price: number;
  qoh: number;
  featuredImage: string;
  images: string[];
  salePrice: number;
  onSale: boolean;
  onPreOrder: boolean;
  onBackOrder: boolean;
  isMatrix: boolean;
  matrixId: number;
  featured: boolean;
  color: string;
  size: string;
  brandId: string;
  categoryIds: string[];
  collectionIds: string[];
  archived: boolean;
  listOnWebsite: boolean;
}

const ProductSchema = new Schema({
  externalId: { type: Number, required: true },
  sku: { type: String },
  manufacturerSku: { type: String },
  upc: { type: String },
  ean: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  qoh: { type: Number, required: true, default: 0 },
  featuredImage: { type: String },
  images: { type: [String] },
  salePrice: { type: Number, required: true, default: 0 },
  onSale: { type: Boolean, required: true, default: false },
  onPreOrder: { type: Boolean, required: true, default: false },
  onBackOrder: { type: Boolean, required: true, default: false },
  isMatrix: { type: Boolean, required: true, default: false },
  matrixId: { type: Number, required: true, default: 0 },
  featured: { type: Boolean, required: true, default: false },
  color: { type: String },
  size: { type: String },
  brandId: { type: Number, required: true },
  categoryIds: { type: [String] },
  collectionIds: { type: [String] },
  archived: { type: Boolean, required: true, default: false },
  listOnWebsite: { type: Boolean, required: true, default: true },
}, { timestamps: true });

const Product = mongoose.model<ProductDoc>("product", ProductSchema);

export { Product }