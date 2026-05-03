const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const FEEDBACK_FILE = './feedback.json';

// Ensure feedback file exists
if (!fs.existsSync(FEEDBACK_FILE)) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify([]));
}

// API endpoint
app.post('/feedback', (req, res) => {
  const { name, email, feedback } = req.body;

  // Validation
  if (!name || !email || !feedback) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!email.includes('@') || email.length < 5) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters' });
  }
  if (feedback.trim().length < 5) {
    return res.status(400).json({ error: 'Feedback must be at least 5 characters' });
  }

  // Save feedback
  const feedbacks = JSON.parse(fs.readFileSync(FEEDBACK_FILE));
  const newEntry = { id: Date.now(), name, email, feedback, timestamp: new Date() };
  feedbacks.push(newEntry);
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(feedbacks, null, 2));

  res.json({ success: true, message: 'Feedback submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});