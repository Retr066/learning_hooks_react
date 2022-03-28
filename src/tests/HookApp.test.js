import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Prueba de test para el componente de HookApp", () => {
  test("El componente HookApp se tiene que renderizar correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
