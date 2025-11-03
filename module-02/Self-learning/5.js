//  Example 1: Count subtotal of shopping cart using .reduce()

// 🛒 Array of cart items (each has price and quantity)
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

//  .reduce() is used to combine (or accumulate) all array values into one result
// Syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)
// Here:
//   - subtotal → keeps the running total (accumulator)
//   - product → current item in the array
//   - 0 → starting value of subtotal
const subtotal = cartItems.reduce((subtotal, product) => {
  // Multiply price × quantity for each item and add to total
  return subtotal + product.price * product.quantity;
}, 0);

//  subtotal = (1500*1) + (350*2) + (2200*1)
//             = 1500 + 700 + 2200
//             = 4400

console.log("Subtotal:", subtotal);
// Output: Subtotal: 4400

//  Example 2: Find the best (highest scoring) player using .reduce()

//  Array of players with their scores
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

// Use .reduce() to find the player with the highest score
//   - bestPlayer → the current best (highest scoring) player
//   - player → the current one being checked
//   - initial value → players[0] (first player)
const bestScorer = players.reduce((bestPlayer, player) => {
  // Compare scores
  if (bestPlayer.score > player.score) {
    // Keep current best if his score is higher
    return bestPlayer;
  }

  // Otherwise, replace with the new higher scorer
  return player;
}, players[0]);

console.log("Best Scorer:", bestScorer);
// Output: Best Scorer: { name: 'Rakib Hossain', score: 95 }
