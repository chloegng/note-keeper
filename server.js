const express = require("express");
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('hello, api is running!'));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/notes', require('./routes/api/notes'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});