const YAML = require("yamljs");
const path = require("path");

const swagger_path =  path.resolve(__dirname,"./yamldocs.yaml");
const swaggerDocs = YAML.load(swagger_path);

module.exports = swaggerDocs;