import React from "react";
import ReactDOM from "react-dom/client";

// react element - object
const heading = React.createElement("div", { id: "heading" }, "hello world using createElement and createRoot!"); // type object
const root = ReactDOM.createRoot(document.getElementById("root")); // type object

console.log(heading);
console.log(root);

// render - does the conversion of js object into react elements
root.render(heading);

// jsx - is not html, it's just html like syntax even though it's like xml
const JSXHeading = <h1>Hello, world! using JSX</h1>;

