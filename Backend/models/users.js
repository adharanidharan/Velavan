// // const mongoose = require('mongoose');

// // const UserSchema = new mongoose.Schema({
// //     firstName: 'String',
// //     lastName : 'String',
// //     email: 'String',
// //     password: 'String',
// //     phoneNumber: 'Number',
// //     imageUrl: 'String',
// // });

// // const User = mongoose.model("users", UserSchema);
// // module.exports = User;



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  imageUrl: String,
});

module.exports = mongoose.model('User', userSchema);





// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
//   phoneNumber: String,
//   imageUrl: String,
//   position: String,    // New field for position
//   gender: String,      // New field for gender
//   salary: Number,      // New field for salary
// });

// module.exports = mongoose.model('User', userSchema);
