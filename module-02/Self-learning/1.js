//  Example: Using Object vs Map to store data with object keys

// -----------------------------------------
//  Object Example (for understanding)
// -----------------------------------------

// 'const' declares a constant variable (cannot be reassigned)
const obj = {}; //  This is a plain JavaScript Object

// Important: In JavaScript, when you use an object as a key inside another object,
// it automatically converts the key to a string — usually "[object Object]".
// So two different objects become the same key.

// Uncomment these to test if you want:
// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// console.log(obj);
//  You’ll see something like: { '[object Object]': { courseId: 'level1' } }
// because both course1 and course2 keys become the same string key → collision happens!


// -----------------------------------------
//  Map Example (better for object keys)
// -----------------------------------------

// Create two different course objects
const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

// Create an array of key–value pairs
// Each inner array → [key, value]
// key = course object, value = level name
const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

// Create a Map using the 'new Map()' constructor
// You can pass an array of pairs to initialize it directly
const map = new Map(courses);

//  Unlike objects, Map keeps the keys as real objects (not converted to strings)
// So course1 and course2 remain separate keys

// -----------------------------------------
//  (Optional) Add new key–value pairs
// -----------------------------------------
 map.set(course1, { courseId: "level1" });
 map.set(course2, { courseId: "level2" });
// The .set() method is used to add or update key–value pairs in a Map


// -----------------------------------------
//  (Optional) Modify all keys using forEach()
// -----------------------------------------
 map.forEach((value, key) => (key.name = "Shanto is doing " + key.name));
// The forEach method loops through all entries (value, key)


// -----------------------------------------
//  (Alternative) Modify all keys using for...of loop
// -----------------------------------------
 for (let key of map.keys()) {
  key.name = "The Brillient " + key.name;
 }


// -----------------------------------------
//  Print the whole Map
// -----------------------------------------
console.log(map);
