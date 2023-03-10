import React from "react";
import ReactDOM from "react-dom";
import {StoreProvider} from "host/store";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <StoreProvider>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">Nav project</div>
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
