import React from "react";
import {render, screen} from "@testing-library/react";
import Form from "./form";
import userEvent from "@testing-library/user-event"

describe(`Test Form component`, () => {
  it(`Form component should render correctly`, () => {
    render(
          <Form />
  );
  expect(screen.getByText(/Что уменьшаем?/i)).toBeInTheDocument();
});
it(`Form component should call callback when user click on button`, () => {
  const onButtonClick = jest.fn();
  render(
    <Form
      onButtonClick={onButtonClick}
    />
);

userEvent.click(screen.getByTestId(`close`));
expect(onButtonClick).toBeCalled();
});
});
