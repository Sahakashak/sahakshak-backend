const Criminal = require("../models/criminal");

// Create a new criminal
exports.createCriminal = async (req, res) => {
  try {
    const { name, gender, age, address, crime, status, caseId } = req.body;

    const newCriminal = await Criminal.create({
      name,
      gender,
      age,
      address,
      crime,
      status,
      caseId,
    });

    res.status(201).json(newCriminal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all criminals
exports.getCriminals = async (req, res) => {
  try {
    const criminals = await Criminal.find();
    res.status(200).json(criminals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single criminal by ID
exports.getCriminalById = async (req, res) => {
  try {
    const criminalId = req.params.id;
    const criminal = await Criminal.findById(criminalId);

    if (!criminal) {
      return res.status(404).json({ error: "Criminal not found" });
    }

    res.status(200).json(criminal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a criminal by ID
exports.updateCriminal = async (req, res) => {
  try {
    const criminalId = req.params.id;
    const updatedData = req.body;

    const updatedCriminal = await Criminal.findByIdAndUpdate(
      criminalId,
      updatedData,
      { new: true }
    );

    if (!updatedCriminal) {
      return res.status(404).json({ error: "Criminal not found" });
    }

    res.status(200).json(updatedCriminal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a criminal by ID
exports.deleteCriminal = async (req, res) => {
  try {
    const criminalId = req.params.id;
    const deletedCriminal = await Criminal.findByIdAndDelete(criminalId);

    if (!deletedCriminal) {
      return res.status(404).json({ error: "Criminal not found" });
    }

    res.status(200).json({ message: "Criminal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve criminals by case ID
exports.getCriminalsByCaseId = async (req, res) => {
  try {
    const caseId = req.params.caseId;
    const criminals = await Criminal.find({ caseId: caseId });

    if (!criminals || criminals.length === 0) {
      return res
        .status(404)
        .json({ message: "No criminals found for the specified case ID" });
    }

    res.status(200).json(criminals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
