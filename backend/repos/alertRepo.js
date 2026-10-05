import db from "../db.js";
import { ObjectId } from "mongodb";

const alerts = db.collection("alerts")

export async function getAlertsRepo() {
    return await alerts.find().toArray()
}