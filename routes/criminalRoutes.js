const express = require("express");
const router = express.Router();
const criminalController = require("../controllers/criminalController");

// Create a new criminal
router.post("/criminals", criminalController.createCriminal);

// Get all criminals
router.get("/criminals", criminalController.getCriminals);

// Get a single criminal by ID
router.get("/criminals/:id", criminalController.getCriminalById);

// Update a criminal by ID
router.put("/criminals/:id", criminalController.updateCriminal);

// Delete a criminal by ID
router.delete("/criminals/:id", criminalController.deleteCriminal);
// Retrieve criminals by case ID
router.get("/criminals/case/:caseId", criminalController.getCriminalsByCaseId);

module.exports = router;
