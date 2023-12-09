import express from 'express';
import path from 'path';

const app = express();
const port = 4501;

// Uncomment this line if you need to serve static files from a directory
// app.use(express.static(path.join(__dirname, 'public')));

// Uncomment these lines if you want to use a JSON file
// const filePath = path.join(__dirname, 'data', 'contributors.json');
// const contributors = require(filePath);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Uncomment this route if you want to send JSON data
// app.get('/contributors', (req, res) => {
//   res.json(contributors);
// });

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
