import { shallow } from "enzyme";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import CardBreakingbad from "../../screen/CardBreakingbadScreen";
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");
describe("Pruebas para CardBreakingbadScreen", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
    });
  });
  test("debe renderizar correctamente", () => {
    useFetch.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    const wrapper = shallow(<CardBreakingbad />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de renderizar la informacion correctamente", () => {
    useFetch.mockReturnValue({
      data: [
        {
          name: "jherson",
          img: "algo.png",
          status: "billonario",
          birthday: "16/08/1999",
          category: "Jefe",
          nickname: "Retr0",
          occupation: ["Programador", "Dotero", "Streamer"],
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<CardBreakingbad />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find("Card").prop("name")).toBe("jherson");
  });
});
