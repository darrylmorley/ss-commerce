import { Request, Response } from 'express';

/**
 * Get all products
 * @route GET /v1/products
 * @access Public
 */
export const GetProducts = (req: Request, res: Response) => {
  // get products from database
}

/**
 * Get product by id
 * @route GET /v1/product/:id
 * @access Public
 */
export const GetProductById = (req: Request, res: Response) => {
  // get product by id from database
}

/**
 * Create a product
 * @route POST /v1/product
 * @access Private/Admin
 */
export const CreateProduct = (req: Request, res: Response) => {
  // create product in database
}

/**
 * Update a product by id
 * @route PUT /v1/product/:id
 * @access Private/Admin
 */
export const UpdateProduct = (req: Request, res: Response) => {
  // update product in database
}

/**
 * Delete a product by id
 * @route DELETE /v1/product/:id
 * @access Private/Admin
 */
export const DeleteProduct = (req: Request, res: Response) => {
  // delete product from database
}