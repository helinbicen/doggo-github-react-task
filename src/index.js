import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { StarredProvider } from "./context/StarredContext";
import store from "./store";

ReactDOM.render(
  <StarredProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StarredProvider>,
  document.getElementById("root")
);
