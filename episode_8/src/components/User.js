// rendering a component in functional-based-component
// - mounting, involving, calling that functional component
// delcare state - usestate()
// to set the states - setState()

import { useState } from "react";

const User = ({ name, location, contact, data }) => {
  // declarating state variables
  const [apiData, sestApiData] = useState(data);
  const [count, setCount] = useState(0);
  // console.log(apiData);
  return (
    <>
      <div className="user-items">
        <h1>username - {data?.login}</h1>
        <h1>created at - {data?.created_at}</h1>
        <h1>follwing - {data?.following}</h1>
        <h1>followrers - {data?.followrers}</h1>
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </>
  );
};

export default User;
