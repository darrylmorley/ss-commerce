import express from 'express';
import { AddToCart, CreateCart, EmptyCart, GetCartById, GetCarts, RemoveFromCart } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get("/cart/:id", GetCartById);
router.post("/cart", CreateCart)
router.put("/cart/:id", AddToCart)
router.delete("/cart/:cartId/:itemId", RemoveFromCart)
router.delete("/cart/:id/empty-cart/", EmptyCart)

// auth routes
router.get("/carts", Authenticate, GetCarts)

export { router as CartRoutes }