import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Mycomponents/Navbar";
import { Provider } from "./context/context";
import LenisProvideer from "./LenisProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
      
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
