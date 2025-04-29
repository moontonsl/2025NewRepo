const db = require("../config/db");

exports.fetchNews = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM msl_news_data");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).send("Failed to fetch news data");
  }
};
