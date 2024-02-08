import { Request, Response } from 'express';

/**
 * Get all collections
 * @route GET /v1/collections
 * @access Public
 */
export const GetCollections = (req: Request, res: Response) => {
  return res.json({ message: "Get Collections" });
}

/**
 * Get collection by Id
 * @route GET /v1/collection/:id
 * @access Public
 */
export const GetCollectionById = (req: Request, res: Response) => {
  return res.json({ message: "Get Collection By Id" });
}

/**
 * Create a new collection
 * @route POST /v1/collection
 * @access Private/Admin
 */
export const CreateCollection = (req: Request, res: Response) => {
  return res.json({ message: "Create Collection" });
}

/**
 * Update a collection by Id
 * @route PUT /v1/collection/:id
 * @access Private/Admin
 */
export const UpdateCollection = (req: Request, res: Response) => {
  return res.json({ message: "Update Collection" });
}

/**
 * Delete a collection by Id
 * @route DELETE /v1/collection/:id
 * @access Private/Admin
 */
export const DeleteCollection = (req: Request, res: Response) => {
  return res.json({ message: "Delete Collection" });
}