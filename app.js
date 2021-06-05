const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./database/db");

const router = require("./routes/route");

app.use("/", router);

app.listen(9000, () => console.log("server listening to 9000..."));
