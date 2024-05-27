const fs = require("fs").promises;

async function fetchUserData() {
  try {
    const data = await fs.readFile("data.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading or parsing the file", err);
    throw err;
  }
}

module.exports = { fetchUserData };
