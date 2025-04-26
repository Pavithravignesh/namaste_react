import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>ErrorElement</h1>
      <h3>error status - {err.status}</h3>
      <h3>error text - {err.statusText}</h3>
      <h3>error data - {err.data}</h3>
      <h3>error message - {err.error.message}</h3>
    </>
  );
}

export default ErrorElement;
