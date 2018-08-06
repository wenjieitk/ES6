const promise = new Promise(((resolve, reject) => {
    // reject()
    resolve()
}));


promise
    .then(() => console.log('also finished'))
    .then(() => console.log('finally finished'))
    .catch(() => console.log('this is error'))


/*************************************************/

getUser(1)
    .then((user) => {
        console.log(user);
    })

function getUser(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('inside async....');
            resolve({
                id: id,
                username: "wen jie"
            })
        }, 1500);
    })
}

const e = Promise.reject(new Error('rejecting.....'));