import { shallow } from "enzyme";
import Todo from "../../components/Todo";
import { demoTodos } from "../fixtures/demoTodos";
import "@testing-library/jest-dom";

describe("Pruebas para el componente de Todo", () => {
  const handleDelete = jest.fn();
  const handleToogleCompleted = jest.fn();
  let wrapper = shallow(
    <Todo
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToogleCompleted={handleToogleCompleted}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Todo
        todo={demoTodos[0]}
        handleDelete={handleDelete}
        handleToogleCompleted={handleToogleCompleted}
      />
    );
  });
  test("debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe llamar ala function handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe llamar ala function handleToogleCompleted", () => {
    wrapper.find("input").simulate("change");
    expect(handleToogleCompleted).toHaveBeenCalled();
    expect(handleToogleCompleted).toHaveBeenCalledTimes(1);
    expect(handleToogleCompleted).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe mostrar la description correctamente", () => {
    const text = wrapper.find("span").text().trim();
    expect(text).toBe("Study react hooks (useReducer)");
  });
  test("debe tener la clase text-decoration-line-through", () => {
    expect(wrapper.find("span").hasClass("text-decoration-line-through")).toBe(
      true
    );
  });
});
