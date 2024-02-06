import express from 'express';
import { CreateBrand, DeleteBrand, GetBrandById, GetBrands, UpdateBrand } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get("/brands", GetBrands)
router.get("/brand/:id", GetBrandById)

// auth routes
router.post("/brand", Authenticate, CreateBrand)
router.put("/brand/:id", Authenticate, UpdateBrand)
router.delete("/brand/:id", Authenticate, DeleteBrand)

export { router as BrandRoutes }