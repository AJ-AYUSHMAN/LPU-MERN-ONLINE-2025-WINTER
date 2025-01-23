// function showText(txt) {
//     console.log("---**--- ", txt, " ---**---");
// }

// function sum(a, b) {
//     return a + b;
// }

// const ans1 = sum(20, 30);
// showText(ans1);

// const ans2 = sum(100, 30);
// showText(ans2);

// -----------------------------------OBJ, FN ("CB+HOF", *Promises)------------------------------------------

function showText(txt) {
    console.log("---**--- ", txt, " ---**---");
}

function sum(a, b, fn) {
    // arguments
    const ans = a + b;
    fn(ans);
}

const val1 = 10;
const val2 = 20;

// in this case : "showText" is a "CALLBACK" & "sum" is a "HigherOrderFunction(HOF)"
sum(val1, val2, showText); // THIS is possible JS
// you can pass a function as a parameter to another function
// function should be TREATED like any other variable ~ string, number, boolean, ...

// from where we are getting the value for the text? :: SHUSHANT :: give some light
// ME :: why i did not put parenthesis while passing the function as an argument?
// --> Because I (main program :: GlobalExecutionContext ) don't want to invoke the function,
//     SUM will handle when to call, how to call and what arguments to pass.

// HOF:
// A function that
// 1. receives another function as an argument
// 2. returns a new function (after some time)

// JS is a single threaded language :: IT can do ONE THING at a time
// :: whatever function is on the top of callstack will run,
// and the other functions will wait for it to complete
