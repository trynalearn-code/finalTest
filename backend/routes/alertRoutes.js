import { Router } from "express";
import { deleteAlertByIdController, getAlertByIdController, getAlertsController, insertNewAlertController, updateAlertByIdController } from "../controllers/alertControllers.js";

const router = Router()


router.get("/", getAlertsController)
router.get("/:id", getAlertByIdController)
router.post("/", insertNewAlertController)
router.delete("/:id", deleteAlertByIdController)
router.put("/:id", updateAlertByIdController)

export default router