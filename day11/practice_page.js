const showProducts = (obj) => {
    console.log("A : Inside showProducts");
    const products = obj.products;
    for (let i = 0; i < products.length; i++) {
        const singleProduct = products[i];

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = singleProduct.thumbnail;
        card.appendChild(img);

        const title = document.createElement("h4");
        title.innerText = singleProduct.title;
        card.appendChild(title);

        const para = document.createElement("p");
        para.innerText = singleProduct.description;
        card.appendChild(para);

        const parent = document.getElementById("root");
        parent.appendChild(card);
    }
};

// const getData = () => {
//     const req = fetch("https://dummyjson.com/products");
//     req.then((res) => {
//         const pr = res.json();
//         pr.then((dataObj) => {
//             showProducts(dataObj);
//         });
//     }).catch((err) => {
//         alert(err.message);
//     });
// };
// getData();

// ------------------------------------------------------------

// THEN - CATCH - was the old way of handling promises
// ASYNC - AWAIT - is the modern way of handling promises
//              --> Async await is internally build on to of then...catch... (wrapper)

// --------------------------------------------------------------

// AWAIT actually waits for the promise the complete
// then code after await keyword, will only execute when the promise is fulfilled
// (it does not block the call stack, because javascript cannot wait for something)
// (then code after await keyword, is given to the browser as a callback)

// whenever you want to use await, you function should be async

console.log("B : START");

const getData = async () => {
    try {
        console.log("C : Inside GET DATA");
        const res = await fetch("https://dummyjson.com/products"); // be default :: GET Request
        console.log("D : got response...");
        const dataObj = await res.json();
        console.log("E : got DATAObj...");
        showProducts(dataObj);
        console.log("F : DONE with showProducts");
    } catch (err) {
        alert("Oops... Something went wrong!");
    }
};

console.log("G : CALLING getData()");

// let j = 0; // BLOCKING THE MAIN THREAD
// for (let i = 0; i < 10000000000; i++) {
//     j++;
// }

// getData();
console.log("H : END");
