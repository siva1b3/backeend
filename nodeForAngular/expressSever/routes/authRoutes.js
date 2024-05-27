const express = require("express");
const router = express.Router();
const { fetchUserData } = require("../services/UserDataService");

// Define route to handle user login
router.post("/login", async (req, res) => {
  try {
    // Access the posted data from the request body
    const postData = req.body;

    // Process the data or perform authentication
    // For demonstration, let's just log the data
    console.log("Received login data:", postData);

    const userData = await fetchUserData();

    let isAuthenticated = false;

    for (let user of userData) {
      if (
        user.userName === postData.userName &&
        user.password === postData.password
      ) {
        isAuthenticated = true;
      }
    }

    // Send appropriate response based on authentication status
    if (isAuthenticated) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error processing login request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
