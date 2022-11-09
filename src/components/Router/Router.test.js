/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */
import { fireEvent } from "@testing-library/react";
import { RouterComponent, LocationDisplay, renderWithRouter } from "./Router";
import '@testing-library/jest-dom/extend-expect';


describe("React Router", () => {
    it("should render the home page", () => {
      // const history = createMemoryHistory();
      // const { container, getByTestId } = render(
      //   <Router history={history}>
      //     <RouterComponent />
      //   </Router>
      // );
      const { container, getByTestId } = renderWithRouter(<RouterComponent />);
      const navbar = getByTestId("navbar");
      const link = getByTestId("home-link");
      expect(container.innerHTML).toMatch("Home page");
      expect(navbar).toContainElement(link);
    });
  
    it("should navigate to the contact page", () => {
      // const history = createMemoryHistory();
      // const { container, getByTestId } = render(
      //   <Router history={history}>
      //     <RouterComponent />
      //   </Router>
      // );
      const { container, getByTestId } = renderWithRouter(<RouterComponent />);
      fireEvent.click(getByTestId("contact-link"));
      expect(container.innerHTML).toMatch("John Doe");
    });
  
    it("should navigate to error page if route is wrong", () => {
      // const history = createMemoryHistory();
      // history.push("/wrong-route");
      // const { container } = render(
      //   <Router history={history}>
      //     <RouterComponent />
      //   </Router>
      // );
      const { container } = renderWithRouter(<RouterComponent />, {
        route: "/wrong-route",
      });
      expect(container.innerHTML).toMatch("404 Error");
    });
  
    it("rendering a component that uses withRouter", () => {
      // const history = createMemoryHistory();
      // const route = "/some-route";
      // history.push(route);
      // const { getByTestId } = render(
      //   <Router history={history}>
      //     <LocationDisplay />
      //   </Router>
      // );
      const route = "/some-route";
      const { getByTestId } = renderWithRouter(<LocationDisplay />, { route });
      expect(getByTestId("location-display")).toHaveTextContent(route);
    });
  });