// * Grouping and Aggregating Data
// Goal: Group sales by category and calculate
//       total revenue + number of items sold

//? Input
const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

// Use reduce() to group by category and calculate totals
const summary = sales.reduce((acc, sale) => {
  // acc → accumulator (object that holds grouped results)
  // sale → current sale item from array

  // If this category doesn't exist yet, initialize it
  if (!acc[sale.category]) {
    acc[sale.category] = {
      totalRevenue: 0, // total price * quantity for that category
      itemCount: 0, // total number of items sold in that category
    };
  }

  // Add this sale's revenue to the total
  acc[sale.category].totalRevenue += sale.price * sale.quantity;

  // Add this sale's item quantity to total count
  acc[sale.category].itemCount += sale.quantity;

  // Return accumulator for the next iteration
  return acc;
}, {}); // Start with an empty object

//  Output
console.log(summary);
