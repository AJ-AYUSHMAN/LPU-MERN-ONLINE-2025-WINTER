// // -------------------------------------------------------------------

// // console.log(React); // React is a core library with generic powers
// // console.log(ReactDOM); // ReactDOM is a specific library to use React in Web Apps

// const parent = document.getElementById("dom-root"); // real dom element
// const root = ReactDOM.createRoot(parent); // making a root in react-dom and connecting it with real dom

// // const newTitle = document.createElement("h2") // type :: directly react DOM element
// // newTitle.innerText = "...";
// // parent.appendChild(newTitle)

// // we are creating react element, and react will do the process from here on
// // to manage the real dom element and related things
// const newTitle = React.createElement("h2", {}, "Hello from REAL React!"); // type, properties : {}, children
// root.render(newTitle);

// // -------------------------------------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const newTitle = React.createElement("h2", {}, "Hello from REAL React!"); // single child --> text
// const newPara = React.createElement("p", {}, "Lorem ipsum delor..."); // single child --> text
// const container = React.createElement("div", {}, [newTitle, newPara]); // children --> array of react elements

// root.render(container);

// ------------------------------------------------------------

// const parent = document.getElementById("dom-root"); // *** THIS is done ONLY ONCE is REACT APP ***
// const root = ReactDOM.createRoot(parent); // *** THIS is done ONLY ONCE is REACT APP ***

// const newTitle = React.createElement("h2", {}, "Hello from REAL React!");
// const newPara = React.createElement("p", {}, "Lorem ipsum delor...");

// const newLi1 = React.createElement("li", {}, "item no. 1");
// const newLi2 = React.createElement("li", {}, "item no. 2");
// const newUl = React.createElement("ul", {}, [newLi1, newLi2]);

// const newDiv = React.createElement("div", {}, [newTitle, newPara, newUl]);

// root.render(newDiv); // *** THIS is done ONLY ONCE is REACT APP ***

// ------------------------------------------------------------

// const creator = (name, value) => {
//     const res = {
//         studentName: name,
//         description: value,
//         greetings: `Hello ${name}! How are you?`,
//     };
//     return res;
// };

// const obj1 = creator("Likhilesh", "This is dummy text");
// console.log("🟡 : obj1:", obj1);

// const obj2 = creator("Hemanth", "This is dummy text");
// console.log("🟡 : obj1:", obj2);

// --------------------------------------------------------------

const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);

const newTitle = React.createElement("h2", {}, "Hello from REAL React!");

console.log("🟡 : newTitle:", newTitle);

root.render(newTitle);
