import { useContext } from "react";
import UserContext from "../../utils/context/userContext";

export const Footer = () => {

  const { loginUser } = useContext(UserContext);

  return (
    <>
      <h1>Footer</h1>
      <h1>{loginUser}</h1>
    </>
  );
};