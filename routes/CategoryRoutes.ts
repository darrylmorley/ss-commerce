import express from 'express';

import { CreateCategory, DeleteCategory, GetCategories, GetCategoryById, UpdateCategory } from '../controllers';
import { AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.get("/categories", GetCategories);
router.get("/category/:id", GetCategoryById);

// admin routes
router.post("/category", AuthenticateAdmin, CreateCategory)
router.put("/category/:id", AuthenticateAdmin, UpdateCategory)
router.delete("/category/:id", AuthenticateAdmin, DeleteCategory)



export { router as CategoryRoutes }