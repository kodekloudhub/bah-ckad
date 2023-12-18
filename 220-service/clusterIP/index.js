const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({}));
app.use(express.json());

const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`;

// const mongoURL = `mongodb://localhost:27017/?authSource=admin`;

app.get("/", async (req, res) => {
  res.status(200).json({ status: "success" });
});

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("succesfully connected to DB");
    app.listen(3000, () => console.log("Server is listening on PORT 3000"));
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
