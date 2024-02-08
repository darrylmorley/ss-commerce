import mongoose, { Schema, Document } from "mongoose";

export enum UserType {
  Admin = "Admin", User = "User"
}

enum UserTitle {
  Mr = "Mr", Mrs = "Mrs", Miss = "Miss", Dr = "Dr", Prof = "Prof"
}

interface UserBillingAddress {
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingCounty: string;
  billingPostalCode: string;
}

interface UserDeliveryAddress {
  deliveryAddress1: string;
  deliveryAddress2: string;
  deliveryCity: string;
  deliveryCounty: string;
  deliveryPostalCode: string;
}

interface UserDoc extends Document {
  externalId: number | undefined;
  title: UserTitle;
  firstName: string;
  lastName: string;
  billingAddress: UserBillingAddress;
  deliveryAddress: UserDeliveryAddress;
  phone: string;
  email: string;
  password: string;
  salt: string;
  archived: boolean;
  deliverySameAsBilling: boolean;
  role: UserType;
}

const UserBillingAddressSchema = new Schema({
  billingAddress1: { type: String, required: true },
  billingAddress2: { type: String },
  billingCity: { type: String, required: true },
  billingCounty: { type: String },
  billingPostalCode: { type: String, required: true },
});

const UserDeliveryAddressSchema = new Schema({
  deliveryAddress1: { type: String, required: true },
  deliveryAddress2: { type: String },
  deliveryCity: { type: String, required: true },
  deliveryCounty: { type: String },
  deliveryPostalCode: { type: String, required: true },
});

const UserSchema = new Schema({
  externalId: { type: Number },
  title: { type: String, default: UserTitle.Mr, enum: Object.values(UserTitle) },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  billingAddress: { type: UserBillingAddressSchema },
  deliveryAddress: { type: UserDeliveryAddressSchema },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  archived: { type: Boolean, required: true, default: false },
  deliverySameAsBilling: { type: Boolean, required: true, default: true },
  role: { type: String, default: UserType.User, enum: Object.values(UserType) }
}, {
  toJSON: {
    transform(doc, ret) {
      delete ret.password;
      delete ret.salt;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    }
  }, timestamps: true
});

const User = mongoose.model<UserDoc>("user", UserSchema);

export { User, UserBillingAddress, UserDeliveryAddress, UserTitle }