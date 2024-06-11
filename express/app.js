const express = require("express");
const cors = require("cors");
const db = require("./db");
const port = 8000;

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM lik");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
