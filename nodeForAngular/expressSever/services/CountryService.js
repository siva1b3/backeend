const axios = require("axios");

async function fetchCountryNames() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data;
    return countries.map((country) => country.name.common);
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error;
  }
}

module.exports = { fetchCountryNames };
