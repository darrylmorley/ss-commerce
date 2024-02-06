import { Request, Response, NextFunction } from "express";

import { ValidateSignature } from "../utils";
import { AuthPayload } from "../dto";

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