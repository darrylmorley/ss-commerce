import { Request, Response } from 'express';

export const GetBrands = (req: Request, res: Response) => {
  return res.json({ message: "Get Brands" });
}

export const GetBrandById = (req: Request, res: Response) => {
  return res.json({ message: "Get Brand By Id" });
}

export const CreateBrand = (req: Request, res: Response) => {
  return res.json({ message: "Create Brand" });
}

export const UpdateBrand = (req: Request, res: Response) => {
  return res.json({ message: "Update Brand" });
}

export const DeleteBrand = (req: Request, res: Response) => {
  return res.json({ message: "Delete Brand" });
}