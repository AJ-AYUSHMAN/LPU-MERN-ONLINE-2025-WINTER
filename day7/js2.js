// NAMING CONVENTION in JAVASCRIPT --> camelCase

// console.log("Hello body end"); // cout, printf, system.out

// JS started as INTERPRETED LANGUAGE: No blocking time, No-Optimization-scope
// C++: Compiled (blocking during compiling), OPTIMIZED

// JS --> Modern Browsers --> JIT (Just in time Compilation)

// -----------------------------------------------------------------------

// // HOW THE PROGRAM RUNs?
// // 1. MEMORY ALLOCATION (line by line) (Only checks for variable and function DECLARATIONs)
// // 2. Execution (++) (line by line) (Executes the logic)

// // memory allocated for upcoming variable "city" = "Delhi"
// // memory allocated for upcoming variable "country" = "India"

// var city = "Delhi"; // memory allocated for upcoming variable "city" = undefined
// console.log(city); // Delhi

// console.log(country); // undefined
// var country = "India";

// console.log(state); // --> STATE is not defined

// // VAR : Industry standard says: avoid using VAR
// // Oldest keyword
// // function SCOPED
// // if you access it before initialization
// // --> "undefined" if the variable is declared after this line
// // --> "Reference Error: ... not defined" if the variable is not at all declared anywhere in the code
// // Redeclaration ALLOWED :  VERY BAD as the industry standard

// -------------------------------------------------------------------------------------

// var city = "Delhi";
// console.log(city);

// var city = "Mumbai";
// console.log(city);

// --------------------------------------------------------------------------------------

// LET and CONST introduction in JS: 2015 when *ES6* was launched (also known as ECMAScript 2015)
// GTA 5 --- GTA 2024

// --------------------------------------------------------------------------------------

// // LET
// // IT CANNOT be RE-DECLARED
// // It is block scoped
// // They are hoisted differently (in temporal dead zone)

// // // 1. MEMORY ALLOCATION (line by line) (Only checks for variable and function DECLARATIONs)
// // // 2. Execution (++) (line by line) (Executes the logic)

// // TEMPORAL DEAD ZONE: LET variable will come with name "city"
// // TEMPORAL DEAD ZONE: LET variable will come with name "country"
// // TEMPORAL DEAD ZONE variables can be accessed before initialization

// let city = "Delhi"; // city = "Delhi"
// console.log(city); // Delhi

// console.log(country);
// let country = "India"; // country = "India"
// // let country === DECLARATION part
// // = 'India' === INITIALIZATION part

// // let city = 123;

// ----------------------------------------------------------------------------------------------

// // CONST
// // IT CANNOT be RE-DECLARED
// // It is block scoped
// // They are hoisted differently (in temporal dead zone)
// // IT CANNOT BE RE-ASSIGNED

// const city = "Delhi"; // declaration + initialization
// console.log(city);

// const country = "India";
// console.log(country);

// city = "Mumbai"; // re-assignment (It is allowed in LET but NOT Allowed in const)
// console.log(city);

// ----------------------------------------------------------------------------------------------

// DATATYPES
// __________PRIMITIVE_____________
// * String --> '', "", ~new String()~
// * Number --> write number
// Bigint --> X
// * Boolean --> true or false
// Undefined --> X
// Null --> X
// Symbol --> X
// __________NON-PRIMITIVE_____________
// * Object

// let city = "delhi";
// let pinCode = 441122; // camelCase, programmingPathshala, codeEditor, isUserDefined
// let isUserDefined = false;
// let data = {}; // Don't worry, we will see it after sometime
// let fruits = []; // Don't worry, we will see it after sometime

// ----------------------------------------------------------------------------------------------
// name, console, document, window, setTimeout, ............

// ---------------------------------------------------------------------
// Strict X, Loosely typed :: when it does not require the explicit specification of different types of objects and variables
// Static X, Dynamically typed :: (change of datatype of variable during re-assignment is allowed)
//                             :: if i assign string to a variable and in-future i assign the same variable with array, it works fine
// const cty = 'Delhi'
// console.log(city);
// city = {};
// console.log(city);

// -----------------------------------------------------
// console.log(typeof city);
// console.log(typeof pinCode);
// console.log(typeof isUserDefined);
// console.log(typeof data);
// console.log(typeof fruits);
// -----------------------------------------------------

// TYPE coercion
// BY DEFAULT : +, -, *, / do the arithmetic computations
// BUT : + also does string concatenation

// const city = "Delhi";
// const country = "India";

// const address = city + ", " + country;
// console.log(address);

// -----------------------------------------------------------------
// ----------- NOW there is confusion with "+"
// ------> SO, if both the operands are NUMBERS then it does ARITHMETIC otherwise it does coercion
// ------> If at least one of the operand is string, then it will ALWAYS do string concatenation

// const ans1 = 10 + 30;
// console.log(ans1); // --> 40

// const ans2 = 10 + "Hello";
// console.log(ans2); // --> 10Hello

// const ans3 = "Hello" + 10;
// console.log(ans3); // --> Hello10

// const ans4 = "Hello" + " All!";
// console.log(ans4); // --> Hello All!

// const ans5 = "10" + "20";
// console.log(ans5); // 1020

// const ans6 = 10 + "20";
// console.log(ans6); // 1020

// const ans7 = 10 + 20;
// console.log(ans7); // 1020

// --------------------------------------------------------
// If any other ARITHMETIC OPERATOR is used like -, * , /
// It will give NaN for such not meaningful cases

// -----------------------------------------------------

const ans1 = 30 - 10;
console.log(ans1); // --> 20

const ans2 = 10 - "Hello";
console.log(ans2); // --> NaN

const ans3 = "Hello" - 10;
console.log(ans3); // --> NaN

const ans4 = "Hello" - " All!";
console.log(ans4); // --> NaN

const ans5 = "90" - "10"; // --> 90 - 10
console.log(ans5); // 80

const ans6 = 20 - "10"; // --> 20 - 10
console.log(ans6); // 10

const ans7 = 50 - 20;
console.log(ans7); // 30

// -----------------------------------------------------
