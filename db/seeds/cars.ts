import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { id: 1, name: "Avanza", type: "MPV", size: "medium", price: "450000", image_url: "image.png" }
    ]);
};
