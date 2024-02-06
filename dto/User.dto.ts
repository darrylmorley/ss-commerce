import { UserTitle, UserDeliveryAddress, UserBillingAddress } from "../models/User";

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
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingCounty: string;
  billingPostalCode: string;
  deliveryAddress1: string;
  deliveryAddress2: string;
  deliveryCity: string;
  deliveryCounty: string;
  deliveryPostalCode: string;
  phone: string;
  email: string;
  password: string;
  deliverySameAsBilling: boolean;
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
}