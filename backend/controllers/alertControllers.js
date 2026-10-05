import { deleteAlertByIdService, getAlertByIdService, getAlertsService, insertNewAlertService, updateAlertByIdService } from "../services/alertServices.js";



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

export async function getAlertByIdController(req, res) {
    try {
        const result = await getAlertByIdService(req.params.id)
        if (result === false) return res.status(404).json({"success":false,"data":"your id is not found in the database"})
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

export async function insertNewAlertController(req, res) {
    try {
        const result = await insertNewAlertService(req.body)
        return res.status(201).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            "success":false,
            "data":"bad request. There was an issue with some of the fields in the data sent."
        })
    }
}

export async function deleteAlertByIdController(req, res) {
    try {
        await deleteAlertByIdService(req.params.id)
        return res.status(200).json({
            "success":true,
            "data":`alert with id ${req.params.id} has been deleted`
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"internal server error"
        })
    }
}

export async function updateAlertByIdController(req, res) {
    try {
        const result = await updateAlertByIdService(req.params.id, req.body)
        return res.status(200).json({
            "success":true,
            "data":`alert with id ${req.params.id} has been updated successfully`
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"internal server error"
        })
    }
}