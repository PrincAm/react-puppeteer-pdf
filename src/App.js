import React from "react";
import Report from "./Report";

const App = () => (
  <div className="app">
    <div className="app-menu">Not visible in Print</div>
    <Report />
    <div className="app-footer">Not visible in Print</div>
  </div>
);

export default App;
