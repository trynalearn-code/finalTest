import db from "../db.js";
import { ObjectId } from "mongodb";

const alerts = db.collection("alerts")

export async function getAlertsRepo() {
    return await alerts.find().toArray()
}

export async function getAlertByIdRepo(id) {
    return await alerts.findOne({_id:new ObjectId(id)})
}

export async function insertNewAlertRepo(data) {
    return await alerts.insertOne(data)
}

export async function deleteAlertByIdRepo(id) {
    return await alerts.deleteOne({_id:new ObjectId(id)})
}

export async function updateAlertByIdRepo(id, data) {
    return await alerts.updateOne({_id:new ObjectId(id)}, {$set:data})
}