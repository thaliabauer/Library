var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ifc', function(req, res, next) {
  res.send('BEM VINDO!!.......................................(ao seu maior sonho e pesadelo)');
});

router.get('/cool', function(req, res, next) {
  res.send('Legal');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Praia é uma maravilha, quando é as férias mesmo?');
});

module.exports = router;
