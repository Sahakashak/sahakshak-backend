const express = require("express");
const router = express.Router();
const caseController = require("../controllers/caseController");

router.post("/cases", caseController.createCase);
router.get("/cases", caseController.getCases);

module.exports = router;
