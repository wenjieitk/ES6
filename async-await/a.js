// use try and catch to catch error for async-await

notify(1);

async function notify(id) {
    try{
        const p1 = await getCustomer(1);
        console.log('Customer: ', p1);

        const p2 = await getTopMovies();
        console.log('Top movies: ', p2);

        const p3 = await sendEmail(p1,p2);
        console.log('Email sent...')

    }
    catch(error){
        console.log(error);
    }
}
  
  function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
    });
  };
  
  function getTopMovies() {
    return new Promise((res,reject) => {
        setTimeout(() => {
            res(['movie1', 'movie2']);
          }, 4000);
    })
  }
  
  function sendEmail(email, movies) {
    return new Promise((res,reject) => {
        setTimeout(() => {
            res();
          }, 4000);
    })
  }