const db = require("../config/db");

exports.fetchSchools = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM msl_schools");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching schools:", error);
    res.status(500).send("Failed to fetch schools");
  }
};
