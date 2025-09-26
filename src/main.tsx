import * as React from "react";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
