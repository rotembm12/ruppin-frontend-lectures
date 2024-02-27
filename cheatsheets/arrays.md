**Array methods**:

1. **`push()`** - Adds one or more elements to the end of an array and returns the new length.

   ```javascript
   const fruits = ["apple", "banana"];
   fruits.push("orange");
   console.log(fruits); // ['apple', 'banana', 'orange']
   ```

2. **`pop()`** - Removes the last element from an array and returns that element.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   const last = fruits.pop();
   console.log(last); // 'orange'
   console.log(fruits); // ['apple', 'banana']
   ```

3. **`shift()`** - Removes the first element from an array and returns that removed element.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   const first = fruits.shift();
   console.log(first); // 'apple'
   console.log(fruits); // ['banana', 'orange']
   ```

4. **`unshift()`** - Adds one or more elements to the beginning of an array and returns the new length.

   ```javascript
   const fruits = ["banana", "orange"];
   fruits.unshift("apple");
   console.log(fruits); // ['apple', 'banana', 'orange']
   ```

5. **`forEach()`** - Executes a provided function once for each array element.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   fruits.forEach((fruit) => console.log(fruit));
   // 'apple'
   // 'banana'
   // 'orange'
   ```

6. **`map()`** - Creates a new array populated with the results of calling a provided function on every element in the calling array.

   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.map((number) => number * 2);
   console.log(doubled); // [2, 4, 6]
   ```

7. **`filter()`** - Creates a new array with all elements that pass the test implemented by the provided function.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evens = numbers.filter((number) => number % 2 === 0);
   console.log(evens); // [2, 4]
   ```

8. **`reduce()`** - Executes a reducer function on each element of the array, resulting in a single output value.

   ```javascript
   const numbers = [1, 2, 3, 4];
   const sum = numbers.reduce(
     (accumulator, currentValue) => accumulator + currentValue,
     0
   );
   console.log(sum); // 10
   ```

9. **`find()`** - Returns the value of the first element in the provided array that satisfies the provided testing function.

   ```javascript
   const numbers = [1, 5, 10, 15];
   const found = numbers.find((number) => number > 9);
   console.log(found); // 10
   ```

10. **`findIndex()`** - Returns the index of the first element in the array that satisfies the provided testing function.

    ```javascript
    const numbers = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(numbers.findIndex(isLargeNumber)); // 3
    ```

11. **`includes()`** - Determines whether an array includes a certain value among its entries.

    ```javascript
    const fruits = ["apple", "banana", "mango"];
    console.log(fruits.includes("banana")); // true
    console.log(fruits.includes("cherry")); // false
    ```

12. **`indexOf()`** - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

    ```javascript
    const fruits = ["apple", "banana", "mango"];
    console.log(fruits.indexOf("banana")); // 1
    console.log(fruits.indexOf("cherry")); // -1
    ```

13. **`lastIndexOf()`** - Returns the last index at which a given element can be found in the array.

    ```javascript
    const numbers = [2, 5, 9, 2];
    console.log(numbers.lastIndexOf(2)); // 3
    ```

14. **`slice()`** - Returns a shallow copy of a portion of an array into a new array object.
    ```javascript
    const fruits = ["apple", "banana", "mango", "orange"];
    const citrus = fruits.slice(2, 4);
    console.log(citrus); // ['mango', 'orange']
    ``;
    ```

`

15. **`splice()`** - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    ```javascript
    const fruits = ["apple", "banana", "mango", "orange"];
    fruits.splice(2, 1, "lemon", "kiwi");
    console.log(fruits); // ['apple', 'banana', 'lemon', 'kiwi', 'orange']
    ```

16. **`concat()`** - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    ```javascript
    const array1 = ["a", "b", "c"];
    const array2 = ["d", "e", "f"];
    const array3 = array1.concat(array2);
    console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f']
    ```

17. **`join()`** - Joins all elements of an array into a string.

    ```javascript
    const elements = ["Fire", "Air", "Water"];
    console.log(elements.join()); // 'Fire,Air,Water'
    console.log(elements.join("")); // 'FireAirWater'
    console.log(elements.join("-")); // 'Fire-Air-Water'
    ```

18. **`reverse()`** - Reverses an array in place.

    ```javascript
    const array = ["one", "two", "three"];
    array.reverse();
    console.log(array); // ['three', 'two', 'one']
    ```

19. **`sort()`** - Sorts the elements of an array in place and returns the array.

    ```javascript
    const months = ["March", "Jan", "Feb", "Dec"];
    months.sort();
    console.log(months); // ['Dec', 'Feb', 'Jan', 'March']
    ```

20. **`every()`** - Tests whether all elements in the array pass the test implemented by the provided function.

    ```javascript
    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array = [1, 30, 39, 29, 10, 13];
    console.log(array.every(isBelowThreshold)); // true
    ```

21. **`some()`** - Tests whether at least one element in the array passes the test implemented by the provided function.

    ```javascript
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log(array.some(even)); // true
    ```

22. **`flat()`** - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    ```javascript
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat()); // [0, 1, 2, 3, 4]
    ```

23. **`flatMap()`** - First maps each element using a mapping function, then flattens the result into a new array.
    ```javascript
    const arr1 = [1, 2, 3, 4];
    const arr2 = arr1.flatMap((x) => [x, x * 2]);
    console.log(arr2); // [1, 2, 2, 4, 3, 6, 4, 8]
    ```
