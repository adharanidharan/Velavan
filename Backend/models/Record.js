const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  level: { type: String, enum: ['Internship', 'Junior', 'Senior'], required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  password: { type: String, required: true },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
