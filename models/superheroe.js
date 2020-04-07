const mongoose = require('mongoose');

const heroeSchema = mongoose.Schema({
  heroeName: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  universe: { type: String, required: true },
  description: { type: String, required: true },
  originPlanet: { type: String, required: true },
  imageUrl: { type: String, required: true },
  job: { type: String },
  powers: { type: String },
  comics: { type: String },
  shows: { type: String },
});

module.exports = mongoose.model('Heroe', heroeSchema);

