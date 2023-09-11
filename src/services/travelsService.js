import { addTravelRepository } from "../repositories/travelsRepository.js";

export async function addTravelService(passengerId, flightId) {

	await addTravelRepository(passengerId, flightId);

}