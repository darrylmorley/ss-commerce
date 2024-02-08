import express from 'express';

import { CreateUser, DeleteUser, GetUser, UpdateUser, UserLogin } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.post("/login", UserLogin)

router.post("/user", CreateUser)
router.get("/user", Authenticate, GetUser)
router.put("/user", Authenticate, UpdateUser)
router.delete("/user", Authenticate, DeleteUser)


export { router as UserRoutes }