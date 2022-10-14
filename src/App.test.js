import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
   
  });

  it("renders Search text", () => {    
    render(<App />);   
    expect(screen.getByText(/search:/i)).toBeInTheDocument();
  });

  
  it("renders buttton", () => {    
    render(<App />);    
    // screen.debug();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search text/i)).toBeInTheDocument();
    expect(screen.getByAltText('sun')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123')).toBeInTheDocument();

  });
});
