import express from 'express';
import { CreateGiftCard, DeleteGiftCard, GetGiftCardById, GetGiftCards, UpdateGiftCard } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();


router.get("/gift-cards", Authenticate, GetGiftCards);
router.get("/gift-card/:id", Authenticate, GetGiftCardById);
router.post("/gift-card", Authenticate, CreateGiftCard)
router.put("/gift-card/:id", Authenticate, UpdateGiftCard)
router.delete("/gift-card/:id", Authenticate, DeleteGiftCard)

export { router as GiftCardRoutes }