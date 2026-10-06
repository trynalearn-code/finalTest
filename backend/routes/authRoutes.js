import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import { getAllUsersController, getCurrentUserController, loginController } from "../controllers/authControllers";

const router = Router()

router.get("/users", authenticate, getAllUsersController)
router.post("/login", authenticate, loginController)
router.get("/me", authenticate, getCurrentUserController)

export default router