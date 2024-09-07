const express = require('express');
const cors = require('cors');
const app = express();

// Use the port assigned by Azure, or default to 3000 locally
const port = process.env.PORT || 3000;

// Middleware to enable CORS for security
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Route to get home
app.get('/', (req, res) => {
  res.json("janco");
});

// Route to get weather data
app.get('/weather', (req, res) => {
  const data = {
    temperature: 25,
    condition: 'Cloudy'
  };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
