// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./models/users"); // Adjust path as per your project structure
// const Product = require("./models/Product"); // Adjust path as per your project structure
// const productRoute = require("./router/product");
// const storeRoute = require("./router/store");
// const purchaseRoute = require("./router/purchase");
// const salesRoute = require("./router/sales");
// const recordRoute = require("./router/records");
// const attendanceRoute = require("./router/attendance");
// const app = express();
// const PORT = 4000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// app.use(express.json());
// app.use(cors());

// // Store API
// app.use("/api/store", storeRoute);

// // Products API
// app.use("/api/product", productRoute);

// // Purchase API
// app.use("/api/purchase", purchaseRoute);

// // Sales API
// app.use("/api/sales", salesRoute);

// app.use("/records", recordRoute);
// app.use("/attendance", attendanceRoute);

// // Signin
// let userAuthCheck;
// app.post("/api/login", async (req, res) => {
//   console.log(req.body);
//   try {
//     const user = await User.findOne({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     console.log("USER: ", user);
//     if (user) {
//       res.send(user);
//       userAuthCheck = user;
//     } else {
//       res.status(401).send("Invalid Credentials");
//       userAuthCheck = null;
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).send(error);
//   }
// });

// // Update a user by ID
// app.put("/api/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).send(error);
//   }
// });

// app.get('/api/records', async (req, res) => {
//   const { email } = req.query;
//   try {
//     const record = await Record.findOne({ email });
//     if (!record) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     res.json(record);
//   } catch (error) {
//     console.error("Error fetching record:", error); // Log the error for debugging
//     res.status(500).json({ message: 'Server error', error }); // Return error info
//   }
// });

// // Delete a user by ID
// app.delete("/api/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.findByIdAndDelete(id);
//     res.status(200).send("User deleted successfully");
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).send(error);
//   }
// });

// app.get("/api/login", (req, res) => {
//   res.send(userAuthCheck);
// });

// // Get record by email
// app.get('/api/records', async (req, res) => {
//   const { email } = req.query;
//   try {
//     const record = await Record.findOne({ email });
//     if (!record) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     res.json(record);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Registration API
// app.post("/api/register", async (req, res) => {
//   let registerUser = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     phoneNumber: req.body.phoneNumber,
//     imageUrl: req.body.imageUrl,
//   });

//   try {
//     const result = await registerUser.save();
//     res.status(200).send(result);
//     console.log("Signup Successful");
//   } catch (err) {
//     console.error("Signup Error: ", err);
//     res.status(500).send(err);
//   }
// });

// // New API to fetch all registered users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users: ", error);
//     res.status(500).send(error);
//   }
// });

// // Example API endpoint to fetch a product by ID
// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const result = await Product.findById(productId);
//     if (!result) {
//       return res.status(404).send("Product not found");
//     }
//     res.json(result);
//   } catch (error) {
//     console.error("Error fetching product: ", error);
//     res.status(500).send(error);
//   }
// });

// // Here we are listening to the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/users"); // User model with new fields
const Product = require("./models/Product"); // Adjust path if needed
const productRoute = require("./router/product");
const storeRoute = require("./router/store");
const purchaseRoute = require("./router/purchase");
const salesRoute = require("./router/sales");
const recordRoute = require("./router/records");
const attendanceRoute = require("./router/attendance");
const app = express();
const PORT = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use(cors());

// Store API
app.use("/api/store", storeRoute);

// Products API
app.use("/api/product", productRoute);

// Purchase API
app.use("/api/purchase", purchaseRoute);

// Sales API
app.use("/api/sales", salesRoute);

app.use("/records", recordRoute);
app.use("/attendance", attendanceRoute);

// Signin
let userAuthCheck;
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send(error);
  }
});

// Update a user by ID
app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error);
  }
});

// Get a record by email
app.get('/api/records', async (req, res) => {
  const { email } = req.query;
  try {
    const record = await Record.findOne({ email });
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json(record);
  } catch (error) {
    console.error("Error fetching record:", error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error }); // Return error info
  }
});

// Delete a user by ID
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send(error);
  }
});

app.get("/api/login", (req, res) => {
  res.send(userAuthCheck);
});

// Get record by email
app.get('/api/records', async (req, res) => {
  const { email } = req.query;
  try {
    const record = await Record.findOne({ email });
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Registration API
app.post("/api/register", async (req, res) => {
  let registerUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    imageUrl: req.body.imageUrl,
    position: req.body.position,  // Capture position
    gender: req.body.gender,      // Capture gender
    salary: req.body.salary,      // Capture salary
  });

  try {
    const result = await registerUser.save();
    res.status(200).send(result);
    console.log("Signup Successful");
  } catch (err) {
    console.error("Signup Error: ", err);
    res.status(500).send(err);
  }
});

// New API to fetch all registered users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send(error);
  }
});
// Assuming you are using Express and Mongoose
// app.put("/api/users/:email", async (req, res) => {
//   try {
//     const { email } = req.params;  // Get the email from the URL parameters
//     const updatedUser = await User.findOneAndUpdate(
//       { email: email },    // Search for the user by email, not _id
//       req.body,            // Update the user with the request body data
//       { new: true }        // Return the updated user
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).send(error);
//   }
// });


app.put("/api/users/:email", async (req, res) => {
  try {
    const { email } = req.params; // Get the email from the URL parameters
    const updatedUser = await User.findOneAndUpdate(
      { email: email },    // Search for the user by email
      req.body,            // Update the user with the request body data
      { new: true }        // Return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error);
  }
});

// Example API endpoint to fetch a product by ID
app.get("/api/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await Product.findById(productId);
    if (!result) {
      return res.status(404).send("Product not found");
    }
    res.json(result);
  } catch (error) {
    console.error("Error fetching product: ", error);
    res.status(500).send(error);
  }
});



// Here we are listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

