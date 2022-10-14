import { render, screen } from "@testing-library/react";
import SearchApp from "./Search";

describe("Search", () => {

  it("renders Search text", () => {
    render(<SearchApp />);
    expect(screen.getByText(/search:/i)).toBeInTheDocument();
  });

  
    it("renders buttton", () => {
      render(<SearchApp />);
    // screen.debug();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search text/i)).toBeInTheDocument();
    expect(screen.getByAltText("sun")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});
