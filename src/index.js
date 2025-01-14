import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import App from "./App";
import store from "./Redux/store"; // Import the store

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    {" "}
    {/* Wrap your App component with Provider */}
    <App />
  </Provider>
);


