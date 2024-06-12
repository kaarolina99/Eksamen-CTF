const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
const port = 8000;

const app = express;
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

app.get("/lik", async (req, res) => {
  const bevis = "hammer";
  const passord = "mm{hammer}";
  try {
    const result = await db.query(
      "SELECT * FROM lik WHERE bevis = $1 AND passord = $2",
      [bevis, passord]
    );
    res.json(result.rows); // Send the query results as JSON
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
