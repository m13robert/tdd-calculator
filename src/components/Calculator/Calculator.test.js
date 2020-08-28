import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("Calculator", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display Component", () => {
    const fakeCallOperator = jest.fn();
    const fakeSetOperator = jest.fn();
    const fakeUpdateDisplay = jest.fn();

    expect(
      wrapper.containsAllMatchingElements([<Display displayValue={"0"} />])
    ).toEqual(true);
    expect(wrapper.find(Keypad).length).toEqual(1);
  });
});
