var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('./view/indexProfessor.html');
});

router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;