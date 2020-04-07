const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const heroeRoutes = require('./routes/superheroe');

mongoose.connect('mongodb+srv://heroku:Vqs2mbwd!@cluster0-ab00l.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(bodyParser.json());

app.use('/api/superheroe', heroeRoutes);

module.exports = app;