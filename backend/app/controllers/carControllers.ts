import { Response, Request } from "express";
import CarsService from "../services/cars";

const uuid = require("../../config/middleware/uuid");

const getCars = async (req: Request, res: Response) => {
	const getAll = await new CarsService().getAll();

	res.status(200).json(getAll);
};

const getCarsById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	const filterById = await new CarsService().getById(id);

	res.status(200).json(filterById);
};

const postCars = async (req: Request, res: Response) => {
	const reqBody = req.body;
	const id = uuid;
	const name = reqBody?.name;
	const type = reqBody?.type;
	const capacity = reqBody?.capacity;
	const transmission = reqBody?.transmission;
	const year = reqBody?.year;
	const price = reqBody?.price;
	const availableat = reqBody?.availableat;
	const drivertype = reqBody?.drivertype;
	let image_url = reqBody?.image_url;
	const description = reqBody?.description;

	if(req.file) {
		const url = `/uploads/${req.file.filename}`;
		image_url = url;

		const postNew = await new CarsService().postNewCar({
			id, name, type, capacity, transmission, year, price, availableat, drivertype, image_url, description
		});

		res.status(201).json(postNew);
	}
};

const putCars = async (req: Request, res: Response) => {
	const reqBody = req.body;
	const id = Number(req.params.id);
	const name = reqBody?.name;
	const type = reqBody?.type;
	const capacity = reqBody?.capacity;
	const transmission = reqBody?.transmission;
	const year = reqBody?.year;
	const price = reqBody?.price;
	const availableat = reqBody?.availableat;
	const drivertype = reqBody?.drivertype;
	let image_url = reqBody?.image_url;
	const description = reqBody?.description;

	if(req.file) {
		const url = `/uploads/${req.file.filename}`;
		image_url = url;

		const updateData = await new CarsService().updateCars({
			id, name, type, capacity, transmission, year, price, availableat, drivertype, image_url, description
		});

		res.status(201).json(updateData);
	}
};

const deleteCars = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	const deleteData = await new CarsService().deleteData(id);

	res.status(201).json({
		message: "Successfully delete car data"
	});
};

module.exports = {
	getCars,
	getCarsById,
	postCars,
	putCars,
	deleteCars
};