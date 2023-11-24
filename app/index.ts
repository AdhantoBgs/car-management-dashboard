const express = require("express");
const swaggerUI = require("swagger-ui-express");

const handle = require("../config/middleware/handle");
const carRouter = require("../config/routes/carRoutes");
const userRouter = require("../config/routes/userRoutes");
const database = require("../config/utils/database/database");
const swaggerDocument = require("../config/api/yamldocs");

const app = express();
const PORT: number = 3000;

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(handle);

app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);
app.use("/v1/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`is listening to port ${PORT}`);
});