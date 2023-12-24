import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("cars").del();

	// Inserts seed entries
	await knex("cars").insert([
		{ 
			id: 1,
			name: "Avanza",
			type: "MPV",
			capacity: 5,
			transmission: "matic",
			year: 2019,
			price: 500000,
			availableat: "2022-03-23T15:49:05.563Z",
			drivertype: "non-driver",
			image_url: "car-image.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
	]);
}
