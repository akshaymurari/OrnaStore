const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.status(200).json({ message: "Test API is working!" });
});

module.exports = router;
