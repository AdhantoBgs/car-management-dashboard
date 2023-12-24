const knex = require("knex");
const { Model } = require("objection");

const knexInstance = knex({
	client: "pg",
	connection: process.env.DATABASE_URL,
});

const dbConnect = Model.knex(knexInstance);

module.exports = dbConnect;