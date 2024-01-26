const express = require("express");
const router = express.Router();
const caseController = require("../controllers/caseContoller");

router.post("/cases", caseController.createCase);
router.get("/cases", caseController.getCases);
router.get("/cases/:id", caseController.getCaseById);

module.exports = router;
