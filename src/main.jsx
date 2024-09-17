import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import MainLayout from "./layouts/mainLayout";

import {
  BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
