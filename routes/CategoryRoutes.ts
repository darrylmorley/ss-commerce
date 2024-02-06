import express from 'express';

import { CreateCategory, DeleteCategory, GetCategories, GetCategoryById, UpdateCategory } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get("/categories", GetCategories);
router.get("/category/:id", GetCategoryById);

// auth routes
router.post("/category", Authenticate, CreateCategory)
router.put("/category/:id", Authenticate, UpdateCategory)
router.delete("/category/:id", Authenticate, DeleteCategory)

export { router as CategoryRoutes }