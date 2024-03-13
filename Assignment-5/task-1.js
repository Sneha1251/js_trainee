//  Write a program to iterate over object.

const exampleObj = {
  book: "Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
};

for (const keys in exampleObj) {
  const value = exampleObj[keys];
  console.log(`${keys}:${value}`);
}

