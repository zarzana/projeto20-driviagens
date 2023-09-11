
import httpStatus from "http-status";
import { addFlightService } from "../services/flightsService.js";

export async function addFlight(req, res) {

    const { origin, destination, date } = req.body;

    await addFlightService(origin, destination, date);

    res.sendStatus(httpStatus.CREATED);

}