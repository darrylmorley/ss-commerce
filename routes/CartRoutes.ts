import express from 'express';
import { AddToCart, CreateCart, EmptyCart, GetCartById, GetCarts, RemoveFromCart } from '../controllers';
import { Authenticate, AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.post("/cart", CreateCart)

// auth routes
router.get("/cart/:id", Authenticate, GetCartById);
router.put("/cart/:id", Authenticate, AddToCart)
router.put("/cart/:cartId/:itemId", Authenticate, RemoveFromCart)
router.put("/cart/:id/empty-cart/", Authenticate, EmptyCart)

// admin routes
router.get("/carts", AuthenticateAdmin, GetCarts)

export { router as CartRoutes }