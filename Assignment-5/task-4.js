// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const exampleObj = {
  book: "Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
};

const deepClone = (obj) => {
  const deepCloneObj = {};
  for (let keys in obj) {
    deepCloneObj[keys] = obj[keys];
  }
  return deepCloneObj;
};

console.log("Deep Clone ", deepClone(exampleObj));


