const express = require("express");

const PORT = parseInt(process.argv[2]);

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
