import { Request, Response } from 'express';

/**
 * Get all brands
 * @route GET /v1/brands
 * @access Public
 */
export const GetBrands = (req: Request, res: Response) => {
  return res.json({ message: "Get Brands" });
}

/**
 * Get brand by id
 * @route GET /v1/brand/:id
 * @access Public
 */
export const GetBrandById = (req: Request, res: Response) => {
  return res.json({ message: "Get Brand By Id" });
}

/**
 * Create new brand
 * @route GET /v1/brand
 * @access Pivate/Admin
 */
export const CreateBrand = (req: Request, res: Response) => {
  return res.json({ message: "Create Brand" });
}

/**
 * Update brand by id
 * @route PUT /v1/brand/:id
 * @access Pivate/Admin
 */
export const UpdateBrand = (req: Request, res: Response) => {
  return res.json({ message: "Update Brand" });
}

/**
 * Delete brand by id
 * @route DELETE /v1/brand/:id
 * @access Pivate/Admin
 */
export const DeleteBrand = (req: Request, res: Response) => {
  return res.json({ message: "Delete Brand" });
}