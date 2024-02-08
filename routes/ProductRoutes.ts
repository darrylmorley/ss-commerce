import express from 'express';

import { CreateProduct, DeleteProduct, GetProductById, GetProducts, UpdateProduct } from '../controllers';
import { AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.get('/products', GetProducts);
router.get("/product/:id", GetProductById);

// admin routes
router.post("/product/:id", AuthenticateAdmin, CreateProduct)
router.put("/product/:id", AuthenticateAdmin, UpdateProduct)
router.delete("/product/:id", AuthenticateAdmin, DeleteProduct)

export { router as ProductRoutes }