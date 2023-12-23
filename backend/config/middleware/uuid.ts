const UUID = require("uuid-int");

const id = 1;
const generator = UUID(id);
const uuid = generator.uuid();

module.exports = uuid;