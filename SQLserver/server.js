// server.js

import express from 'express';
import { config } from 'dotenv';
import mysql from 'mysql2';

// Load environment variables from .env file
config({ path: '../config/.env' });

const host = process.env.DB_HOST;
const portNumber = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

console.log('host:', host);
console.log('portNumber:', portNumber);
console.log('user:', user);
console.log('password:', password);
console.log('database:', database);

const pool = mysql.createPool({
  host,
  port: portNumber,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const app = express();
const port = process.env.PORT || 9000;

console.log('Resolved port:', port);

app.get('/contributors', (req, res) => {
  // Your SQL query to get contributors
  const sqlQuery = `
    SELECT
        f.author,
        COUNT(*) AS contribution_count,
        MIN(f.date) AS earliest_contribution,
        MAX(f.date) AS latest_contribution,
        GROUP_CONCAT(DISTINCT c.description) AS clan_names
    FROM
        family f
    JOIN
        family_clan fc ON f.family_acc = fc.family_acc
    JOIN
        clans c ON fc.clan_acc = c.clan_acc
    GROUP BY
        f.author
    ORDER BY
        contribution_count DESC;
  `;

  // Use the connection pool to execute the query
  pool.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send the results as JSON
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
