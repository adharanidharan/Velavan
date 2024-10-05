// const mongoose = require('mongoose');

// const attendanceSchema = new mongoose.Schema({
//   employeeId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Record', // Reference to the employee record collection
//     required: true,
//   },
//   employeeName: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: String, // Storing the date as a string in 'YYYY-MM-DD' format
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['Present', 'Absent', 'On Duty'],
//     required: true,
//   },
// });

// module.exports = mongoose.model('Attendance', attendanceSchema);


// const mongoose = require('mongoose');

// const attendanceSchema = new mongoose.Schema({
//   employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Record', required: true },
//   date: { type: String, required: true }, // Assuming you store dates as strings
//   status: { type: String, enum: ['Present', 'Absent', 'On Duty'], required: true },
// });

// module.exports = mongoose.model('Attendance', attendanceSchema);



// const mongoose = require('mongoose');

// const attendanceSchema = new mongoose.Schema({
//   employeeId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Record', // Assuming you have a Record model for employees
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['Present', 'Absent', 'On Duty'],
//     required: true
//   }
// });

// module.exports = mongoose.model('Attendance', attendanceSchema);





const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Record', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'On Duty'], required: true },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
