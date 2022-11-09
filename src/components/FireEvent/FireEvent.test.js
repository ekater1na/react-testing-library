/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import FireEvent from "./FireEvent";

describe("FireEvent", () => {
  it("renders input", async () => {
    render(<FireEvent />);
    await screen.findByText(/Logged in as/i);
    expect(screen.queryByText(/searches for react/i)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "React" },
    });
    expect(screen.getByText(/searches for react/i)).toBeInTheDocument();
  });
});

describe("Events", () => {
  it("checkbox click", async () => {
    const handleChange = jest.fn();
    const { container } = render(
      <input type="checkbox" onChange={handleChange} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toBeCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("input focus", async () => {
    const { getByTestId } = render(
        <input type="text" data-testid="simple-input" />
      );
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const input = getByTestId("simple-input");
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();

  });
});
