/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import SearchCriteria from "./SearchCriteria";

describe("SearchCriteria", () => {
  it("renders Search text", () => {
    render(<SearchCriteria />);
    expect(screen.queryByText(/searches for react:/i)).toBeNull();
  });

  it("renders name text", async () => {
    render(<SearchCriteria />);
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    expect(screen.getByAltText(/sun/)).toHaveClass("image");
    expect(screen.getByLabelText(/search/i)).toBeRequired();
    expect(screen.getByLabelText(/search/i)).toBeEmpty();
    expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
  });
});
