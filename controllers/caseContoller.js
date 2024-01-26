const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCase = await Case.create({ title, description });
    res.status(201).json(newCase);
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
