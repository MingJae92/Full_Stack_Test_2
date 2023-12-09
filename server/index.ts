import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4502;

// Uncomment this line if you need to serve static files from a directory
// app.use(express.static(path.join(__dirname, 'public')));

// Uncomment these lines if you want to use a JSON file
const filePath = new URL('file://' + path.resolve(__dirname, '../data/contributor.json')).pathname;

import { readFileSync } from 'fs';

try {
  const contributorsRaw = readFileSync(filePath, 'utf-8');
  const contributors = JSON.parse(contributorsRaw);

  // Log the parsed JSON data to the terminal
  console.log('Parsed JSON data:', contributors);

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
} catch (error) {
  console.error('Error reading or parsing contributors.json:', (error as Error).message);
}
