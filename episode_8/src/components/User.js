// rendering a component in functional-based-component
// - mounting, involving, calling that functional component
// delcare state - usestate()
// to set the states - setState()

import { useState } from "react";

const User = ({ name, location, contact }) => {
  // declarating state variables
  const [nameState, setNameState] = useState(name);
  const [locationState, setLocationState] = useState(location);
  const [contactState, setContactState] = useState(contact);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="user-items">
        <h1>username - {nameState}</h1>
        <h1>location - {locationState}</h1>
        <h1>contact - {contactState}</h1>
        <h1>count - {count}</h1>
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </>
  );
};

export default User;
