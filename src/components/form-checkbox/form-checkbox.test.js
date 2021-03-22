import React from "react";
import {render, screen} from "@testing-library/react";
import FormCheckbox from "./form-checkbox";

describe(`Test FormCheckbox component`, () => {
  it(`FormCheckbox component should render correctly`, () => {
    const value = [78000, 78000, 78000, 26000];
    render(
          <FormCheckbox
            value={value}
          />
  );
  expect(screen.getByText(/Итого можете внести в качестве досрочных:/i)).toBeInTheDocument();
});
});
