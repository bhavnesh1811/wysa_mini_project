const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "API is working fine." });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Not Connected to DB");
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
