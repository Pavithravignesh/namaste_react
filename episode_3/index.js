import React from "react";
import ReactDOM from "react-dom/client";

// jsx - is not html, it's just html like syntax even though it's like xml
// React.createElement => ReactElement - JS Object => rendering using html element HTMLElement(render);
const JSXHeading = (
  <div>
    <h5>Hello, world! using JSX</h5>
    <h5>Hello, world! using JSX</h5>
  </div>
);
const rootJSX = ReactDOM.createRoot(document.getElementById("root-jsx"));

// console.log(JSXHeading);
// console.log(rootJSX);

rootJSX.render(JSXHeading);

// react component - a function which return a jsx;
const HeadingComponentOne = () => {
  return (
    <>
      <h1>HeadingComponentOne</h1>
      <h3> description </h3>
    </>
  );
};

const HeadingComponentTwo = () => {
  return (
    <>
      <HeadingComponentOne />
      <h4>here: {reactElement}</h4>
      <h1>HeadingComponentTwo</h1>
      <h3> description </h3>
    </>
  );
};

const rootReactComponent = ReactDOM.createRoot(
  document.getElementById("root-reactComponent")
);
rootReactComponent.render(<HeadingComponentTwo />);

// React.createElement => ReactElement - JS Object => rendering using html element HTMLElement(render);
const reactElement = React.createElement(
  "div",
  { id: "heading" },
  "hello world using createElement and createRoot!"
); // type object
const rootCreateElement = ReactDOM.createRoot(
  document.getElementById("root-createElement")
); // type object

// console.log(reactElement);
// console.log(rootCreateElement);

// render - does the conversion of js object into react elements
rootCreateElement.render(reactElement);
