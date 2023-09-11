
import httpStatus from "http-status";
import { addCityService } from "../services/citiesService.js";

export async function addCity(req, res) {

    const { name } = req.body;

    await addCityService(name);

    res.sendStatus(httpStatus.CREATED);

}