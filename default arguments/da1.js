// default without es6 
function makeSomeRequest (url, method){
    if(!method) {
        method = 'Get';
    }
}


// default with es6
function makeRequest (url, method = 'GET'){
    return method;
}

// null to use default variable
// undefined
makeRequest('google.com', undefined);