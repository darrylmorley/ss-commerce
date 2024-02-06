import { Schema, model, Document } from 'mongoose';

interface CartItemDoc extends Document {
  productId: string;
  name: string;
  qty: number;
  image: string;
}

interface CartDoc extends Document {
  userId: string;
  items: CartItemDoc[];
  totalPrice: number;
  totalItems: number;
}

const CartItemSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
});

const CartSchema = new Schema({
  userId: { type: String, required: true },
  items: { type: [CartItemSchema] },
  totalPrice: { type: Number, required: true },
  totalItems: { type: Number, required: true },
}, { timestamps: true });

const Cart = model<CartDoc>("cart", CartSchema);

export { Cart }