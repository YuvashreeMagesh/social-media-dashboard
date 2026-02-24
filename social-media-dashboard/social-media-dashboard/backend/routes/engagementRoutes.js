const express = require("express");
const router = express.Router();
const Engagement = require("../models/Engagement");

// Sample data seeding endpoint
router.get("/seed", async (req, res) => {
  await Engagement.deleteMany({});
  const sampleData = [
    { platform: "Facebook", likes: 1250, comments: 89, shares: 234 },
    { platform: "Instagram", likes: 3400, comments: 156, shares: 890 },
    { platform: "Twitter", likes: 890, comments: 45, shares: 123 },
    { platform: "LinkedIn", likes: 450, comments: 23, shares: 67 },
    { platform: "YouTube", likes: 2500, comments: 201, shares: 456 }
  ];
  await Engagement.insertMany(sampleData);
  res.json({ message: "Sample data seeded" });
});

// GET all engagements
router.get("/", async (req, res) => {
  try {
    const engagements = await Engagement.find().sort({ date: -1 });
    res.json(engagements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
