import { deleteAlertByIdRepo, getAlertByIdRepo, getAlertsRepo, insertNewAlertRepo, updateAlertByIdRepo } from "../repos/alertRepo.js";


export async function getAlertsService() {
    return await getAlertsRepo()
}

export async function getAlertByIdService(id) {
    if (!id) throw new Error ("no id has been given")
    const result = await getAlertByIdRepo(id)
    if (!result) return false
    return result
}

export async function insertNewAlertService(data) {
    if(!data.displayName) throw new Error("you are missing the display name")
    if(!data.description) throw new Error("you are missing the description")
    if(!data.priority) throw new Error("you are missing the priority")
    const priorityOptions = ["Low","Medium","High","Critical"]
    if (!priorityOptions.includes(data.priority)) {
        throw new Error ("Your priority must be Low, Medium, High, or Critical")
    }
    if(!data.arena) throw new Error("you are missing the arena ")
    const arenaOptions = ["North", "South", "Center"]
    if (!arenaOptions.includes(data.arena)){
        throw new Error ("Your arena options are North, South and Center")
    }
    if(!data.status) throw new Error("you are missing the status")
    const statusOptions = ["Active", "Handled"]
    if (!statusOptions.includes(data.status)){
        throw new Error ("Your status options are Active or Handled")
    }
    if(!data.lon) throw new Error("you are missing the longitude (lon)")
    if (typeof data.lon !== "number") throw new Error ("longitude must be a number")
    if(!data.lat) throw new Error("you are missing the latitude (lat)")
    if (typeof data.lat !== "number") throw new Error ("latitude must be a number")

    return await insertNewAlertRepo(data)
}

export async function deleteAlertByIdService(id) {
    return await deleteAlertByIdRepo(id)
}
export async function updateAlertByIdService(id, data) {
    return await updateAlertByIdRepo(id, data)
}