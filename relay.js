const onServer = typeof window === 'undefined';
if (onServer) {
    var fetch = require('node-fetch');
    module.exports = relayRequest;
}

async function relayRequest(url) {
    let index = url.indexOf("=");

    let query = url.substring(index + 1);
    return request(query);
}

async function request(query) {
    let response = await fetch(query);
    let text = await parsResponse(response);
    return text;
}

async function parsResponse(response) {
    let text = await response.text();
    if (response.status === 200) return text;
    else return new Error(text);
}

