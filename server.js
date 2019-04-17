const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true });

// app.get('/', routes);

app.use(express.json());
app.use(require('./src/routes'));
app.use(cors());

app.listen(3001);