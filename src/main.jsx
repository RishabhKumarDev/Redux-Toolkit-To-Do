import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // provider is what helps components get the values/data from store i.e the one we created;
//"Provider takes a prop called store. You pass your actual Redux store object to it. That store is what holds all slices and reducers you defined in your app."
// store is like a key that ask for referance of the store(that have all the slices);
// so provider connects React components with the help of it's key "state" where we pass the store we created.
import { store } from "./app/store.jsx"; // store the one we create that hold all the slices/reducers;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
