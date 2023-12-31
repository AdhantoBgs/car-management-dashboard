const knex = require("knex");
const {Model} = require("objection");

const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: "challenge_5",
      user: "user01",
      password: "admin01"
    }
});

const dbKnex = Model.knex(knexInstance);

module.exports = dbKnex;