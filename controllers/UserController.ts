import { Request, Response } from 'express';

import { GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from '../utils';
import { CreateUserInput, UserLoginInput } from '../dto';
import { User } from '../models';

export const findUser = async (id: string | undefined, email?: string) => {
  if (email) {
    return await User.findOne({ email });
  } else {
    return await User.findById(id);
  }
}

export const UserLogin = async (req: Request, res: Response) => {
  const { email, password } = <UserLoginInput>req.body;

  const existingUser = await findUser(undefined, email);

  if (!existingUser) return res.status(404).json({ message: "User not found" });

  const userPasswordValid = await ValidatePassword(password, existingUser.password, existingUser.salt);
  if (!userPasswordValid) return res.status(401).json({ message: "Unauthorised" });

  const signature = GenerateSignature({
    _id: existingUser._id,
    email: existingUser.email,
    firstName: existingUser.firstName,
    lastName: existingUser.lastName
  })

  return res.json({ message: "User logged in successfully", data: signature });
}

export const GetUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  if (!users) return res.status(404).json({ message: "No users found" });
  return res.json(users);
}

export const GetUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ message: "User ID is required" });

  const user = await findUser(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
}

export const CreateUser = async (req: Request, res: Response) => {
  const { title, firstName, lastName, email, phone, billingAddress, deliveryAddress, deliverySameAsBilling, password } = <CreateUserInput>req.body;

  const existingUser = await findUser(undefined, email);

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

export const UpdateUser = (req: Request, res: Response) => {
  // update user in database
}

export const DeleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ message: "User ID is required" });

  const user = await findUser(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) return res.status(500).json({ message: "Error deleting user" });

  return res.json({ "message": "User deleted successfully", "data": deletedUser });
}