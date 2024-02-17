JavaScript Numbers methods

1. **`Number()`** - Converts the object argument to a number that represents the object's value.

   ```javascript
   console.log(Number("123")); // 123
   console.log(Number("123.45")); // 123.45
   console.log(Number("123e-1")); // 12.3
   ```

2. **`parseFloat()`** - Parses an argument and returns a floating point number.

   ```javascript
   console.log(parseFloat("10.00")); // 10
   console.log(parseFloat("10.50")); // 10.5
   console.log(parseFloat("0.0314E+2")); // 3.14
   ```

3. **`parseInt()`** - Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

   ```javascript
   console.log(parseInt("10", 10)); // 10
   console.log(parseInt("A", 16)); // 10 (hexadecimal)
   console.log(parseInt("20", 8)); // 16 (octal)
   ```

4. **`toFixed()`** - Formats a number using fixed-point notation.

   ```javascript
   const num = 123.456;
   console.log(num.toFixed(2)); // '123.46'
   console.log(num.toFixed(0)); // '123'
   ```

5. **`toPrecision()`** - Returns a string representing the Number object to the specified precision.

   ```javascript
   const num = 5.123456;
   console.log(num.toPrecision(5)); // '5.1235'
   console.log(num.toPrecision(2)); // '5.1'
   console.log(num.toPrecision(1)); // '5'
   ```

6. **`toString()`** - Returns a string representing the specified Number object.

   ```javascript
   const num = 10;
   console.log(num.toString()); // '10'
   console.log(num.toString(2)); // '1010' (binary)
   console.log(num.toString(16)); // 'a' (hexadecimal)
   ```

7. **`valueOf()`** - Returns the primitive value of a Number object.

   ```javascript
   const numObj = new Number(10);
   console.log(numObj.valueOf()); // 10
   ```

8. **`isFinite()`** - Determines whether the passed value is a finite number.

   ```javascript
   console.log(Number.isFinite(Infinity)); // false
   console.log(Number.isFinite(-Infinity)); // false
   console.log(Number.isFinite(0)); // true
   ```

9. **`isNaN()`** - Determines whether the passed value is NaN and its type is Number. It's a more robust version of the original global `isNaN()`.

   ```javascript
   console.log(Number.isNaN(NaN)); // true
   console.log(Number.isNaN(123)); // false
   console.log(Number.isNaN("123")); // false
   ```

10. **`isInteger()`** - Determines whether the passed value is an integer.

    ```javascript
    console.log(Number.isInteger(5)); // true
    console.log(Number.isInteger(5.0)); // true
    console.log(Number.isInteger(5.1)); // false
    ```

11. **`isSafeInteger()`** - Determines whether the provided value is a number that is a safe integer.
    ```javascript
    console.log(Number.isSafeInteger(3)); // true
    console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
    console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
    ```
