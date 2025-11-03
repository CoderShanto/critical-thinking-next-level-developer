// * Grouping and Aggregating Data
// Goal: Count how many times each survey response appears

//? Input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// 💡 Use reduce() to count frequency of each response
const responseCount = surveyResponses.reduce((acc, response) => {
  // acc = accumulator (object storing counts)
  // response = current survey response (like "A", "B", etc.)

  // If this response doesn't exist yet, start count at 0
  // Then add 1 to it
  acc[response] = (acc[response] || 0) + 1;

  // Return accumulator so it keeps building
  return acc;
}, {}); // {} → start with empty object

// ✅ Output
console.log(responseCount);
