import dayjs from "dayjs";
import { db } from "../database/database.js";

export async function addFlightRepository(origin, destination, date) {
    return db.query(`
        INSERT INTO "flights"
            ("origin", "destination", "date") VALUES ('${origin}', '${destination}', '${date}')
            RETURNING *
    `)
}
