const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// API: Real-time and cached fuel prices endpoint
app.get('/api/fuel-prices', (req, res) => {
  res.type('application/json');
  res.setHeader('Cache-Control', 'public, max-age=1800');
  const pricesPath = path.join(__dirname, 'fuel-prices.json');
  fs.readFile(pricesPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        error: 'Failed to read fuel prices',
        prices: { B95: 9.77, B98: 10.18, Diesel: 10.23, DieselPlus: 10.61, GPL: 4.67 }
      });
    }
    try {
      res.send(data);
    } catch (parseErr) {
      res.status(500).json({ error: 'Invalid fuel prices data' });
    }
  });
});

// Optional dynamic config override for Firebase
app.get('/firebase-config.js', (req, res) => {
  res.type('application/javascript');
  const config = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCs0hjNhFke5SQsCFFqqaPUJTEOXfOytmc",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "fuel-calculator-faa50.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "fuel-calculator-faa50",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "fuel-calculator-faa50.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "856821371606",
    appId: process.env.FIREBASE_APP_ID || "1:856821371606:web:4a6af821e896677d3c6f77",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-B9C0C6JHSY"
  };
  res.send(`const FIREBASE_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
});

// Serve static assets from project root
app.use(express.static(path.join(__dirname)));

// Single page application fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
