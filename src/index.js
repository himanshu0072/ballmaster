import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Style/header.css";
import "./Style/gameHeading.css";
import "./Style/gameBody.css";
import "./Style/footer.css";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import GameHeading from "./components/GameHeading";
import Gamebody from "./components/Gamebody";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <GameHeading />
    <Gamebody />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
