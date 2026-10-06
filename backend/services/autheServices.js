import { checkUserExistsRepo, getAllUsersRepo, getCurrentUserRepo, loginRepo } from "../repos/authRepo.js";
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