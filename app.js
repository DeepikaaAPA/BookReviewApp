const express = require("express");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const app = express();

app.use("/api/v1/auth", authRouter);

module.exports = app;
