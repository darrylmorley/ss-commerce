import express from 'express';

import { CreateCollection, DeleteCollection, GetCollectionById, GetCollections, UpdateCollection } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.get("/collections", GetCollections);
router.get("/collection/:id", GetCollectionById);

// Auth Routes
router.post("/collection", Authenticate, CreateCollection)
router.put("/collection/:id", Authenticate, UpdateCollection)
router.delete("/collection/:id", Authenticate, DeleteCollection)

export { router as CollectionRoutes }