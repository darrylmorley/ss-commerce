import express from 'express';
import { CreateBrand, DeleteBrand, GetBrandById, GetBrands, UpdateBrand } from '../controllers';
import { AuthenticateAdmin } from '../middleware';

const router = express.Router();

router.get("/brands", GetBrands)
router.get("/brand/:id", GetBrandById)

// auth routes
router.post("/brand", AuthenticateAdmin, CreateBrand)
router.put("/brand/:id", AuthenticateAdmin, UpdateBrand)
router.delete("/brand/:id", AuthenticateAdmin, DeleteBrand)

export { router as BrandRoutes }