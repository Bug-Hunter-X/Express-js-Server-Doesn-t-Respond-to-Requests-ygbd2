const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is a common mistake: missing res.end() or res.send()
  console.log('Request received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});