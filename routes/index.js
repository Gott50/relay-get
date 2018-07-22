var express = require('express');
var router = express.Router();
var request = require('../relay');

/* GET home page. */
router.get('/', function (req, res, next) {
    var index = req.originalUrl.indexOf("=");
    var query = req.originalUrl.substring(index + 1);

    request(query).then(s => res.send(s))
        .catch(err => next(err));
});


module.exports = router;
