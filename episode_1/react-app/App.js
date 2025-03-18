// create dom node || react element
// const headingNode = React.createElement("h1", {}, "hello react from app.js");
// const childNode = React.createElement("div", { id: "child" }, React.createElement("h1", {}, "hello react from app.js"));
const parentNode = React.createElement("div", { id: "parent" },
    // having two child
    [
        React.createElement("div", { id: "child-one" },
            [
                React.createElement("h1", {}, "hello react from child-one h1 app.js"),
                React.createElement("h2", {}, "hello react from child-one h2 app.js")

            ]
        ),
        React.createElement("div", { id: "child-two" },
            [
                React.createElement("h1", {}, "hello react from child-two h1 app.js"),
                React.createElement("h2", {}, "hello react from child-two h2 app.js")
            ]
        ),
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentNode);
console.log(parentNode);