import { UserTitle, UserDeliveryAddress, UserBillingAddress, UserType } from "../models/User";

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  title: UserTitle;
  billingAddress: UserBillingAddress;
  deliveryAddress: UserDeliveryAddress;
  phone: string;
  email: string;
  password: string;
  deliverySameAsBilling: boolean;
}

export interface UpdateUserInput {
  firstName: string;
  lastName: string;
  title: UserTitle;
  billingAddress: UserBillingAddress;
  deliveryAddress: UserDeliveryAddress;
  phone: string;
  email: string;
}

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserPayload {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserType;
}