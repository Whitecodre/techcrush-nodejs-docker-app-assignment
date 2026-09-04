const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the styled front-end
app.use(express.static(path.join(__dirname, 'public')));

// A real API endpoint the page calls live
app.get('/api/status', (req, res) => {
  res.json({
    message: 'Cloud Computing Assignment — Node.js container running via Docker on AWS EC2 🚀',
    serverTime: new Date().toLocaleString(),
    uptime: `${process.uptime().toFixed(0)}s`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});