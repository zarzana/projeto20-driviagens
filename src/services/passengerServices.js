import { addPassengerRepository } from "../repositories/passengerRepository.js";
import { badRequestError } from "../utils/errorFunctions.js";

export async function addPassengerService(firstName, lastName) {

	const passenger = await addPassengerRepository(firstName, lastName);
	if (!passenger) throw badRequestError();

}