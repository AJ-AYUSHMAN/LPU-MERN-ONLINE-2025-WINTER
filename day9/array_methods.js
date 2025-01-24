// const arr = [
//     ["Moon", "Sun"],
//     ["Planets", "Galaxy"],
//     ["humans", ["animals"]],
// ]; // --> ["Moon", "Sun", "Planets", "Galaxy", "humans", "animals",]

// console.log(arr);
// // arr.splice(1, 2);
// arr.splice(1, 0, "Jupiter", "EARTH"); // it can be used for DELETION as well as INSERTION
// console.log(arr);
// -----------------------------
// console.log(arr);
// const result = arr.flat();
// console.log("🟡 : result:", result);
// -----------------------------
// console.log(arr);
// const result = arr.flat(2);
// console.log("🟡 : result:", result);
// -----------------------------

// ======== ======== ======== ======== ======== ======== ======== ========

// https://www.w3schools.com/js/js_array_iteration.asp

// ITERATION METHODS in JS Arrays
// const arr = ["Moon", "Sun", "Planets", "Galaxy", "humans", "animals"];

// 1. FOR_EACH
// ------------------
// const myCustomFunction = () => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i], i, arr);
//     }
// };
// myCustomFunction();
// ------------------

// ------------------
// const myCustomFunction = (cb) => { // PARAMETER
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// };

// const cb = (a, b, c) => {
//     console.log(a, b, c);
// };
// myCustomFunction(cb); // ARGUMENT
// ------------------

// ------------------
// const cb = (a, b, c) => {
//     console.log(a, b, c);
// };
// arr.forEach(cb);
// ------------------

// ------------------
// arr.forEach((a, b, c) => {
//     console.log(a, b, c);
// });
// ------------------
// --------
// const a = 10;
// func(a);
// --------
// func(10);
// --------

// ------------------------------------------------------------------
// IN Javascript,

// If you call a function by giving more than 3 arguments to function which can take at 3 parameters
// --> What will happen?? --> THERE will be NO ERROR --> Extra arguments are ignored
// If you call a function by giving more than 1 argument to function which can take at 5 parameters
// --> What will happen?? --> THERE will be NO ERROR --> Remaining parameters will get value as "undefined"

// const ans = arr.forEach((a, b, c) => {
//     console.log(a, b, c);
//     return 10;
// }); // FOREACH does not return anything

// console.log(ans);

// ------------------------------------------------------------------------------------

// const myCustomFunction = (cb) => {
//     // PARAMETER
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// };

// const cb = (a, b, c) => {
//     console.log(a, b, c);
// };

// myCustomFunction(cb); // ARGUMENT

// ------------------------------------------------------------------------------------
// FOREACH WITH LESS PARAMETERS
// const ans = arr.forEach((a) => {
//     console.log(a);
//     return 10;
// });
// console.log(ans);

// ------------------------------------------------------------------------------------
// MAP
// console.log(arr);
// const ans = arr.map((a) => {
//     console.log(a);
//     return "Hello " + a;
// });
// console.log(ans);

// ------------------------------------------------------------------------------------
// const sum = (a = 0, b = 0) => {
//     const ans = a + b;
//     console.log(ans);
// };

// sum();
// sum(10);
// sum(10, 20);

// --------------------------------------------------------------------------------------------
// REST OPERATOR

// const sum = (...arr) => {
//     // REST OPERATOR (it pick up the items and put it inside a container)
//     // input --> 10, 20, 30, 40, 50, 10, 10, 10, 20, 40, 50, 60, 70
//     // does  --> [ 10, 20, 30, 40, 50, 10, 10, 10, 20, 40, 50, 60, 70 ]
//     // console.log(arr);
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// };

// sum();
// sum(10);
// sum(10, 20);
// sum(10, 20, 30);
// sum(10, 20, 30, 40);
// sum(10, 20, 30, 40, 50);
// sum(10, 20, 30, 40, 50, 10);
// sum(10, 20, 30, 40, 50, 10, 10, 10, 20, 40, 50, 60, 70);

// -----------------------------------------------------------------------------
// DESTRUCTURING
// const arr = ["Moon", "Sun", "Planets", "Galaxy", "humans", "animals"];
// const [firstElem, xyz, hello] = arr; // DESTRUCTURING --> it removes the outermost container layer
// console.log(firstElem, xyz, hello);
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// // DESTRUCTURING & REST OPERATOR
// const arr = ["Moon", "Sun", "Planets", "Galaxy", "humans", "animals"];
// const [firstEl, xyz, ...remaining] = arr; // DESTRUCTURING --> it removes the outermost container layer
// // REST OPERATOR (it pick up the items and put it inside a container)
// console.log(firstEl, xyz);
// console.log(remaining);

// ARRAY destructuring --> Order of the elements matter
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// // OBJECT destructuring --> name of the KEYS to destructure should be
// const obj = {
//     name: "Anurag",
//     city: "Delhi",
//     country: "India",
//     phone: "1230989234",
//     bloodGroup: "O+",
// };

// const { firstEle, bloodGroup, ...rem } = obj;
// // // REST OPERATOR (it pick up the items and put it inside a container)
// // (CONTAINER can be array or object, depends on the items)

// console.log(firstEle, bloodGroup);
// console.log(rem);
// -----------------------------------------------------------------------------
