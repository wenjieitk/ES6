const promise = new Promise(((resolve, reject) => {
    // reject()
    resolve()
}));


promise
    .then(() => console.log('also finished'))
    .then(() => console.log('finally finished'))
    .catch(() => console.log('this is error'))
