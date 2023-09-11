import { addCityRepository } from "../repositories/citiesRepository.js";
import { conflictError } from "../utils/errorFunctions.js";

export async function addCityService(name) {

	const city = await addCityRepository(name);
	if (!city) throw conflictError();

}