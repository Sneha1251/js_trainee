// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });

//---------ERROR--------
// Use const instead of var for promise
// Here catch is not used to print catch if error comes 
// There is some syntax error 

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received");
  }, 1000);
});
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
