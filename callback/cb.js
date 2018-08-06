// pass id = 1, wait for user return
getUser(1,(user) => {
    console.log('user\n', user);
});

function getUser(id, callback) {
    setTimeout(() => {
        callback({
            id: id,
            userName: 'Wen Jie'
        });
    }, 2000);
}

//synchrounous
console.log(getUserSync(1));


function getUserSync(id) {
    setTimeout(() => {
        return({
            id: id,
            userName: 'Wen Jie'
        });
    }, 2000);
}

