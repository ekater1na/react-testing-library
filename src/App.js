import React from "react";
import FireEvent from "./components/FireEvent/FireEvent";
import SearchApp from "./components/Search/Search";
import SearchCriteria from "./components/SearchCriteria/SearchCriteria";

const App = () => {
  return (
    <div data-testid="app">
      <SearchApp />
      <SearchCriteria />
      <FireEvent />
    </div>
  );
};

export default App;
