import React from "react";
import { renderToString } from "react-dom/server";

const Header = () => (
  <div
    className="header-pdf"
    style={{
      fontFamily: "Helvetica Neue, Helvetica, Arial, Verdana, sans-serif",
      fontSize: "10px",
      color: "#d3d3d3",
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}
  >
    <span />
    <div>
      Detailed Report of <b>XYZ</b> - Prepared on{" "}
      <b>
        <span className="date" />
      </b>
    </div>
    <div style={{ marginRight: "30px" }}>
      <span className="pageNumber" /> of <span className="totalPages" />
    </div>
  </div>
);

export default Header;

export const renderHeaderToString = () => renderToString(<Header />);
