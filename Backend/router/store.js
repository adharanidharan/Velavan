const express = require("express");
const app = express();
const store = require("../controller/store");

// Add Store 
app.post("/add", store.addStore);

// Get All Store
app.get("/get/:userID", store.getAllStores)

module.exports = app;


// const express = require("express");
// const router = express.Router();
// const storeController = require("../controller/store");

// // Add Store
// router.post("/add", storeController.addStore);

// // Get All Stores
// router.get("/get/:userID", storeController.getAllStores);

// module.exports = router;
