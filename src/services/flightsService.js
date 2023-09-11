import dayjs from "dayjs";
import { addFlightRepository } from "../repositories/flightsRepository.js";
import { conflictError, unprocessableEntityError } from "../utils/errorFunctions.js";

export async function addFlightService(origin, destination, date) {

    const formattedDate = date.split('-').reverse().join('-')

    if (origin === destination) throw conflictError();
    if (dayjs().isAfter(dayjs(formattedDate))) throw unprocessableEntityError();

	await addFlightRepository(origin, destination, formattedDate);

}