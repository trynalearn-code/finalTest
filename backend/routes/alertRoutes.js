import { Router } from "express";
import { getAlertsController } from "../controllers/alertControllers.js";

const router = Router()


router.get("/alerts", getAlertsController)


export default router