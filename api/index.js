// Contoh struktur untuk Express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'BTS Indonesia API',
    status: 'running on Vercel'
  });
});

module.exports = app;