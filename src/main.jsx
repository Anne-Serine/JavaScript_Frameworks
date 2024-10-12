import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import MainLayout from "./mainLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <MainLayout />
  </BrowserRouter>
);
