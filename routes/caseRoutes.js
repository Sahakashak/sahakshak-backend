const express = require("express");
const router = express.Router();
const caseController = require("../controllers/caseContoller");

router.post("/cases", caseController.createCase);
router.get("/cases", caseController.getCases);
router.get("/cases/:id", caseController.getCaseById);

// Get cases by phone number
router.get("/cases/phone/:phoneNumber", caseController.getCasesByPhoneNumber);
router.delete("/cases/:id", caseController.deleteCaseById);
router.put("/cases/:id", caseController.updateCaseData);

module.exports = router;
