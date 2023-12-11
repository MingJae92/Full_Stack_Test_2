// server.js

import express from 'express';
import { config } from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables from .env file
config({ path: '../config/.env' });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
const port = process.env.PORT || 9000;

// Function to handle database connections
const connectToDatabase = async () => {
  try {
    console.log('Attempting to connect to the database...');
    const connection = await pool.getConnection();
    console.log('Connected to the database');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err;
  }
};

app.get('/test-db-connection', async (req, res) => {
  try {
    // Establish a database connection
    await connectToDatabase();

    // Send a success response
    res.status(200).json({ message: 'Database connection test successful.' });
  } catch (error) {
    // Handle any errors during database connection
    console.error('Error during database connection test:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/contributors', async (req, res) => {
  try {
    // Establish a database connection
    const connection = await connectToDatabase();

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

    console.log('Executing SQL Query:', sqlQuery);

    // Use the connection to execute the query
    const [results] = await connection.query(sqlQuery);

    // Log the SQL query results
    console.log('SQL Query Results:', results);

    // Release the database connection
    connection.release();

    // Send the results as JSON
    res.json(results);
  } catch (error) {
    // Handle any errors during database connection or query execution
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectToDatabase()
