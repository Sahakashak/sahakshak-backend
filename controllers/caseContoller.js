const Case = require("../models/case");

exports.createCase = async (req, res) => {
  try {
    const {
      title,
      description,
      name,
      gender,
      age,
      location,
      address,
      pinCode,
      phoneNumber,
      email,
      timeOfCrime,
      suspect,
    } = req.body;

    const newCase = await Case.create({
      title,
      description,
      name,
      gender,
      age,
      location,
      address,
      pinCode,
      phoneNumber,
      email,
      timeOfCrime,
      suspect,
    });

    res.status(201).json({ message: "Case registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCaseById = async (req, res) => {
  try {
    const caseId = req.params.id;

    const singleCase = await Case.findById(caseId);

    if (!singleCase) {
      return res.status(404).json({ error: "Case not found" });
    }

    res.status(200).json(singleCase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCasesByPhoneNumber = async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;

    const cases = await Case.find({ phoneNumber });

    if (!cases || cases.length === 0) {
      return res
        .status(404)
        .json({ error: "No cases found for the provided phone number" });
    }

    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
