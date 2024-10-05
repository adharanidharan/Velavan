const express = require("express");
const Record = require("../models/Record"); // Adjust path as needed
const router = express.Router();

// Create a new record
router.post("/", async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    console.error("Error saving record:", error);
    res.status(400).json({ message: error.message });
  }
});

// Get all records
router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ message: error.message });
  }
});

// Get a record by ID
router.get("/:id", async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (error) {
    console.error("Error fetching record:", error);
    res.status(500).json({ message: error.message });
  }
});

// Update a record
router.patch("/:id", async (req, res) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecord) return res.status(404).json({ message: "Record not found" });
    res.json(updatedRecord);
  } catch (error) {
    console.error("Error updating record:", error);
    res.status(400).json({ message: error.message });
  }
});



// Delete a record
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).json({ message: "Record not found" });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
