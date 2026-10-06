import db from "../db";

const authorization = db.collection("authorization")

export async function getAllUsersRepo(data){
    return await authorization.find(data)
}

export async function checkUserExistsRepo(username){
    const user = await authorization.find(u => u.username === username);
    return user
}

export async function checkPasswordRepo(data){
    return await authorization.findOne(data.username)
}


export async function loginRepo(username, password){
    return await authorization.insertOne(username, password)
}