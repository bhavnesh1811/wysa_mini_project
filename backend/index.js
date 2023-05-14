const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");
const { UserModel } = require("./models/user.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "API is working fine." });
});

app.post("/setuser", async (req, res) => {
  let user = new UserModel(req.body);
  await user.save();
  res.status(200).send({ message: "User Added",displayMessage: "Successful" });
});

app.post("/sleepStuggle", async (req, res) => {
  let { username, userResponse } = req.body;
  await UserModel.findOneAndUpdate(
    { username },
    { sleepStuggle: userResponse }
  );
  res
    .status(200)
    .send({
      message: "Sleep Struggle response added",
      displayMessage: "Successful",
    });
});
app.post("/goTobed", async (req, res) => {
  let { username, userResponse } = req.body;

  await UserModel.findOneAndUpdate({ username }, { goTobed: userResponse });
  res
    .status(200)
    .send({
      message: "Go to bed response added",
      displayMessage: "Successful",
    });
});
app.post("/getOutofBed", async (req, res) => {
  let { username, userResponse } = req.body;

  await UserModel.findOneAndUpdate({ username }, { getOutofBed: userResponse });
  res
    .status(200)
    .send({
      message: "Get out of Bed response added",
      displayMessage: "Successful",
    });
});

app.post("/sleepHours", async (req, res) => {
  let { username, userResponse } = req.body;
  await UserModel.findOneAndUpdate({ username }, { sleepHours: userResponse });
  res
    .status(200)
    .send({
      message: "Sleep Hours response added",
      displayMessage: "Successful",
    });
});

app.post("/sleepEfficiency", async (req, res) => {
  let { username } = req.body;

  let user = await UserModel.findOne({ username });
  // console.log(user);
  let sleepHours = +user.sleepHours;
  let getOutofBed = user.getOutofBed; //[11:00 Am]
  let goTobed = user.goTobed; //[11:40 Am]

  function getTime(Time) {
    const [time, modifier] = Time.split(" ");
    let [hours, minutes] = Time.split(":");

    if (modifier == "Pm" && hours < 12) {
      hours = parseInt(hours) + 12;
    }
    if (modifier == "Am" && hours == 12) {
      hours = parseInt(hours) - 12;
    }
    return hours;
  }

  let sleepingTime = getTime(goTobed);
  let wakingTime = getTime(getOutofBed);

  if (wakingTime < sleepingTime) {
    wakingTime = +wakingTime + 24;
  }
  // console.log(sleepingTime);
  // console.log(wakingTime);
  // console.log(sleepHours);

  let sleepEfficiency = Math.ceil(
    (Number(sleepHours) * 100) / (Number(wakingTime) - Number(sleepingTime))
  );

  // console.log(`${sleepEfficiency}%`);
  res
    .status(200)
    .send({ sleepEfficiency: sleepEfficiency, displayMessage: "Successful" });
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
