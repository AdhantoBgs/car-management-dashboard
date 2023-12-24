const config = {
	client: "pg",
	connection: process.env.DATABASE_URL,
	migrations: {
		directory: "./db/migrations",
	},
	seeds: {
		directory: "./db/seeds",
	},
};

module.exports = config;