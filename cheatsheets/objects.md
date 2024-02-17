**JavaScript Object class methods**

1. **`Object.keys()`** - Returns an array of a given object's own enumerable property names.

   ```javascript
   const person = { name: "John", age: 30 };
   console.log(Object.keys(person)); // ['name', 'age']
   ```

2. **`Object.values()`** - Returns an array of a given object's own enumerable property values.

   ```javascript
   const person = { name: "John", age: 30 };
   console.log(Object.values(person)); // ['John', 30]
   ```

3. **`Object.entries()`** - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

   ```javascript
   const person = { name: "John", age: 30 };
   console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]
   ```

4. **`Object.assign()`** - Copies all enumerable own properties from one or more source objects to a target object.

   ```javascript
   const target = { a: 1 };
   const source = { b: 2 };
   const returnedTarget = Object.assign(target, source);
   console.log(target); // { a: 1, b: 2 }
   console.log(returnedTarget); // { a: 1, b: 2 }
   ```

5. **`Object.freeze()`** - Freezes an object. A frozen object can no longer be changed.

   ```javascript
   const obj = { prop: 42 };
   Object.freeze(obj);
   obj.prop = 33;
   // Attempting to change the property does nothing because the object is frozen.
   console.log(obj.prop); // 42
   ```

6. **`Object.seal()`** - Prevents new properties from being added to an object and marks all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

   ```javascript
   const obj = { prop: 42 };
   Object.seal(obj);
   obj.prop = 33;
   obj.newProp = "test"; // This will not add a new property
   console.log(obj); // { prop: 33 }
   ```

7. **`Object.defineProperty()`** - Adds or modifies a property on an object and returns the object.

   ```javascript
   const object1 = {};
   Object.defineProperty(object1, "property1", {
     value: 42,
     writable: false,
   });
   object1.property1 = 77;
   // property1 is not writable
   console.log(object1.property1); // 42
   ```

8. **`Object.getOwnPropertyDescriptor()`** - Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

   ```javascript
   const object1 = { property1: 42 };
   const descriptor = Object.getOwnPropertyDescriptor(object1, "property1");
   console.log(descriptor.value); // 42
   console.log(descriptor.configurable); // true
   ```

9. **`Object.getOwnPropertyNames()`** - Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

   ```javascript
   const object1 = { a: 1, b: 2, c: 3 };
   console.log(Object.getOwnPropertyNames(object1)); // ['a', 'b', 'c']
   ```

10. **`Object.create()`** - Creates a new object, using an existing object as the prototype of the newly created object.

    ```javascript
    const person = { isHuman: false };
    const me = Object.create(person);
    console.log(me.isHuman); // false
    me.isHuman = true;
    console.log(me.isHuman); // true
    ```

11. **`Object.hasOwnProperty()`** - Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

    ```javascript
    const object1 = { prop: "exists" };
    console.log(object1.hasOwnProperty("prop")); // true
    console.log(object1.hasOwnProperty("toString")); // false
    ```

12. **`Object.is()`** - Determines whether two values are the same value.

    ```javascript
    console.log(Object.is("foo", "foo")); // true
    console.log(Object.is(window, window)); // true
    console.log(Object.is("foo", "bar")); // false
    console.log(Object.is([], [])); // false
    ```

13. **`Object.isFrozen()`** - Determines if an object is frozen.

    ```javascript
    const obj = { prop: 42 };
    console.log(Object.isFrozen(obj)); // false
    Object.freeze(obj);
    console.log(Object.isFrozen(obj)); // true
    ```

14. **`Object.isSealed()`** - Determines if an object is sealed.

    ```javascript
    const obj = { prop: 42 };
    console.log(Object.isSealed(obj)); // false
    Object.seal(obj);
    console.log(Object.isSealed(obj)); // true
    ```

15. **`Object.isExtensible()`** - Determines if an object is extensible (whether it can have new properties added to it).

    ```javascript
    const obj = {};
    console.log(Object.isExtensible(obj)); // true
    Object.preventExtensions(obj);
    console.log(Object.isExtensible(obj)); // false
    ```

16. **`Object.preventExtensions()`** - Prevents new properties from being added to an object.
    ```javascript
    const obj = {};
    Object.preventExtensions(obj);
    obj.newProp = "test";
    console.log(obj.newProp); // undefined
    ```
