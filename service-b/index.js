const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/api/b', async (req, res) => {
  try {
    const response = await axios.get('http://service-c:3002/api/c');
    res.send(`Service B forwarded to Service C: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error in Service B');
  }
});

app.listen(port, () => {
  console.log(`Service B running on port ${port}`);
});
