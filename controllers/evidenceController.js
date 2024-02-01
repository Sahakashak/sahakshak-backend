const Evidence = require("../models/evidence");

// Create a new evidence
exports.createEvidence = async (req, res) => {
  try {
    const newEvidence = await Evidence.create(req.body);
    res.status(201).json(newEvidence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all evidence
exports.getEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.find();
    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get evidence by ID
exports.getEvidenceById = async (req, res) => {
  try {
    const evidence = await Evidence.findById(req.params.id);
    if (!evidence) {
      return res.status(404).json({ error: "Evidence not found" });
    }
    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update evidence by ID
exports.updateEvidence = async (req, res) => {
  try {
    const updatedEvidence = await Evidence.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvidence) {
      return res.status(404).json({ error: "Evidence not found" });
    }
    res.status(200).json(updatedEvidence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete evidence by ID
exports.deleteEvidence = async (req, res) => {
  try {
    const deletedEvidence = await Evidence.findByIdAndDelete(req.params.id);
    if (!deletedEvidence) {
      return res.status(404).json({ error: "Evidence not found" });
    }
    res.status(200).json({ message: "Evidence deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve evidence records by case ID
exports.getEvidenceByCaseId = async (req, res) => {
  try {
    const caseId = req.params.caseId;
    const evidence = await Evidence.find({ caseId: caseId });

    if (!evidence || evidence.length === 0) {
      return res
        .status(404)
        .json({ message: "No evidence found for the specified case ID" });
    }

    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
