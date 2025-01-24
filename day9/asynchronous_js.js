// ---------------------------------------------------------------------------------------

// const heading = document.getElementsByTagName("h2")[0];

// const getRandomColor = () => {
//     let randomRed = Math.random(); // 0 to 1;  (decimal mostly)
//     randomRed = randomRed * 255; // 0 to 255; (decimal mostly)
//     randomRed = Math.floor(randomRed); // 220.71 --> 220

//     let randomGreen = Math.random(); // 0 to 1;  (decimal mostly)
//     randomGreen = randomGreen * 255; // 0 to 255; (decimal mostly)
//     randomGreen = Math.floor(randomGreen); // 220.71 --> 220

//     let randomBlue = Math.random(); // 0 to 1;  (decimal mostly)
//     randomBlue = randomBlue * 255; // 0 to 255; (decimal mostly)
//     randomBlue = Math.floor(randomBlue); // 220.71 --> 220

//     // rgba, rgb, #hexcode, namedcolors
//     const color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`; // rgb(0-255, 0-255, 0-255)
//     return color;
// };

// const handleHeadingStyling = () => {
//     heading.style.backgroundColor = getRandomColor();
//     heading.style.color = getRandomColor();
// };

// setTimeout(handleHeadingStyling, 3000); // mention time in MilliSeconds // IT ONLY HAPPEN ONES
// setInterval(handleHeadingStyling, 500); // mention time in MilliSeconds // IT HAPPENS INFINITE TIMES

// ---------------------------------------------------------------------------------------

// console.log("START");

// const handleWelcome = () => {
//     console.log("WELCOME !");
//     setTimeout(function myTimer() {
//         console.log("Hello");
//     }, 30000);
// };

// handleWelcome();

// console.log("END");

// const handleClick = () => {
//     console.log("Clicked!", Math.random());
// };

// ---------------------------------------------------------------------------------------

// const bdy = document.getElementsByTagName("body")[0];
// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");

// // you don't need to write "ON" here

// bdy.addEventListener(
//     "click",
//     () => {
//         console.log("clicked on body");
//     },
//     { capture: true }
// );

// btn1.addEventListener("click", () => {
//     console.log("btn 1");
// });

// btn2.addEventListener("click", () => {
//     console.log("btn 2");
// });

// -----------------------------------------------------------------------------------

console.log("A -- Start");

function doSomeThing() {
    console.log("B -- Starting...");
    setTimeout(() => {
        console.log("C -- Callback completed");
    }, 0);
    console.log("D -- Done");
}

console.log("E -- Made function ...");

doSomeThing();

console.log("F -- end");

// -----------------------------------------------------------------------------------
