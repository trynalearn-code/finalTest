import { getAlertsRepo } from "../repos/alertRepo.js";


export async function getAlertsService() {
    return await getAlertsRepo()
}