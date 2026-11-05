// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

// write your code here


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // פיצול לשורות, ניתוק רווחים מיותרים וסינון שורות ריקות
  const lines = data
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (lines.length === 0) return;

  const randomIndex = Math.floor(Math.random() * lines.length);
  console.log(`Random Line: ${lines[randomIndex]}`);
});
