const express = require('express');
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: '22', // Your MySQL username
  password: 'Iamwealthy@555', // Your MySQL password
  database: 's_data' // Name of the database
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Routes

// GET all data from c_data table
app.get('/c_data', (req, res) => {
  connection.query('SELECT * FROM c_data', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }
    res.json(results);
  });
});

// POST new data to c_data table
app.post('/c_data', (req, res) => {
  const { ticker, date, revenue, gp, fcf, capex } = req.body;
  const query = `INSERT INTO c_data (ticker, date, revenue, gp, fcf, capex) VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(query, [ticker, date, revenue, gp, fcf, capex], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data' });
      return;
    }
    res.status(201).json({ message: 'Data inserted successfully' });
  });
});