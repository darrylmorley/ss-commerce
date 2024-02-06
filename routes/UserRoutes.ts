import express from 'express';

import { CreateUser, DeleteUser, GetUserById, GetUsers, UpdateUser, UserLogin } from '../controllers';
import { Authenticate } from '../middleware';

const router = express.Router();

router.post("/login", UserLogin)

// auth routes
router.get("/users", Authenticate, GetUsers)
router.get("/user/:id", Authenticate, GetUserById)
router.post("/user", Authenticate, CreateUser)
router.put("/user/:id", Authenticate, UpdateUser)
router.delete("/user/:id", Authenticate, DeleteUser)

export { router as UserRoutes }