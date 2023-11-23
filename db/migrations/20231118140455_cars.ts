import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.string("name", 100).notNullable();
        table.string("type", 255).notNullable();
        table.string("size", 100).notNullable();
        table.integer("price", 255).notNullable();
        table.string("image_url", 255).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("cars");
}

