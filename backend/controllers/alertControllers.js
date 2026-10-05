import { getAlertsService } from "../services/alertServices.js";



export async function getAlertsController(req, res) {
    try {
        const result = await getAlertsService()
        return res.status(200).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"internal server error"
        })
    }
}