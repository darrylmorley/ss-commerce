import express from 'express';
import { CreateOrder, GetOrderById, GetOrders, UpdateOrder } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get("/orders", Authenticate, GetOrders);
router.get("/order/:id", Authenticate, GetOrderById);
router.post("/order", Authenticate, CreateOrder)
router.put("/order/:id", Authenticate, UpdateOrder)

export { router as OrderRoutes }