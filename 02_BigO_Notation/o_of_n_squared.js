// O(n^2)

const findPairs = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(`Pair: ${numbers[i]}, ${numbers[j]}`);
    }

    console.log("\n");
  }
};

const numbers = [1, 2, 3, 4, 5];

findPairs(numbers);
