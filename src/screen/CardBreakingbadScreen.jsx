import Alert from "../components/Alert";
import Card from "../components/Card";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

function CardBreakingbad() {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/characters/${counter}`
  );
  if (counter === 0) reset();
  const props = data ? data[0] : { undefined };
  return (
    <div className="container">
      <h2>Form con Custom Hooks</h2>
      <hr />
      {loading ? (
        <Alert />
      ) : (
        <>
          <div className="row">
            <div className="col-6">
              <Card {...props} />
            </div>
            <div className="col-6">
              <button className="btn btn-primary me-1" onClick={decrement}>
                Anterior
              </button>
              <button className="btn btn-primary" onClick={increment}>
                Siguiente
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CardBreakingbad;
