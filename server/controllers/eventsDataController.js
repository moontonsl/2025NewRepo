const db = require("../config/db");

exports.fetchEvents = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM msl_events_data");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Failed to fetch events data");
  }
};
