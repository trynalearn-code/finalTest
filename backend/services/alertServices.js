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
    return await insertNewAlertRepo(data)
}

export async function deleteAlertByIdService(id) {
    return await deleteAlertByIdRepo(id)
}
export async function updateAlertByIdService(id, data) {
    return await updateAlertByIdRepo(id, data)
}