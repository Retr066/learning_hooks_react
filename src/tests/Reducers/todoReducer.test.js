import { todoReducer } from "../../reducers/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas para el todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("debe agregar un nuevo todo", () => {
    const newTodo = {
      id: 3,
      title: "Working in desarrollo Global",
      desc: "Desactive modals the landing page",
      completed: false,
    };
    const state = todoReducer(demoTodos, {
      type: "add",
      payload: newTodo,
    });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  test("debe Borrar el todo", () => {
    const state = todoReducer(demoTodos, {
      type: "delete",
      payload: 2,
    });
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });
  test("debe hacer el toogle del todo", () => {
    const state = todoReducer(demoTodos, {
      type: "toogle",
      payload: 1,
    });
    expect(state.length).toBe(2);
    expect(state[0].completed).toBe(false);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
