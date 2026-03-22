const express = require("express");
const router = express.Router();

// Fake dynamic data
function generateData() {
  return {
    "Line-3": {
      "Room-5": {
        "Propelia-1": Math.floor(Math.random() * 100),
        "SubPropelia-1": Math.floor(Math.random() * 100)
      },
      "Room-6": {
        "Propelia-1": Math.floor(Math.random() * 100)
      }
    },
    "Line-4": {
      "Room-7": {
        "Propelia-1": Math.floor(Math.random() * 100)
      }
    }
  };
}

router.get("/", (req, res) => {
  res.json(generateData());
});

module.exports = router;