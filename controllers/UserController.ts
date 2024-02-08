import { Request, Response } from 'express';

import { FindUser, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from '../utils';
import { CreateUserInput, UpdateUserInput, UserLoginInput } from '../dto';
import { User } from '../models';



export const UserLogin = async (req: Request, res: Response) => {
  const { email, password } = <UserLoginInput>req.body;

  const existingUser = await FindUser(undefined, email);

  if (!existingUser) return res.status(404).json({ message: "User not found" });

  const userPasswordValid = await ValidatePassword(password, existingUser.password, existingUser.salt);
  if (!userPasswordValid) return res.status(401).json({ message: "Unauthorised" });

  const signature = GenerateSignature({
    _id: existingUser._id,
    email: existingUser.email,
    firstName: existingUser.firstName,
    lastName: existingUser.lastName,
    role: existingUser.role,
  })

  return res.json({ message: "User logged in successfully", data: signature });
}

export const GetUser = async (req: Request, res: Response) => {
  const { user } = req;

  if (!user) return res.status(404).json({ message: "User not found" });

  const existingUser = await FindUser(user._id);

  if (!existingUser) return res.status(404).json({ message: "User not found" });

  return res.json(existingUser);
}

export const CreateUser = async (req: Request, res: Response) => {
  const { title, firstName, lastName, email, phone, billingAddress, deliveryAddress, deliverySameAsBilling, password } = <CreateUserInput>req.body;

  const existingUser = await FindUser(undefined, email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await GenerateSalt()
  const userPassword = await GeneratePassword(password, salt);

  // create user in database
  const createdUser = await User.create({
    title,
    firstName,
    lastName,
    email,
    phone,
    billingAddress,
    deliveryAddress: deliverySameAsBilling ? {
      deliveryAddress1: billingAddress.billingAddress1,
      deliveryAddress2: billingAddress.billingAddress2,
      deliveryCity: billingAddress.billingCity,
      deliveryCounty: billingAddress.billingCounty,
      deliveryPostalCode: billingAddress.billingPostalCode
    } : {
      deliveryAddress1: deliveryAddress.deliveryAddress1,
      deliveryAddress2: deliveryAddress.deliveryAddress2,
      deliveryCity: deliveryAddress.deliveryCity,
      deliveryCounty: deliveryAddress.deliveryCounty,
      deliveryPostalCode: deliveryAddress.deliveryPostalCode
    },
    deliverySameAsBilling,
    password: userPassword,
    salt
  })
  console.log("createdUser: ", createdUser)
  if (!createdUser) return res.status(500).json({ message: "Error creating user" });
  return res.json(createdUser); //
}

export const UpdateUser = async (req: Request, res: Response) => {
  const { title, firstName, lastName, email, phone, billingAddress, deliveryAddress } = <UpdateUserInput>req.body;
  const { user } = req;


  // Check if user exists
  if (!user) return res.status(404).json({ message: "User not found" });

  const existingUser = await FindUser(user._id);

  if (user) {
    if (!existingUser) return res.status(404).json({ message: "User not found" });

    existingUser.title = title;
    existingUser.firstName = firstName;
    existingUser.lastName = lastName;
    existingUser.email = email;
    existingUser.phone = phone;
    existingUser.billingAddress.billingAddress1 = billingAddress.billingAddress1;
    existingUser.billingAddress.billingAddress2 = billingAddress.billingAddress2;
    existingUser.billingAddress.billingCity = billingAddress.billingCity;
    existingUser.billingAddress.billingCounty = billingAddress.billingCounty;
    existingUser.billingAddress.billingPostalCode = billingAddress.billingPostalCode;
    existingUser.deliveryAddress.deliveryAddress1 = deliveryAddress.deliveryAddress1;
    existingUser.deliveryAddress.deliveryAddress2 = deliveryAddress.deliveryAddress2;
    existingUser.deliveryAddress.deliveryCity = deliveryAddress.deliveryCity;
    existingUser.deliveryAddress.deliveryCounty = deliveryAddress.deliveryCounty;
    existingUser.deliveryAddress.deliveryPostalCode = deliveryAddress.deliveryPostalCode;

    const savedResult = await existingUser.save();
    return res.json({ "message": "User updated", "data": savedResult });
  }

}

export const DeleteUser = async (req: Request, res: Response) => {
  const { user } = req;

  if (!user) return res.status(404).json({ message: "Please sign in to perform this action" });

  const existingUser = await FindUser(user._id);

  if (!existingUser) return res.status(404).json({ message: "User not found" });

  const deletedUser = await User.findByIdAndDelete(user._id);
  if (!deletedUser) return res.status(500).json({ message: "Error deleting user" });

  return res.json({ "message": "User deleted successfully", "data": deletedUser });
}




