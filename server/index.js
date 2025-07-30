import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory chat messages (for development)
let messages = [
  { id: 1, user: "system", text: "Welcome to the chat!" }
];

// Get all messages
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// Post a new message
app.post("/api/messages", (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ error: "User and text are required." });
  }
  const newMessage = {
    id: messages.length + 1,
    user,
    text
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Chat API server running on http://localhost:${PORT}`);
});
