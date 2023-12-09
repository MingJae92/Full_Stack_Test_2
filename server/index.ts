import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4501;

// Uncomment this line if you need to serve static files from a directory
// app.use(express.static(path.join(__dirname, 'public')));

// Uncomment these lines if you want to use a JSON file
const filePath = new URL('file://' + path.join(__dirname, 'data', 'contributors.json')).pathname;

// Use import instead of require
import { readFileSync } from 'fs';
const contributorsRaw = readFileSync(filePath, 'utf-8');
const contributors = JSON.parse(contributorsRaw);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Uncomment this route if you want to send JSON data
app.get('/contributors', (req, res) => {
  res.json(contributors);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
