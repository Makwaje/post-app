// 1. CREATE A CONTEXT

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");

  return context;
}

export { UserProvider, useUser };
