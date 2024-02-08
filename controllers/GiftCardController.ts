import { Request, Response } from 'express';

/**
 * Get gift card by token
 * @route GET /v1/gift-card
 * @access Private/User
 */
export const GetGiftCard = (req: Request, res: Response) => {
  // get gift card by id from database
}

/**
 * Get all gift cards
 * @route GET /v1/gift-cards
 * @access Private/Admin
 */
export const GetGiftCards = (req: Request, res: Response) => {
  // get gift cards from database
}

/**
 * Get gift card by Id
 * @route GET /v1/gift-card/:id
 * @access Private/Admin
 */
export const GetGiftCardById = (req: Request, res: Response) => {
  // get gift card by id from database
}

// Admin or User??
/**
 * Create gift card
 * @route POST /v1/gift-card
 * @access Private/Admin
 */
export const CreateGiftCard = (req: Request, res: Response) => {
  // create gift card in database
}

// Admin or User??
/**
 * Update gift card by Id
 * @route PUT /v1/gift-card/:id
 * @access Private/Admin
 */
export const UpdateGiftCard = (req: Request, res: Response) => {
  // update gift card in database
}

// Admin or User??
/**
 * Delete gift card by Id
 * @route DELETE /v1/gift-card/:id
 * @access Private/Admin
 */
export const DeleteGiftCard = (req: Request, res: Response) => {
  // delete gift card from database
}