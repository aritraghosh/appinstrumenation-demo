const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/a', async (req, res) => {
  try {
    const response = await axios.get('http://service-b/api/b');
    res.send(`Service A forwarded to Service B: ${response.data}`);
  } catch (error) {
    res.status(500).send(`Error in Service A: ${error}`) ;
    
  }
});

app.listen(port, () => {
  console.log(`Service A running on port ${port}`);
});
