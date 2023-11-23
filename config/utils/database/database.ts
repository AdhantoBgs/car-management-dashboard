const knex = require("knex");
const { Model } = require("objection");

const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: "binar_car_rental",
      user: "user01",
      password: "admin01"
    }
});

const dbConnect = Model.knex(knexInstance);

module.exports = dbConnect;