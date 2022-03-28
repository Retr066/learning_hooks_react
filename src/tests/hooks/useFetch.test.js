import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("Pruebas para useFetch", () => {
  test("debe retornar el valor por defecto", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/characters/1")
    );
    const { data, loading, error } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Tener la info deseado,loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/characters/1")
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test("Debe manejar el error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apid/users?page=2")
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe("Algo ha pasado sulca medica");
  });
});
