import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function About() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Cerrar Sesion</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <div className="btn btn-outline-primary" onClick={() => setUser({})}>
        Logaut
      </div>
    </>
  );
}
