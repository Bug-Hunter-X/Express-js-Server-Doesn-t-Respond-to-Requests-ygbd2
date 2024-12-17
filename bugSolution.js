const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Express!'); // Added res.send() to send a response
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});