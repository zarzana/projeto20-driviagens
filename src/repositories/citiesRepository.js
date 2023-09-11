import { db } from "../database/database.js";

export async function addCityRepository(name) {
    return db.query(`
        INSERT INTO "cities"
            ("name") VALUES ('${name}')
            RETURNING *
    `)
}
