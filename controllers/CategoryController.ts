import { Request, Response } from 'express';

/**
 * Get all categories
 * @route GET /v1/categories
 * @access Public
 */
export const GetCategories = (req: Request, res: Response) => {
  // get categories from database
}

/**
 * Get category by id
 * @route GET /v1/category/:id
 * @access Public
 */
export const GetCategoryById = (req: Request, res: Response) => {
  // get category by id from database
}

/**
 * Create a category
 * @route POST /v1/category
 * @access Private/Admin
 */
export const CreateCategory = (req: Request, res: Response) => {
  // create category in database
}

/**
 * Update a category by id
 * @route PUT /v1/category/:id
 * @access Private/Admin
 */
export const UpdateCategory = (req: Request, res: Response) => {
  // create category in database
}

/**
 * Delete a category by id
 * @route DELETE /v1/category/:id
 * @access Private/Admin
 */
export const DeleteCategory = (req: Request, res: Response) => {
  // delete category from database
}