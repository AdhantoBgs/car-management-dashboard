import { CarsModel, Cars } from "../../app/models/Cars";

describe("CarsModel", () => {
	test("should create a CarsModel instance", () => {
		const carsInstance = new CarsModel();

		expect(carsInstance).toBeInstanceOf(CarsModel);
	});

	test("should have correct table name", () => {
		expect(CarsModel.tableName).toBe("cars");
	});

	test("should create a CarsModel object with correct properties", () => {
		const carsData: Cars = {
			id: 3510268712,
			name: "Avanza",
			type: "MPV",
			capacity: "6",
			transmission: "Manual",
			year: 2019,
			price: 650000,
			availableat: "2022-03-23T15:49:05.563Z",
			drivertype: "non-driver",
			image_url: "image_url.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		};

		const carsInstance = CarsModel.fromJson(carsData);

		expect(carsInstance).toMatchObject(carsData);
	});
});
