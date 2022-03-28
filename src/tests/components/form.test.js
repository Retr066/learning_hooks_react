import { shallow } from "enzyme";
import Form from "../../components/Form";

describe("Pruebas en el componente de Form", () => {
  const dispatch = jest.fn();
  let wrapper = shallow(<Form dispatch={dispatch} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Form dispatch={dispatch} />);
  });

  test("debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("no debe llamar a la function handleFormSubmit", () => {
    const handleFormSubmit = wrapper.find("form").prop("onSubmit");
    handleFormSubmit({ preventDefault() {} });
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(dispatch).not.toHaveBeenCalled();
  });
  test("debe llamar ala function dispatch", () => {
    const title = "Jose";
    const desc = "hacer algo";

    wrapper.find("input").simulate("change", {
      target: {
        name: "title",
        value: title,
      },
    });
    wrapper
      .find("textarea")
      .simulate("change", { target: { name: "desc", value: desc } });
    const handleFormSubmit = wrapper.find("form").prop("onSubmit");
    handleFormSubmit({ preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(expect.any(Object));
    expect(wrapper.find("input").prop("value")).toBe("");
    expect(wrapper.find("textarea").prop("value")).toBe("");
  });
});
