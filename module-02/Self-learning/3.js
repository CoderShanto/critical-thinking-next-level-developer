//  Example 1: Sorting arrays

const numbers = [40, 100, 1, 5, 25, 10]; 
// Array of numbers

const fruits = ["Banana", "apple", "Cherry", "date"];
// Array of strings (fruits)

// .sort() method sorts an array
// For strings, use .localeCompare() to sort alphabetically and handle uppercase/lowercase properly
fruits.sort((a, b) => a.localeCompare(b));

console.log("Sorted fruits:", fruits);
// Output: ['apple', 'Banana', 'Cherry', 'date']

//  Example 2: Flattening nested arrays (optional)
// .flat() flattens nested arrays into a single array
// Infinity → flatten all levels
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


//  Example 3: Unique tags from posts

// Array of arrays, each inner array contains tags for a post
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

// Step 1: Flatten the nested arrays into a single array
// .flat() → combines all inner arrays into one
const allTags = tagsFromPosts.flat(); 
// allTags = ["javascript", "react", "css", "node", "express", "css", "html", "react"]

// Step 2: Remove duplicates using Set
// Set automatically removes duplicate values
const filterTags = [...new Set(allTags)];
// Spread operator [...] converts Set back to an array

console.log("Unique tags:", filterTags);
// Output: ["javascript", "react", "css", "node", "express", "html"]
