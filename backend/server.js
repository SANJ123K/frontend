const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api/notes', notesRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
