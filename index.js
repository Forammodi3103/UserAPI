const express = require('express');
const cors = require('cors');

const app = express(); // <-- Define app first

app.use(cors());       // <-- THEN use it

// Your other routes and middleware
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});