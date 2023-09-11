import httpStatus from "http-status";
import { addPassengerService } from "../services/passengerServices.js";

export async function addPassenger(req, res) {

    const { firstName, lastName } = req.body;

    await addPassengerService(firstName, lastName);

    res.sendStatus(httpStatus.CREATED);

}