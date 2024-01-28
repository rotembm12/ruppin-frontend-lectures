// Declare new object
let obj = {};

typeof obj; // object

// Set a value in id key
obj.id = 1;

console.log(obj); // Object { id: 1 }

// Read a value from object key
let someoneId = obj.id;

// declarea a new obj with predefined values
let anotherObj = {
  id: 2,
  name: "rotem",
  age: 31,
};

//#region Create an object from a function
function createMyObject(id, name) {
  let myObject = {
    id: id,
    name: name,
  };
  return myObject;
}
let result = createMyObject(1, "DUDU");
console.log(result); // Object { id: 1, name: "DUDU" }
// #endregion

//#region Short syntax for key and value that has the same identifier
let id = 3;
let firstName = "Shimon";
let myObj = {
  id, // id: id
  firstName, // firstName: firstName
};
// #endregion

//#region object with a nested object
let objWithNested = {
  id: 4,
  name: "raul",
  moreInfo: {
    children: 3,
    likes: ["football", "food", "sleep"],
  },
};
// #endregion

//#region Access object values
objWithNested.id; // access id key
objWithNested["name"]; // access name key with evaluated keyname

let key = "moreInfo";
objWithNested[key]; // possible because of accessing by square brackets
objWithNested.key; // Wont work!! this way is only possible when accessing with the exact key name
// #endregion

//#region Delete a key
let anotherCoolObjectForYou = {};
anotherCoolObjectForYou.id = 1;
anotherCoolObjectForYou.name = "Moshe";
console.log(anotherCoolObjectForYou); // Object {id: 1, name: "Moshe"} delete myObject.name;
delete myObject.name;
console.log(anotherCoolObjectForYou); // Object {id: 1}
// #endregion

//#region Methods for an object
let objWithMethods = {
  id: 1,
  alertMe: function () {
    console.log("hi!");
  },
};
console.log(myObject); // Object {id: 1, alertMe: ƒ () }
myObject.alertMe(); // hi!
// #endregion

//#region Nesting and keys validation
let objWithNestedObj = {
  id: 1,
  name: "Moshe",
  address: {
    city: "Bat-Yam",
    street: "Balfur 20",
  },
};
console.log(objWithNestedObj.id); // 1
console.log(objWithNestedObj.name); // Moshe
console.log(objWithNestedObj.address); // {city: "Bat-Yam", street: "Balfur }"
// in order to access the city field:
onsole.log(objWithNestedObj.address.city);

// if we access a key of an unexisting object, well get an error!
let objForDemo = {
  id: 44,
  name: "anonymous",
};
console.log(objForDemo.address.city); /// Uncaught TypeError: Cannot read property 'city' of undefined

// The error is because objForDemo.address is undefined
// Accesssing a key of an undefined will throw an error

// if we are not sure if the object is defined (really exists as an object)
// we can use "Optional chaining"

console.log(objForDemo.address?.city); // undefined but not an error
// #endregion

//#region Object as a const
const constantObj = {};
constantObj.name = "Moshe";
constantObj.id = 22;
console.log(constantObj); // Object {name: "Moshe", id: 22}
constantObj = 1; // Uncaught TypeError: Assignment to constant variable.

/**
 * בדוגמה שלעיל אפשר לראות איך מגדירים את myObject כקבוע, אך למרות זאת אפשר לשנות את הערכים בתוכו. אבל אם מנסים לשנות את הסוג מאובייקט למשהו אחר (במקרה הזה מספר), נתקלים בשגיאה.
יש כמה הבדלים משמעותיים בין סוגי מידע פרימיטיביים לבין אובייקטים וסוגי מידע מורכבים יותר. אחד השינויים הכי מבלבלים הוא עניין ההצבעה, שאינו כל כך מורכב כפי שחושבים. כשכתבתי על משתנים פרימיטיביים, ציינתי שאפשר להעתיק את המשתנה למשתנה אחר. אם משנים את המשתנה האחר, המשתנה המקורי נשאר כשהיה. הינה
דוגמה:
אבל מה קורה כשעושים משהו דומה באובייקט? אם מעתיקים אותו למשתנה אחר? אם עושים את זה ומשנים את המשתנה האחר, רואים שהאובייקט העיקרי השתנה! נסו להריץ את הקוד הזה למשל:
שינוי באובייקט, שאמור להיות במשתנה השני, משפיע על האובייקט המקורי! זה קורה כי כשמעתיקים אובייקט שנמצא במשתנה objectA למשתנה objectB לא מבצעים העתקה אלא הפניה, וההבדל ביניהן משמעותי. הסיבה לכך היא שיקולי זיכרון. אם רוצים לבצע העתקה של אובייקט ולשנות אותו בלי שהוא ישפיע על האובייקט המקורי, צריך לעשות
הליך שנקרא clone ואפשרי לביצוע באמצעות לולאות
 */
// #endregion

//#region PRACTICE:

// Make an object called "computer" with 3 fields:
// id, name, price
// #region Solution:
let computer = {
  id: 1,
  name: "Name",
  price: 20,
};
console.log(computer); // Object {id: 1, name: "Name", price: 20}

let anotherComputer = {};
anotherComputer.id = 1;
anotherComputer.name = "Name";
anotherComputer.price = 20;
console.log(anotherComputer); // Object {id: 1, name: "Name", price: 20}
// #endregion

// -------------------
// Make a function that receives a number argument 1-7
// And returns a day object with the following format:
// { dayName: "Sunday", dayNumber: 1 }
// Day names: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
// #region solution
function findDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      console.log("Not 1-7 number");
      return {};
  }
  let answer = {
    dayNumber: dayNumber,
    dayName: dayName,
  };
  return answer;
}
let foo = findDayName(1);
console.log(foo); // Object {dayNumber: 1, dayName: "Sunday"}
// #endregion

// -------------------
// Make a function that gets 3 arguments:
// object, property, value
// and returns the received object with the property and value added
// #region Solution:
function addThisProperty(obj, property, value) {
  obj[property] = value;
  return obj;
}
let newObj = {};
newObj = addThisProperty(newObj, "id", 1);
newObj = addThisProperty(newObj, "name", "Rotem");
console.log(newObj); // Object {id: 1, name: "Rotem"}
// #endregion

// -------------------
// Make an object that has 2 methods
// 1. say: a method that gets an argument and print it to console
// 2. returnObj: a method that returns the following object: { name: "yourName", id: 1 }
// #region solution
let myAwesomeObj = {
  say: function (arg1) {
    console.log(arg1);
  },
  returnObject: function () {
    const answer = {
      id: 1,
      name: "Rotem",
    };
    return answer;
  },
};
object.say("Hello world!!"); // Hello world!!
let objectush = object.returnObject(); // Object {id: 1, name: "Rotem"}
// #endregion
// #endregion
