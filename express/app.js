const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
const port = 8000;
const { test } = require("./db.js");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/checkFlag", async (req, res) => {
  const { bevis, flag } = req.body;
  try {
    const result = await test(bevis, flag);
    if (result) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
