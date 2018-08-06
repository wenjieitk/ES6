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
    });

// const e = Promise.reject(new Error('rejecting.....'));

const p1 = getUser(1);
const p2 = getUser2(2);

Promise.all([p1,p2])
    .then((res) => console.log(res));

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

function getUser2(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('inside async 2....');
            resolve({
                id: id,
                username: "wen jie 2"
            })
        }, 1500);
    })
}

// whichever one promise is fufilled, promise will resolved
Promise.race([p1,p2])
    .then((res) => console.log(res)); // { id: 1, username: 'wen jie' }

/*************************************************/
