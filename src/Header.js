import React from "react";

const Header = () => (
  <div
    className="header-pdf"
    style={{
      fontFamily: "Helvetica Neue",
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
        <span class="date"></span>
      </b>
    </div>
    <div style={{ marginRight: "30px" }}>
      <span class="pageNumber"></span> of <span class="totalPages"></span>
    </div>
  </div>
);

export default Header;
