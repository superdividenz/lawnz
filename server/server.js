const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db.config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const taskRoutes = require('./routes/task.routes');
app.use('/tasks', taskRoutes);

// Connect to the database
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));