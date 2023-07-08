import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Main from "./components/Main";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <div>
      <CookiesProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
};

export default App;
