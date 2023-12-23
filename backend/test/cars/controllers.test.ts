import { Response, Request } from "express";
import CarsService from "../../app/services/cars";
import { carsData } from "./mockData";

const controllers = require("../../app/controllers/carControllers");

jest.mock("../../app/services/cars");

describe("getCars", () => {
	test("should return cars with status 200", async () => {
		const req = {} as Request;
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(CarsService as jest.Mock).mockImplementation(() => {
			return {
				getAll: jest.fn().mockResolvedValue(carsData)
			};
		});

		await controllers.getCars(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(carsData);
	});
});

describe("getCarsById", () => {
	test("should return cars by id with status 200", async () => {
		const req = {
			params: {id: 3510268712}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(CarsService as jest.Mock).mockImplementation(() => {
			return {
				getById: jest.fn().mockResolvedValue(carsData)
			};
		});

		await controllers.getCarsById(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(carsData);
	});
});

describe("postCars", () => {
	test("should post car with status 201 ", async () => {
		const req = {
			body: carsData,
			file: {filename: "test-image.jpg"}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(CarsService as jest.Mock).mockImplementation(() => {
			return {
				postNewCar: jest.fn().mockResolvedValue(carsData)
			};
		});

		await controllers.postCars(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith(carsData);
	});
});

describe("putCars", () => {
	test("should put car with status 201", async () => {
		const req = {
			params: {id: 3510268712},
			body: carsData,
			file: {filename: "test-image.jpg"}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(CarsService as jest.Mock).mockImplementation(() => {
			return {
				updateCars: jest.fn().mockResolvedValue(carsData)
			};
		});

		await controllers.putCars(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith(carsData);
	});
});

describe("deleteCars", () => {
	test("should delete car with status 201", async () => {
		const req = {
			params: {id: 3510268712}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(CarsService as jest.Mock).mockImplementation(() => {
			return {
				deleteData: jest.fn().mockResolvedValue(undefined)
			};
		});

		await controllers.deleteCars(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({ message: "Successfully delete car data" });
	});
});