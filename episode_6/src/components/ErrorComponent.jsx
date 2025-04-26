import { useRouteError } from "react-router-dom";

const ErrorConponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Error</h1>
      <h3>Sopmething went wrong!!!!</h3>
      <h3>
        {err.status} - {err.statusText}
      </h3>
    </>
  );
};

export default ErrorConponent;
