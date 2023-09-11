import { db } from "../database/database.js";

export async function addPassengerRepository(firstName, lastName) {
    return db.query(`
        INSERT INTO "passengers"
            ("firstName", "lastName") VALUES ('${firstName}', '${lastName}')
            RETURNING *
    `)
}
