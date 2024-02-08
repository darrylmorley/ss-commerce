import express from 'express';
import { CreateOrder, GetOrderById, GetOrders, GetUserOrders, UpdateOrder } from '../controllers';
import { Authenticate, AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.post("/order", CreateOrder)

// auth routes
router.get("/order/:id", Authenticate, GetOrderById);
router.get("/orders", Authenticate, GetUserOrders)

// admin routes
router.get("/orders", AuthenticateAdmin, GetOrders);
router.put("/order/:id", AuthenticateAdmin, UpdateOrder)
// possible extra routes :
// refund an order
// send receipt to user

export { router as OrderRoutes }