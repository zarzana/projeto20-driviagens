
import httpStatus from "http-status";
import { addTravelService } from "../services/travelsService.js";

export async function addTravel(req, res) {

    const { passengerId, flightId } = req.body;

    await addTravelService(passengerId, flightId);

    res.sendStatus(httpStatus.CREATED);

}