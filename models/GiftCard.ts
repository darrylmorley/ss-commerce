import mongoose, { Schema, Document } from "mongoose";

interface GiftCardDoc extends Document {
  userId: string;
  code: string;
  balance: number;
}

const GiftCardSchema = new Schema({
  userId: { type: String, required: true },
  code: { type: String, required: true },
  balance: { type: Number, required: true },
}, { timestamps: true });

const GiftCard = mongoose.model<GiftCardDoc>("giftCard", GiftCardSchema);

export { GiftCard }