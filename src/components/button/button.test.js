import React from "react";
import {render, screen} from "@testing-library/react";
import Button from "./button";
import userEvent from "@testing-library/user-event";

describe(`Test Button component`, () => {
  it(`Button component should render correctly`, () => {
    render(
          <Button />
  );
  expect(screen.getByText(/Налоговый вычет/i)).toBeInTheDocument();
});
  it(`Button component should call callback when user click on button`, () => {
    const onButtonClick = jest.fn();
    render(
      <Button
        onButtonClick={onButtonClick}
      />
  );

  userEvent.click(screen.getByRole(`button`));
  expect(onButtonClick).toBeCalled();
});
});
