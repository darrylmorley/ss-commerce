import mongoose, { Schema, Document } from "mongoose";

interface OrderDoc extends Document {
  externalId: number;
  userId: string;
  complete: boolean;
  total: number;
  // shipTo
  // saleLines
  // payments
}

const OrderSchema = new Schema({
  externalId: { type: Number, required: true },
  userId: { type: String, required: true },
  complete: { type: Boolean, required: true },
  total: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model<OrderDoc>("order", OrderSchema);

export { Order }