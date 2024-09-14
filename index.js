const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

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

//Get news from NewsAPI
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: 'a5c9c48cee5b4d81b4492fa66bf61661'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news data' });
  }
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