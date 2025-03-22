import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

const Heading = () => {
  return (
    <>
      <h2>here</h2>
    </>
  );
};

root.render(<Heading />);
