import "dotenv/config"
import { createUserService, getAllUsersService, getCurrentUserService, loginService } from "../services/autheServices";
import { authenticate } from "../middleware/authMiddleware";

export async function getAllUsersController(req, res) {
    try {
        const results = await getAllUsersService()
        return res.status(200).json({
            "success": true,
            "data": results
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            "data": "internal server error"
        })
    }
}

export async function loginController(req, res) {
    try {
        const { username, password } = req.body;
        const token = await loginService(username, password)
        return res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ error: 'Authentication failed' });
    }
}

export async function getCurrentUserController(req, res) {
    try {
        const results = await getCurrentUserService(authenticate)
        return res.status(200).json({
            "success": true,
            "data": results
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            "data": "internal server error"
        })
    }
}

export async function createUserController(req, res) {
    try {
        const results = await createUserService(req.body)
        return res.status(200).json({
            "success": true,
            "data": results
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            "data": "internal server error"
        })
    }
}

export async function deleteUserController(req, res) {
    try {
        const results = await deleteUserController(req.params.id)
        return res.status(200).json({
            "success": true,
            "data": `user with id ${req.params.id} has been deleted`
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            "data": "internal server error"
        })
    }
}