**JavaScript string methods**

1. **`charAt()`** - Returns the character at the specified index (position).

   ```javascript
   const str = "HELLO WORLD";
   console.log(str.charAt(0)); // 'H'
   ```

2. **`charCodeAt()`** - Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

   ```javascript
   const str = "HELLO WORLD";
   console.log(str.charCodeAt(0)); // 72
   ```

3. **`concat()`** - Concatenates the string arguments to the calling string and returns a new string.

   ```javascript
   const str1 = "Hello";
   const str2 = "World";
   console.log(str1.concat(" ", str2)); // 'Hello World'
   ```

4. **`includes()`** - Determines whether one string may be found within another string, returning true or false as appropriate.

   ```javascript
   const str = "Hello world";
   console.log(str.includes("world")); // true
   ```

5. **`indexOf()`** - Returns the index within the calling String object of the first occurrence of the specified value, starting the search at `fromIndex`. Returns -1 if the value is not found.

   ```javascript
   const str = "Hello world, welcome to the universe.";
   console.log(str.indexOf("welcome")); // 13
   ```

6. **`lastIndexOf()`** - Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from `fromIndex`. Returns -1 if the value is not found.

   ```javascript
   const str = "Hello planet earth, you are a great planet.";
   console.log(str.lastIndexOf("planet")); // 36
   ```

7. **`match()`** - Retrieves the result of matching a string against a regular expression.

   ```javascript
   const str = "The rain in SPAIN stays mainly in the plain";
   console.log(str.match(/ain/g)); // ['ain', 'ain', 'ain']
   ```

8. **`matchAll()`** - Returns an iterator of all results matching a string against a regular expression, including capturing groups.

   ```javascript
   const str = "test1test2";
   const regex = /(test\d?)/g;
   const array = [...str.matchAll(regex)];
   console.log(array[0]); // ['test1', 'test1', index: 0, input: 'test1test2', groups: undefined]
   ```

9. **`repeat()`** - Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

   ```javascript
   const str = "abc";
   console.log(str.repeat(2)); // 'abcabc'
   ```

10. **`replace()`** - Returns a new string with some or all matches of a pattern replaced by a replacement.

    ```javascript
    const str = "Visit Microsoft!";
    console.log(str.replace("Microsoft", "W3Schools")); // 'Visit W3Schools!'
    ```

11. **`replaceAll()`** - Returns a new string with all matches of a pattern replaced by a replacement.

    ```javascript
    const str = "fooBarFooBar";
    console.log(str.replaceAll("Bar", "")); // 'fooFoo'
    ```

12. **`search()`** - Executes a search for a match between a regular expression and this String object.

    ```javascript
    const str = "hey JudE";
    console.log(str.search(/Jude/i)); // 4
    ```

13. **`slice()`** - Extracts a section of a string and returns it as a new string, without modifying the original string.

    ```javascript
    const str = "The quick brown fox jumps over the lazy dog.";
    console.log(str.slice(31)); // 'the lazy dog.'
    ```

14. **`split()`** - Splits a String object into an array of strings by separating the string into substrings.

    ```javascript
    const str = "The quick brown fox jumps over the lazy dog.";
    const words = str.split(" ");
    console.log(words[3]); // 'brown'
    ```

15. **`startsWith()`** - Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

    ```javascript
    const str = "Saturday night plans";
    console.log(str.startsWith("Sat")); // true
    ```

16. **`substring()`** - Returns the part of the string between the start and end indexes, or to the end of the string.

    ```javascript
    const str = "Mozilla";
    console.log(str.substring(1, 3)); // 'oz'
    ```

17. **`toLowerCase()`** - Returns the calling string value converted to lower case.

    ```javascript
    const str = "ALPHABET";
    console.log(str.toLowerCase()); // 'alphabet'
    ```

18. **`toUpperCase()`** - Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

    ```javascript
    const str = "alphabet";
    console.log(str.toUpperCase()); // 'ALPHABET'
    ```

19. **`trim()`** - Trims whitespace from both ends of a string.

    ```javascript
    const str = "   Hello world!   ";
    console.log(str.trim()); // 'Hello world!'
    ```

20. **`trimStart()`** or **`trimLeft()`** - Trims whitespace from the beginning of a string.

    ```javascript
    const str = "   Hello world!   ";
    console.log(str.trimStart()); // 'Hello world!   '
    ```

21. **`trimEnd()`** or **`trimRight()`** - Trims whitespace from the end of a string.

    ```javascript
    const str = "   Hello world!   ";
    console.log(str.trimEnd()); // '   Hello world!'
    ```

22. **`padStart()`** - Pads the current string from the start with another string (multiple times, if needed) until the resulting string reaches the given length.

    ```javascript
    const str = "5";
    console.log(str.padStart(2, "0")); // '05'
    ```

23. **`padEnd()`** - Pads the current string from the end with another string (multiple times, if needed) until the resulting string reaches the given length.
    ```javascript
    const str = "5";
    console.log(str.padEnd(2, "0")); // '50'
    ```
