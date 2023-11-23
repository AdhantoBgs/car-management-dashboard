const express = require("express");
const handle = require("../config/middleware/handle");
const carRouter = require("../config/routes/carRoutes");
const userRouter = require("../config/routes/userRoutes");
const database = require("../config/utils/database/database");

const app = express();
const PORT: number = 3000;

app.use(express.static("public"));
app.use(express.urlencoded());

app.use(handle);
app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);

app.listen(PORT, () => {
    console.log(`is listening to port ${PORT}`);
});