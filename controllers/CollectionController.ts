import { Request, Response } from 'express';

export const GetCollections = (req: Request, res: Response) => {
  return res.json({ message: "Get Collections" });
}

export const GetCollectionById = (req: Request, res: Response) => {
  return res.json({ message: "Get Collection By Id" });
}

export const CreateCollection = (req: Request, res: Response) => {
  return res.json({ message: "Create Collection" });
}

export const UpdateCollection = (req: Request, res: Response) => {
  return res.json({ message: "Update Collection" });
}

export const DeleteCollection = (req: Request, res: Response) => {
  return res.json({ message: "Delete Collection" });
}