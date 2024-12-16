## Big O

- **Big O** notation help us understand `how long` an algorithm take to run or `how much` memory it will need as the amount of data it handles grows.

- Imagine you have to gaint mess to clean. Big O notation is like saying how the cleaning time grows as the mess gets bigger.

- `Big O` is a way to describe how the time or space requirements of an algorithm grow as the input size grows.

## O(n)

- Signifies that the execution time of the grows `linearly` in propertion to the size of the `input data` (n).

- As the number of items data in the input data increases, the time it takes for the algorithm to run increases corespondingly.

- See the example in the `o_of_n.js` file.

## O(1)

- O(n) aka `constant` time, signifies that the execution time of the algorithm remains `constant` regardless of the input size.

- Example: Imagine you have a box filled with items, and you know exactly where each item is located. To get a specific item, you go directly to it's location, taking the same amount of time irrespective how are many items are in the box.

- Here is the example in the `o_of_1.js` file.

## O(n^2)

- Indicates that the execution time of the algorithm grows `quadratically` in proportion to the size of the input data (represented by n).

- Example: Imagine you have a box of items, and want to compare each item with every other item. If there are n items, you need to compare n \* n times. This is called `nested loops`, and it results in a time complexity of `O(n^2)`.

- Explore the example in the `o_of_n_squared.js` file.

## O(log n)

- O(log n) time complexity refers to an algorithm's runtime that grows logarithmically with the size of the input data (represented by n).

- Example: Imagine you have a sorted list of items, and you want to find a specific item. Instead of checking each item one by one, you can use a technique called `binary search`. This technique allows you to divide the list in half repeatedly until you find the item or determine that it's not in the list.

- Explore the example in the `o_of_log_n.js` file.
