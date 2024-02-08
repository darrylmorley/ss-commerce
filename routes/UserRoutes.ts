import express from 'express';

import { CreateUser, DeleteUser, GetUser, GetUserById, GetUsers, UpdateUser, UserLogin } from '../controllers';
import { Authenticate, AuthenticateAdmin } from '../middleware';

const router = express.Router();

// public routes
router.post("/login", UserLogin)
router.post("/user", CreateUser)

// auth routes
router.get("/user", Authenticate, GetUser)
router.put("/user", Authenticate, UpdateUser)
router.delete("/user", Authenticate, DeleteUser)

// admin routes
router.get("/users", AuthenticateAdmin, GetUsers)
router.get("/user/:id", AuthenticateAdmin, GetUserById)

export { router as UserRoutes }