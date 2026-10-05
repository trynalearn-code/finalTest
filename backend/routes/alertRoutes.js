import { Router } from "express";
import { deleteAlertByIdController, getAlertByIdController, getAlertsController, insertNewAlertController } from "../controllers/alertControllers.js";

const router = Router()


router.get("/", getAlertsController)
router.get("/:id", getAlertByIdController)
router.post("/", insertNewAlertController)
router.delete("/:id", deleteAlertByIdController)

export default router