import express from 'express';

import { CreateProduct, DeleteProduct, GetProductById, GetProducts, UpdateProduct } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get('/products', GetProducts);
router.get("/product/:id", GetProductById);

// auth routes
router.post("/product/:id", Authenticate, CreateProduct)
router.put("/product/:id", Authenticate, UpdateProduct)
router.delete("/product/:id", Authenticate, DeleteProduct)

export { router as ProductRoutes }