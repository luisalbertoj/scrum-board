const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Role = require("./routes/role");
const User = require("./routes/user");
const Auth = require("./routes/auth");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/auth", Auth);
dbConnection();

app.listen(process.env.PORT, () => console.log("Server run, on port: ", process.env.PORT));