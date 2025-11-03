// * Generate a lookup table (convert array → object for quick access by ID)

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

// We’ll use reduce() to build an object (lookup table)
const lookupTable = postsArray.reduce((acc, post) => {
  // acc = accumulator (the growing object)
  // post = current item in postsArray

  acc[post.id] = post; // use post.id as key, store the whole post object as value
  return acc; // must return acc so it keeps growing
}, {}); // {} → starting with an empty object

const post = lookupTable["p-103"];

// Output
console.log(lookupTable);
