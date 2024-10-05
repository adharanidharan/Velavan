const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("store", StoreSchema);
module.exports = Store;





// const mongoose = require("mongoose");

// const StoreSchema = new mongoose.Schema(
//   {
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User', // Ensure this matches your User model name
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );





// const Store = mongoose.model("Store", StoreSchema); // Use 'Store' to match the schema name
// module.exports = Store;
