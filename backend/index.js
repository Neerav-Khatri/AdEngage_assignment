const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./db");
const { userRouter } = require("./Routes/user");
const { auth } = require("./Middleware/auth");
const { dataRouter } = require("./Routes/data");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use(auth);
app.use("/data", dataRouter);

app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("App is connected to DB.");
        console.log(`Server is listening to port ${process.env.port}`)
    } catch (error) {
        console.log(error);
    }
});

module.exports = { app };