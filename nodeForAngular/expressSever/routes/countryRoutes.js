const express = require("express");
const router = express.Router();
const { fetchCountryNames } = require("../services/CountryService");

// Route to fetch country names
router.get("/countries", async (req, res) => {
  try {
    const countryNames = await fetchCountryNames();
    res.json(countryNames);
  } catch (error) {
    console.error("Error fetching country names:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
