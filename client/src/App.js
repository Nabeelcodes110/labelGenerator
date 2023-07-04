import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
