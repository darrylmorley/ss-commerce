import { Request, Response } from 'express';

/**
 * Create an Order
 * @route GET /v1/orders
 * @access Public
 */
export const CreateOrder = (req: Request, res: Response) => {
  // create order in database
}

/**
 * Get all user orders by token
 * @route GET /v1/orders
 * @access Private/User
 */
export const GetUserOrders = (req: Request, res: Response) => {
  // get orders from database
}

/**
 * Get all orders
 * @route GET /v1/orders
 * @access Private/Admin
 */
export const GetOrders = (req: Request, res: Response) => {
  // get orders from database
}

/**
 * Get order by Id
 * @route GET /v1/order/:id
 * @access Private/Admin
 */
export const GetOrderById = (req: Request, res: Response) => {
  // get order by id from database
}

/**
 * Update an order by Id
 * @route PUT /v1/order/:id
 * @access Private/Admin
 */
export const UpdateOrder = (req: Request, res: Response) => {
  // update order in database
}