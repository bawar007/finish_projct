import React from "react";

import StoreProvider from "./store/StoreProvider";

import "./styles/App.scss";

const App = () => (
  <StoreProvider>
    <header>Hello Word</header>
  </StoreProvider>
);

export default App;
