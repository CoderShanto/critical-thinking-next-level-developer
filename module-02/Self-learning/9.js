// * Denormalizing Data (Client-Side "Join")
// Goal: Merge (or "join") users with their posts using userId

//? Input arrays
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

// Use map() to loop through users
// For each user, use filter() to get only posts that belong to that user
const usersWithPosts = users.map((user) => {
  // Find all posts made by this user
  const userPosts = posts.filter((post) => post.userId === user.id);

  // Return a new object that includes user's info + their posts
  return { ...user, posts: userPosts };
});

// Output
console.log(usersWithPosts);
