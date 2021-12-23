let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); // true as async 
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) { // completed

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))

            }
        })
        xhttp.send()
    })
}

module.exports =fetchData