import { checkUserExistsRepo, createUserRepo, deleteUserRepo, getAllUsersRepo, getCurrentUserRepo, loginRepo } from "../repos/authRepo.js";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { authenticate } from "../middleware/authMiddleware.js";

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

export async function getCurrentUserService(data) {
    const check = checkUserExistsRepo(data)
    if (!check) throw new Error("Invalid credentials") //401
    return await getCurrentUserRepo(data)
}

// function createHash(data) {
//     const password = data.password
//     const hashedPassword;

//     bcrypt.genSalt(10, function (err, Salt) {
//         bcrypt.hash(password, Salt, function (err, hash) {
//             if (err) {
//                 return console.log('Cannot encrypt');
//             }
//             hashedPassword = hash;
//             console.log(hash);
//             bcrypt.compare(password, hashedPassword,
//                 async function (err, isMatch) {
//                     if (isMatch) {
//                         console.log('Encrypted password is: ', password);
//                         console.log('Decrypted password is: ', hashedPassword);
//                     }
//                     if (!isMatch) {
//                         console.log(hashedPassword + ' is not encryption of '
//                             + password);
//                     }
//                 })
//         })
//     })
// }

export async function createUserService(data) {
    if (!getCurrentUserRepo(authenticate.role) === "admin") throw new Error("this action is for admins only")
    if (!data.id) throw new Error("you are missing the id")
    if (!data.username) throw new Error("you are missing the username")
    if (!data.password) throw new Error("you are missing the password")
    if (!data.email) throw new Error("you are missing the email")
    const roles = ["arena_user", "general_user", "admin"]
    if (!data.roles) throw new Error("you are missing the role")
    if (!roles.includes(data.roles)) {
        throw new Error("Your role must be arena_user, general_user or admin")
    }
    const arenaOptions = ["North", "South", "Center", "All"]
    if (!arenaOptions.includes(data.assignedArena)) {
        throw new Error("Your arena options are North, South, Center or All")
    }
    return await createUserRepo(data)
}

export async function deleteUserService(id) {
    if (!getCurrentUserRepo(authenticate.role) === "admin") throw new Error("this action is for admins only")
    return await deleteUserRepo(id)
}