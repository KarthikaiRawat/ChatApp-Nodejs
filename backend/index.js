const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "6044f7e4-52d3-4c36-93df-52ea12e6b71d" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Catch-all route for any other routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
