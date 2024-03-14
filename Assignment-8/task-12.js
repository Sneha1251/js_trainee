// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

//-------_ERROR-------
// The async keyword indicates that the function will always return a Promise. 

async function getData() {
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      resolve( [1, 2, 3, 4, 5]);
    }, 1000);
  });
}

getData().then(function (data) {
  console.log(data);
});
