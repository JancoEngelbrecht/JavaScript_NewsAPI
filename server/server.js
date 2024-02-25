const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});