import express from 'express';
import { CreateGiftCard, DeleteGiftCard, GetGiftCard, GetGiftCardById, GetGiftCards, UpdateGiftCard } from '../controllers';
import { AuthenticateAdmin, Authenticate } from '../middleware';

const router = express.Router();

// auth routes
router.get("/gift-card/:id", Authenticate, GetGiftCard);

// admin routes
router.get("/gift-cards", AuthenticateAdmin, GetGiftCards);
router.post("/gift-card", AuthenticateAdmin, CreateGiftCard)
router.put("/gift-card/:id", AuthenticateAdmin, UpdateGiftCard)
router.delete("/gift-card/:id", AuthenticateAdmin, DeleteGiftCard)

export { router as GiftCardRoutes }