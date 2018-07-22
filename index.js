relayRequest(location.search).then(s => {
    console.log(s);
    document.body.innerHTML = JSON.stringify(s);
});