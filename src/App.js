import React from "react";
import Asynchronous from "./components/Asynchronous/Asynchronous";
import FireEvent from "./components/FireEvent/FireEvent";
import SearchApp from "./components/Search/Search";
import UserEventComponent from "./components/UserEvent/UserEvent";
import SearchCriteria from "./components/SearchCriteria/SearchCriteria";

const App = () => {
  return (
    <div data-testid="app">
      <SearchApp />
      <SearchCriteria />
      <FireEvent />
      <UserEventComponent />
      <Asynchronous/>
    </div>
  );
};

export default App;
