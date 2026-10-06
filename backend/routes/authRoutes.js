import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import { createUserController, getAllUsersController, getCurrentUserController, loginController } from "../controllers/authControllers";

const router = Router()

router.get("/users", authenticate, getAllUsersController)
router.post("/login", authenticate, loginController)
router.get("/me", authenticate, getCurrentUserController)
router.post("/register", authenticate, createUserController)


export default router