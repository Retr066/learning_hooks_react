import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";
describe("Pruebas para el custom hook de useForm", () => {
  const initialState = {
    name: "jherson",
    email: "jherson@gmail.com",
  };
  test("debe regresar el valor por defecto", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [formValues, handleInputsChange, resetState] = result.current;
    expect(formValues).toEqual(initialState);
    expect(typeof handleInputsChange).toBe("function");
    expect(typeof resetState).toBe("function");
  });
  test("debe cambiar el valor del formulario solo el name", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputsChange] = result.current;
    act(() => {
      handleInputsChange({
        target: {
          name: "name",
          value: "sulcaca",
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialState, name: "sulcaca" });
  });
  test("debe re-establecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputsChange, resetState] = result.current;
    act(() => {
      handleInputsChange({
        target: {
          name: "name",
          value: "sulcaca",
        },
      });
      resetState();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialState);
  });
});
