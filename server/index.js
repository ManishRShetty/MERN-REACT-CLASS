const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Receive data from frontend
app.post("/api/message", (req, res) => {
  const { message } = req.body;
  console.log("📩 Received:", message);
  res.json({ reply: `✅ Server received your message: "${message}"` });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
