import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Mycomponents/Navbar";
import { Provider } from "./context/context";
import LenisProvideer from "./LenisProvider"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Navbar />

      
      <App />
    </Provider>
  </StrictMode>
);
