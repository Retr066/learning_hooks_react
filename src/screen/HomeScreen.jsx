import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function HomeScreen() {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <hr />
      <div
        className="btn btn-outline-dark"
        onClick={() =>
          setUser({
            id: 123,
            user: "jherson lopez perez",
          })
        }
      >
        Logearme
      </div>
    </div>
  );
}
