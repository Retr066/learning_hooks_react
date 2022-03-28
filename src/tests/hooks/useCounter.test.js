import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";
describe("Pruebas para mi custom hook useCounter", () => {
  test("Debe retornar los valore por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, decrement, reset, counter } = result.current;
    expect(counter).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("Debe tener el counter en 100", () => {
    const valor = 100;
    const { result } = renderHook(() => useCounter(valor));
    const { increment, decrement, reset, counter } = result.current;
    expect(counter).toBe(valor);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe incrementar el counter en 1 y retornar 101", () => {
    const valor = 100;
    const { result } = renderHook(() => useCounter(valor));
    const { increment } = result.current;

    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(valor + 1);
  });

  test("Debe disminuir el counter en 1 y retornar 99", () => {
    const valor = 100;
    const { result } = renderHook(() => useCounter(valor));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(valor - 1);
  });

  test("Debe resetar el valor y retornar el valor por defecto o el que se haya pasado", () => {
    const valor = 100;
    const { result } = renderHook(() => useCounter(valor));
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(valor);
  });
});
