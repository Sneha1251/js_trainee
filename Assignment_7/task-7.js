// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Successful");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getAllData();
