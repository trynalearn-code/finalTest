import { checkUserExistsRepo, createUserRepo, getAllUsersRepo, getCurrentUserRepo, loginRepo } from "../repos/authRepo.js";
import jwt from "jsonwebtoken"
import "dotenv/config"

export async function getAllUsersService() {
    return await getAllUsersRepo()
}


export async function loginService(username, password) {
    const check = checkUserExistsRepo(username)
    if (!check) throw new Error("Invalid credentials") //401
    const passwordMatch = await bcrypt.compare(password, check.password);
    if (!passwordMatch) throw new Error("Invalid credentials") //401
    const jwtSecretKey = process.env.JWT_SECRET_KEY
    const accessToken = jwt.sign(
        { id: 1, role: "Admin" },
        jwtSecretKey,
        { expiresIn: "15m" }
    );
    await loginRepo(username, password)
    return accessToken

}

export async function getCurrentUserService(username) {
    if (!username) throw new Error("username not provided")
    const check = checkUserExistsRepo(username)
    if (!check) throw new Error("Invalid credentials") //401
    return await getCurrentUserRepo(username)
}

export async function createUserService(data) {
    if(!data.id) throw new Error("you are missing the id")
    if(!data.username) throw new Error("you are missing the username")
    if(!data.password) throw new Error("you are missing the password")
    if(!data.email) throw new Error("you are missing the email")
    const roles = ["arena_user","general_user","admin"]
    if(!data.roles) throw new Error("you are missing the role")
    if (!roles.includes(data.roles)) {
        throw new Error ("Your role must be arena_user, general_user or admin")
    }
    const arenaOptions = ["North", "South", "Center", "All"]
    if (!arenaOptions.includes(data.assignedArena)){
        throw new Error ("Your arena options are North, South, Center or All")
    }
    return await createUserRepo(data)
}