//  Example 1: .some() → Check if any number is even

// 'const' is used to declare a constant variable (cannot be reassigned)
const numbers = [1, 5, 3, 7, 5]; // 👉 This is an array (a list of values)

//  The '.some()' method checks if at least ONE element in the array passes the test
// The test is defined inside a function (called a callback function)
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
//  Here (number) => number % 2 === 0 is an arrow function
//     - It runs for each 'number' in the array
//     - 'number % 2 === 0' checks if it's even (divisible by 2)
//     - If any even number is found → returns true, else false

//  'console.log()' prints output to the browser console
console.log("Has even number:", hasEvenNumber); 
// Output: false (because all numbers are odd)


//  Example 2: .some() + .includes() → Check if user can access

//  Array of roles the current user has
const currentUserRoles = ["user", "editor", "admin"];

//  Array of roles that can access a feature
const featureAccessRoles = ["admin", "manager"];

//  We check if any user role exists inside the allowed roles
// '.some()' → checks one by one
// '.includes()' → checks if an array contains a specific value
const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
);
//  For each role (like "user", "editor", "admin"):
//     → It checks: does featureAccessRoles include this role?
//     → Returns true if at least one match is found ("admin" in this case)

console.log("User can access feature:", canAccess);
// Output: true


//  Example 3: Array.from() → Create new array and square each value

//  'Array.from()' creates a new array from something like another array or string
// It also accepts a mapping function to modify each element
// Here, we multiply each number by itself (square)
const arr = Array.from([1, 2, 3], (value) => value * value);
//  (value) => value * value → arrow function that returns squared value

console.log("Squared array:", arr);
// Output: [1, 4, 9]
// The first number (1) → 1*1 = 1
// The second number (2) → 2*2 = 4
// The third number (3) → 3*3 = 9


//  Example 4: range() → Create number range with step

//  This is a custom arrow function called 'range'
// It creates a range of numbers: start → stop (not including stop), with a given step
const range = (start, stop, step) =>
  Array.from(
    //  First argument: an object with a 'length' property
    // 'Math.ceil()' rounds a number UP to the nearest integer
    // (stop - start) / step → how many steps between start and stop
    { length: Math.ceil((stop - start) / step) },
    //  Second argument: mapping function
    // '_' means "I don't care about the first argument"
    // 'i' is the index (0, 1, 2, 3, ...)
    // The formula start + i * step creates the actual range values
    (_, i) => start + i * step
  );

//  Call the range function
console.log("Range (0 to 11, step 2):", range(0, 11, 2));
// Output: [0, 2, 4, 6, 8, 10]
// It starts from 0, adds 2 each time, stops before reaching 11
