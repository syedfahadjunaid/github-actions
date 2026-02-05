const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (important for POST requests)
app.use(express.json());

// 1. Basic GET Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// 2. A Route with Parameters (e.g., /user/123)
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching data for user ${userId}`, status: "success" });
});

// 3. A POST Route (to receive data)
app.post("/data", (req, res) => {
  const body = req.body;
  console.log("Received:", body);
  res.status(201).send({ received: true, data: body });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is flying at http://localhost:${PORT}`);
});
