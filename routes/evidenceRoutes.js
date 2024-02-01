const express = require("express");
const router = express.Router();
const evidenceController = require("../controllers/evidenceController");

// Create a new evidence
router.post("/evidence", evidenceController.createEvidence);

// Get all evidence
router.get("/evidence", evidenceController.getEvidence);

// Get evidence by ID
router.get("/evidence/:id", evidenceController.getEvidenceById);

// Update evidence by ID
router.put("/evidence/:id", evidenceController.updateEvidence);

// Delete evidence by ID
router.delete("/evidence/:id", evidenceController.deleteEvidence);

// Retrieve evidence records by case ID
router.get("/evidence/case/:caseId", evidenceController.getEvidenceByCaseId);

module.exports = router;
