import React from "react";
import Header from "./Header";
import Footer, { renderFooterToString } from "./Footer";
import Body, { renderBodyToString } from "./Body";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
