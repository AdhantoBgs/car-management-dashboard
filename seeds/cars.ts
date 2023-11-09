import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { id: 1, name: "Avanza", type: "SUV", year: "2022", size: "small", price: "200000", image_url: "http://url.jpg" },
        { id: 2, name: "Velloz", type: "MPV", year: "2020", size: "medium", price: "500000", image_url: "http://url.jpg" },
        { id: 3, name: "Hyundai", type: "SUV", year: "2019", size: "large", price: "1000000", image_url: "http://url.jpg" }
    ]);
};
