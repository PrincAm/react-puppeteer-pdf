import React from "react";
import Report from "./Report";
import { renderHeaderToString } from "./Header";
import { renderFooterToString } from "./Footer";

const App = () => {
  const handlePdfPrint = async () => {
    try {
      const puppeteerParams = {
        headerTemplate: renderHeaderToString(),
        footerTemplate: renderFooterToString(),
        margin: {
          top: 40,
          bottom: 130
        }
      };
      await fetch("http://localhost:8080/pdf", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(puppeteerParams)
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <div className="app-menu">
        Not visible in Print{" "}
        <div>
          <button onClick={handlePdfPrint}>Print it out!</button>
        </div>
      </div>
      <Report />
      <div className="app-footer">Not visible in Print</div>
    </div>
  );
};

export default App;
