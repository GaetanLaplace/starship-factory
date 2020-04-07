const express = require('express');
const router = express.Router();

const heroeCtrl = require('../controllers/superheroe');

router.get('/', heroeCtrl.getAllHeroes);
router.post('/', heroeCtrl.createHeroe);
router.get('/:id', heroeCtrl.getOneHeroe);
router.put('/:id', heroeCtrl.modifyHeroe);
router.delete('/:id', heroeCtrl.deleteHeroe);

module.exports = router;