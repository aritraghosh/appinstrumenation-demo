const express = require('express');
const app = express();
const port = 3002;

app.get('/api/c', (req, res) => {
  res.send('Service C response');
});

app.listen(port, () => {
  console.log(`Service C running on port ${port}`);
});
