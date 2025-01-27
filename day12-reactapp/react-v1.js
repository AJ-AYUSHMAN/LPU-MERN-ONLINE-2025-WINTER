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
// console.log(obj1);

// const obj2 = creator("Hemanth", "This is dummy text");
// console.log(obj2);

// const obj3 = {
//     studentName: "Abhishek",
//     description: "This is again some description...",
//     greetings: `Hello Abhishek! How are you?`,
// };
// console.log(obj3);

// --------------------------------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// // const newTitle = React.createElement("h2", {}, "Hello from REAL React!");
// // console.log("newTitle", newTitle);

// const anotherTitle = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         children: "Hello from REAL React!",
//     },
//     _owner: null,
//     _store: {},
// };

// console.log(anotherTitle);

// root.render(anotherTitle);

// ---------------------------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const newTitle = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         children: "Hello from REAL React!",
//     },
//     _owner: null,
//     _store: {},
// };

// const newPara = {
//     $$typeof: Symbol.for("react.element"),
//     type: "p",
//     key: null,
//     ref: null,
//     props: {
//         children: "Lorem text for dummy ...",
//     },
//     _owner: null,
//     _store: {},
// };

// const container = {
//     $$typeof: Symbol.for("react.element"),
//     type: "div",
//     key: null,
//     ref: null,
//     props: {
//         children: [newTitle, newPara],
//     },
//     _owner: null,
//     _store: {},
// };

// root.render(container);

// ---------------------------------- PROPERTIES OBJECT -------------------------------------------
// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const styleObj = {
//     fontSize: "3rem", // that the key should be in camelcase and value should be in double quotes
//     margin: "3rem",
// };

// const title = React.createElement(
//     "h2",
//     {
//         className: "text-style-type-1",
//         id: "something",
//         style: styleObj,
//         title: "company name",
//     },
//     "Hello from REACT!"
// );

// console.log("🟡 : title:", title);

// root.render(title);

// ---------------------------------- JSX -------------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const styleObj = {
//     fontSize: "3rem", // that the key should be in camelcase and value should be in double quotes
//     margin: "3rem",
// };

// // const title = React.createElement(
// //     "h2",
// //     {
// //         className: "text-style-type-1",
// //         id: "something",
// //         style: styleObj,
// //         title: "company name",
// //     },
// //     "Hello from REACT!"
// // );

// // JSX --> Javascript syntax extension :: It is not Javascript // it is extension of Javascript
// //                                     :: Don't call it HTML inside JS
// // "class" is a keyword in Javascript so we will use "className" for giving classes to elements
// const title = (
//     <h2 className="text-style-type-1" id="something" title="company name">
//         Hello from REACT!
//     </h2>
// );

// // JSX --> is converted into javascript code by TRANSPILER, for example, BABEL

// // Browser does not understand JSX !
// // Browser only understand Javascript !

// console.log("🟡 : title:", title);

// root.render(title);

// ------------------------------  USE JSX for UI (REACT ELEMENT) ----------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const card = (
//     <div className="card">
//         <div>
//             <h3>Hello Likhilesh!</h3>
//             <p>Description</p>
//         </div>
//         <img
//             className="image"
//             src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//         ></img>
//     </div>
// );

// // HERE, "card" is called a REACT ELEMENT

// // I will make a container for multiple cards
// // const container = React.createElement("div", {}, [card, card, card, card]);
// const container = (
//     <div>
//         {card}
//         {card}
//         {card}
//         {card}
//     </div>
// );
// // curly brackets will be used to write any Javascript Expression inside JSX

// root.render(container);

// ------------------ SOME basics -----------------
// const city1 = "Delhi"; // REACT ELEMENT

// const city2 = () => {
//     return "Mumbai";
// }; // REACT Component (JS Function :: returns JSX)

// console.log(city1); // element is written by its name
// console.log(city2()); // function is invoken, that is, paranthesis after name
// ------------------ ------------- -----------------

// ------------------------------  USE JSX for UI (REACT Component) ----------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const Card = (userName) => {
//     return (
//         <div className="card">
//             <div>
//                 <h3>Hello {userName}!</h3>
//                 <p>Description</p>
//             </div>
//             <img
//                 className="image"
//                 src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//             ></img>
//         </div>
//     );
// };

// // HERE, "Card" is called a REACT Component --> Component help you to insert logic in your UI code
// // REACT Component name should be in PascalCase --> camelCase rules + FirstLetterCapital

// // I will make a container for multiple cards
// const container = React.createElement("div", {}, [
//     Card("Likhilesh"),
//     Card("Hemant"),
//     Card("Himanshu"),
//     Card("Abhishek"),
// ]);
// // const container = (
// //     <div>
// //         {Card}
// //         {Card}
// //         {Card}
// //         {Card}
// //     </div>
// // );
// // curly brackets will be used to write any Javascript Expression inside JSX

// root.render(container);

// -================================== COMPONENTS & Reusability ==================================

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const Card = (obj) => {
//     return (
//         <div className="card">
//             <div>
//                 <h3>Hello {obj.userName}!</h3>
//                 <p>{obj.greetings}! How are you?</p>
//             </div>
//             <img
//                 className="image"
//                 src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
//             ></img>
//         </div>
//     );
// }; // Javascript FUNCTION

// // const container = React.createElement("div", {}, [
// //     <Card userName="Likhilesh" greetings="Hello" />,
// //     <Card userName="Hemant" greetings="Hi" />,
// //     <Card userName="Himanshu" greetings="GM" />,
// //     <Card userName="Abhishek" greetings="Hi" />,
// // ]);

// const Container = () => {
//     return (
//         <div>
//             <Card userName="Likhilesh" greetings="Hello" />
//             <Card userName="Hemant" greetings="Hi" />
//             <Card userName="Himanshu" greetings="GM" />
//             <Card userName="Abhishek" greetings="Hi" />
//         </div>
//     );
// };

// // You can use a React Component as a JSX Element
// // This is not possible with React ELEMENT

// // root.render(Container());
// root.render(<Container />);

// ---------------------------------- NO COMMENTS ------------------------------
const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);

const Card = (obj) => {
    return (
        <div className="card">
            <div>
                <h3>Hello {obj.userName}!</h3>
                <p>{obj.greetings}! How are you?</p>
            </div>
            <img
                className="image"
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            ></img>
        </div>
    );
};

const Container = () => {
    return (
        <div>
            <Card userName="Likhilesh" greetings="Hello" />
            <Card userName="Hemant" greetings="Hi" />
            <Card userName="Himanshu" greetings="GM" />
            <Card userName="Abhishek" greetings="Hi" />
        </div>
    );
};

console.log(Container());

root.render(<Container />);
