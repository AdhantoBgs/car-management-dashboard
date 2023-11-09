const express = require("express");
const handleLogger = require("./server/middleware/handleLogger");
const carRouter = require("./server/routes/routesCar");
const database = require("./server/middleware/dbKnex")

const app = express();
const PORT: number = 3000;

// app.set("view engine", "ejs");
// app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(handleLogger);
app.use("/cars", carRouter);

app.listen(PORT, () => {
    console.log(`is listening to port ${PORT}`);
});