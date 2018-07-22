var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
    var index = req.originalUrl.indexOf("=");
    var query = req.originalUrl.substring(index + 1);

    request(query).then(s => res.send(s))
        .catch(err => next(err));
});

async function request(query) {
    let response = await fetch(query);
    let text = await parsResponse(response);
    return JSON.parse(text);
}

async function parsResponse(response) {
    let text = await response.text();
    if (response.status === 200) return text;
    else return new Error(text);
}

module.exports = router;
