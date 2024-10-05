const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
    console.log(req.body)
  const addStore = await new Store({
    userID : req.body.userId,
    name: req.body.name,
    category: req.body.category,
    address: req.body.address,
    city: req.body.city,
    image: req.body.image
  });

  addStore.save().then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Stores
const getAllStores = async (req, res) => {
  const findAllStores = await Store.find({"userID": req.params.userID}).sort({ _id: -1 }); // -1 for descending;
  res.json(findAllStores);
};

module.exports = { addStore, getAllStores };





// const Store = require("../models/store");

// // Add Store
// const addStore = async (req, res) => {
//   try {
//     const { userId, name, category, address, city, image } = req.body;

//     const newStore = new Store({
//       userID: userId,
//       name,
//       category,
//       address,
//       city,
//       image
//     });

//     const savedStore = await newStore.save();
//     res.status(201).json(savedStore); // 201 Created
//   } catch (err) {
//     res.status(500).json({ message: err.message }); // 500 Internal Server Error
//   }
// };

// // Get All Stores
// const getAllStores = async (req, res) => {
//   try {
//     const { userID } = req.params;
//     const stores = await Store.find({ userID }).sort({ _id: -1 }); // Sort descending
//     res.status(200).json(stores); // 200 OK
//   } catch (err) {
//     res.status(500).json({ message: err.message }); // 500 Internal Server Error
//   }
// };

// module.exports = { addStore, getAllStores };
