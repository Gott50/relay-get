async function getSuggestion(query) {
    let url =
        'https://www.instagram.com/web/search/topsearch/?context=blended&' +
        'query=' + query;
    let response = await fetch(url);
    let text = await parsResponse(response);
    let json = JSON.parse(text);
    return json;
}

async function parsResponse(response) {
    let text = await response.text();
    if (response.status === 200) return text;
    else return new Error(text);
}

getSuggestion("cat").then(s => {
    console.log(s);
    document.body.innerHTML = JSON.stringify(s);
});