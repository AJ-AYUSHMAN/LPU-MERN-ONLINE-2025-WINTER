const getRandomColor = () => {
    let randomRed = Math.random(); // 0 to 1;  (decimal mostly)
    randomRed = randomRed * 255; // 0 to 255; (decimal mostly)
    randomRed = Math.floor(randomRed); // 220.71 --> 220

    let randomGreen = Math.random(); // 0 to 1;  (decimal mostly)
    randomGreen = randomGreen * 255; // 0 to 255; (decimal mostly)
    randomGreen = Math.floor(randomGreen); // 220.71 --> 220

    let randomBlue = Math.random(); // 0 to 1;  (decimal mostly)
    randomBlue = randomBlue * 255; // 0 to 255; (decimal mostly)
    randomBlue = Math.floor(randomBlue); // 220.71 --> 220

    // rgba, rgb, #hexcode, namedcolors
    const color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`; // rgb(0-255, 0-255, 0-255)
    return color;
};

function handleGlobalClick(e) {
    console.log("----------- (body) --------------");
    const targetElement = e.target;
    // dom manipulation
    targetElement.style.backgroundColor = getRandomColor();
    // call api
}

const handleButtonClick = () => {
    console.log("------------ (button) -------------");
    const con = document.getElementById("secret-container");
    con.style.display = "block";
};

const sectionClick = () => {
    console.log("------------ (section) -------------");
};

function handleMouseLeave() {
    console.log("Mouse Leave");
}

function handleMouseEnter() {
    console.log("Mouse Entered");
}
