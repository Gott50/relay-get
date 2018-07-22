var express = require('express');
var router = express.Router();
var relay = require('../relay');

/* GET home page. */
router.get('/', function (req, res, next) {
    relay(req.originalUrl).then(s => res.send(s))
        .catch(err => next(err));
});


module.exports = router;
