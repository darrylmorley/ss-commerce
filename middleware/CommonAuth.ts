import { Request, Response, NextFunction } from "express";

import { ValidateSignature } from "../utils";
import { AuthPayload } from "../dto";
import { UserType } from "../models";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload
    }
  }
}

export const Authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const validateSignature = await ValidateSignature(req);

  if (validateSignature) {
    next();
  } else {
    res.json({ message: "User not authorized" });
  }
}

export const AuthenticateAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const validateSignature = await ValidateSignature(req);
  const { user } = req;

  if (!user) return res.json({ message: "User not authorized" });

  if (validateSignature && user.role === UserType.Admin) {
    next();
  } else {
    res.json({ message: "User not authorized" });
  }
}