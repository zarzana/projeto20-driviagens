import { db } from "../database/database.js";

export async function addTravelRepository(passengerId, flightId) {
    return db.query(`
        INSERT INTO "travels"
            ("passengerId", "flightId") VALUES ('${passengerId}', '${flightId}')
            RETURNING *
    `)
}
