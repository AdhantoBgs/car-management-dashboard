/* eslint-disable @typescript-eslint/no-explicit-any */
const request = require("supertest");
const appTest = require("../../app/index");

import { carsData } from "./mockData";

describe("GET /v1/cars/", () => {
	test("should get car w/ response status 200", (done) => {
		request(appTest)
			.get("/v1/cars/")
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(200);
			})
			.end(done());
	});
});

describe("GET /v1/cars/:id", () => {
	test("should get car by id w/ response status 200", (done) => {
		request(appTest)
			.get("/v1/cars/:id")
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.name).toEqual(carsData.name);
				expect(res.body.type).toEqual(carsData.type);
				expect(res.body.capacity).toEqual(carsData.capacity);
				expect(res.body.transmission).toEqual(carsData.transmission);
				expect(res.body.year).toEqual(carsData.year);
				expect(res.body.price).toEqual(carsData.price);
				expect(res.body.availableat).toEqual(carsData.availableat);
				expect(res.body.drivertype).toEqual(carsData.drivertype);
				expect(res.body.image_url).toEqual(carsData.image_url);
				expect(res.body.description).toEqual(carsData.description);
			})
			.end(done());
	});
});

describe("POST /v1/cars/create", () => {
	test("should create car w/ response status 201", (done) => {
		request(appTest)
			.post("/v1/cars/create")
			.set("Content-Type", "application/json")
			.field("id", carsData.id)
			.field("name", carsData.name)
			.field("type", carsData.type)
			.field("capacity", carsData.capacity)
			.field("transmission", carsData.transmission)
			.field("year", carsData.year)
			.field("price", carsData.price)
			.field("availableat", carsData.availableat)
			.field("drivertype", carsData.drivertype)
			.field("image_url", carsData.image_url)
			.field("description", carsData.description)
			.attach("files", Buffer.from("files", "utf-8"), {
				fieldname: "image_url",
				originalname: "CarDisplay.png",
				encoding: "7bit",
				mimetype: "image/png",
				destination: "D:\\FILES\\fws\\Challenge8\\backend\\public\\uploads",
				filename: "image_url-1702907456026-525939930.png",
				path: "D:\\FILES\\fws\\Challenge8\\backend\\public\\uploads\\image_url-1702907456026-525939930.png",
				size: 52077
			})
			.expect(201)
			.end(done());
	});
});

describe("PUT /v1/cars/update/:id", () => {
	test("should update car w/ response status 201", (done) => {
		request(appTest)
			.put("/v1/cars/update/:id")
			.set("Content-Type", "application/json")
			.field("name", carsData.name)
			.field("type", carsData.type)
			.field("capacity", carsData.capacity)
			.field("transmission", carsData.transmission)
			.field("year", carsData.year)
			.field("price", carsData.price)
			.field("availableat", carsData.availableat)
			.field("drivertype", carsData.drivertype)
			.field("image_url", carsData.image_url)
			.field("description", carsData.description)
			.attach("files", Buffer.from("files", "utf-8"), {
				fieldname: "image_url",
				originalname: "CarDisplay.png",
				encoding: "7bit",
				mimetype: "image/png",
				destination: "D:\\FILES\\fws\\Challenge8\\backend\\public\\uploads",
				filename: "image_url-1702907456026-525939930.png",
				path: "D:\\FILES\\fws\\Challenge8\\backend\\public\\uploads\\image_url-1702907456026-525939930.png",
				size: 52077
			})
			.expect(201)
			.end(done());
	});
});

describe("DELETE /v1/cars/delete/:id", () => {
	test("should delete car w/ response status 201", (done) => {
		request(appTest)
			.delete("/v1/cars/delete/:id")
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(201);
				expect(res.body.message).toEqual("Successfully delete car data");
			})
			.end(done());
	});
});