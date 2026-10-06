import db from "../db";

const authorization = db.collection("authorization")

export async function getAllUsersRepo(){
    return await authorization.find()
}

export async function checkUserExistsRepo(username){
    const user = await authorization.findOne(u => u.username === username);
    return user
}

export async function checkPasswordRepo(password){
    return await authorization.findOne(p => p.password === password)
}


export async function loginRepo(username, password){
    return await authorization.findOne(username, password)
}

export async function getCurrentUserRepo(username){
    return await authorization.findOne(u => u.username === username)
}
