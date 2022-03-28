import { demoTodos } from "../fixtures/demoTodos";
import "@testing-library/jest-dom";
import GroupTodo from "../../components/GroupTodo";
import { shallow } from "enzyme";
describe("Pruebas para el componente GroupTodo", () => {
  const dispatch = jest.fn();

  let wrapper = shallow(<GroupTodo todos={demoTodos} dispatch={dispatch} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<GroupTodo todos={demoTodos} dispatch={dispatch} />);
  });

  test("debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe tener los elementos respectivos del array (2)", () => {
    expect(wrapper.find("Todo").length).toBe(demoTodos.length);
    expect(wrapper.find("Todo").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
