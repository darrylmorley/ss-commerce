import { Request, Response } from 'express';

import { FindUser } from '../utils';
import { User } from '../models';

export const GetUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  if (!users) return res.status(404).json({ message: "No users found" });
  return res.json(users);
}

export const GetUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  if (!userId) return res.status(400).json({ message: "User ID is required" });

  const user = await FindUser(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
}