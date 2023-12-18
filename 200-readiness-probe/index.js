const express = require("express");

const PORT = 3000;
let x = 200;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ status: "success" });
});

app.get("/liveness", (req, res) => {
  res.status(x).json({ status: "check" });
});

setTimeout(() => {
  x = 400;
  console.log(x);
}, 60000);

setTimeout(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}, 30000);
