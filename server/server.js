const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes.js");
const db = require("./config/db");

app.use(express.json());

app.get("/ping-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1");
    res.send("Database connection successful!");
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).send("Database connection failed");
  }
});

app.use("/api/data", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
