const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

// POST attendance records
router.post('/', async (req, res) => {
  try {
    const attendanceRecords = req.body;
    const savedRecords = await Attendance.insertMany(attendanceRecords);
    res.status(201).json(savedRecords);
  } catch (error) {
    console.error('Error saving attendance:', error);
    res.status(500).json({ message: 'Error saving attendance data.' });
  }
});

// GET attendance records by date
router.get('/', async (req, res) => {
  const { date } = req.query;
  try {
    const attendanceRecords = await Attendance.find({ date }).populate('employeeId', 'name');
    res.json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Error fetching attendance records.' });
  }
});

module.exports = router;
