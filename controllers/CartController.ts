import { Request, Response } from 'express';

/**
 * Create Cart
 * @route POST /v1/cart
 * @access Public
 */
export const CreateCart = (req: Request, res: Response) => {
  // create cart in database
}

/**
 * Get cart by Id
 * @route GET /v1/cart/:id
 * @access Private/User
 */
export const GetCartById = (req: Request, res: Response) => {
  // get cart from database
}

/**
 * Add to cart by Id
 * @route PUT /v1/cart/:id
 * @access Private/User
 */
export const AddToCart = (req: Request, res: Response) => {
  // add item to cart in database
}

/**
 * Remove item from cart by cartId and itemId
 * @route PUT /v1/cart/:id
 * @access Private/User
 */
export const RemoveFromCart = (req: Request, res: Response) => {
  // remove item from cart in database
}

/**
 * Empty cart by Id
 * @route PUT /v1/cart/:id
 * @access Private/User
 */
export const EmptyCart = (req: Request, res: Response) => {
  // empty cart in database
}

/**
 * Get all carts
 * @route GET /v1/carts
 * @access Private/Admin
 */
export const GetCarts = (req: Request, res: Response) => {
  // get carts from database
}

