// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data");
    resolve("Successful");
  }, 3000);
});
promise.then((res) => console.log(res))
.catch((err) => console.log(err));
