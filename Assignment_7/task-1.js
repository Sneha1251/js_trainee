// Give an example of using a callback function to handle an asynchronous operation in JavaScript

function getData(dataId, third) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
  third();
}

function third() {
  console.log("Third");
}

getData(1, third);

