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
