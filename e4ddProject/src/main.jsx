import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import { TranslationProvider } from "react-google-multi-lang";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <TranslationProvider
  //   apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
  //   defaultLanguage="en"
  // >
  //   <App />
  // </TranslationProvider>
);
