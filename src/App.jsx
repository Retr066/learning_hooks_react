import { useState } from "react";
import { UserContext } from "./Context/UserContext";
import AppRoute from "./Routes/AppRoute";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRoute />
      </UserContext.Provider>
    </>
  );
}

export default App;
