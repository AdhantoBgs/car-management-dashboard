import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
		table.bigInteger("id").primary();
		table.string("name", 100).notNullable();
		table.string("type", 255).notNullable();
		table.integer("capacity", 50).notNullable();
		table.string("transmission", 255).notNullable();
		table.integer("year", 10).notNullable();
		table.integer("price", 255).notNullable();
		table.string("availableat", 100).notNullable();
		table.string("drivertype", 255).notNullable();
		table.string("image_url", 255).notNullable();
		table.text("description").notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("cars");
}

