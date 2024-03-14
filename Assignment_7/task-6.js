// Implement a function that returns a resolved Promise after a specified delay using async/await.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data");
    resolve("Successful");
  }, 3000);
});
async function getData(dataId) {
  const Data = await myPromise;
  console.log(Data, dataId);
}
const res = getData(1);
