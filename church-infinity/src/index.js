import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TimeAgo from "javascript-time-ago";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
