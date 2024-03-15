// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 4000);
  });
}
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
