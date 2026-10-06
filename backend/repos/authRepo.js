import db from "../db.js";
import { ObjectId } from "mongodb";

const authorization = db.collection("authorization")

export async function getAllUsersRepo() {
    return await authorization.find()
}

export async function checkUserExistsRepo(username) {
    const user = await authorization.findOne(u => u.username === username);
    return user
}

export async function checkPasswordRepo(password) {
    return await authorization.findOne(p => p.password === password)
}

export async function loginRepo(username, password) {
    return await authorization.findOne(username, password)
}

export async function getCurrentUserRepo(data) {
    return await authorization.findOne(data)
}

export async function createUserRepo(data) {
    return await authorization.insertOne(data)
}

export async function deleteUserRepo(id) {
    return await authorization.deleteOne({_id:new ObjectId(id)})
}