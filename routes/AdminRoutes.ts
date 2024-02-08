import express from 'express';

import { AuthenticateAdmin } from '../middleware';
import { GetUserById, GetUsers } from '../controllers';

const router = express.Router();

router.get("/users", AuthenticateAdmin, GetUsers)
router.get("/user/:id", AuthenticateAdmin, GetUserById)

export { router as AdminRoutes }