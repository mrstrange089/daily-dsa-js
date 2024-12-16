// O(n)

const searchForItem = (groceries, item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }
};

const groceries = ["banana", "apple", "orange", "grape", "pear"];

searchForItem(groceries, "orange");
