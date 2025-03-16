import React from "react";
import ReactDOM from "react-dom/client";

const parentNode = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child-one" },
            [
                React.createElement("h1", { id: "child-one-h1" }, "hello react from child-one h1 app. - changed"),
                React.createElement("h2", { id: "child-one-h2" }, "hello react from child-one h2 app.js - changed")
            ]
        ),
        React.createElement(
            "div",
            { id: "child-two" },
            [
                React.createElement("h1", { id: "child-two-h1" }, "hello react from child-two h1 app.js"),
                React.createElement("h2", { id: "child-two-h2" }, "hello react from child-two h2 app.js")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentNode);

console.log(parentNode);