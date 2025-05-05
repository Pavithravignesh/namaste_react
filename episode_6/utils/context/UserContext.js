import { createContext } from "react";

// 1. create user context
const UserContext = createContext({ loginUser: "default user" });

export default UserContext;