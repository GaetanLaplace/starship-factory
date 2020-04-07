const Heroe = require('../models/superheroe');

exports.createHeroe = (req, res, next) => {

  const heroe = new Heroe({
    heroeName: req.body.heroeName.toUpperCase(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    universe: req.body.universe,
    description: req.body.description,
    originPlanet: req.body.originPlanet,
    imageUrl: req.body.imageUrl,
    job: req.body.job,
    powers: req.body.powers,
    comics: req.body.comics,
    shows: req.body.shows,
  });

  heroe.save().then(
    () => {
      res.status(201).json({
        message: 'Heroe saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneHeroe = (req, res, next) => {
  Heroe.findOne({
    _id: req.params.id
  }).then(
    (heroe) => {
      res.status(200).json(heroe);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyHeroe = (req, res, next) => {
  const heroe = new Heroe({
    _id: req.params.id,
    heroeName: req.body.heroeName,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    universe: req.body.universe,
    description: req.body.description,
    originPlanet: req.body.originPlanet,
    imageUrl: req.body.imageUrl,
    job: req.body.job,
    powers: req.body.powers,
    comics: req.body.comics,
    shows: req.body.shows,
  });
  Heroe.updateOne({_id: req.params.id}, heroe).then(
    () => {
      res.status(201).json({
        message: 'Heroe updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteHeroe = (req, res, next) => {
  Heroe.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllHeroes = (req, res, next) => {
  Heroe.find().then(
    (heroes) => {
      res.status(200).json(heroes);
    },
  )
  .catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


