import express from 'express';

import { CreateCollection, DeleteCollection, GetCollectionById, GetCollections, UpdateCollection } from '../controllers';
import { AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.get("/collections", GetCollections);
router.get("/collection/:id", GetCollectionById);

// admin routes
router.post("/collection", AuthenticateAdmin, CreateCollection)
router.put("/collection/:id", AuthenticateAdmin, UpdateCollection)
router.delete("/collection/:id", AuthenticateAdmin, DeleteCollection)

export { router as CollectionRoutes }