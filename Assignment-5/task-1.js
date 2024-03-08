//  Write a program to iterate over object.

const exampleObj = {
  book: "Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
};

for (let keys in exampleObj) {
  let value = exampleObj[keys];
  console.log(`${keys}:${value}`);
}

