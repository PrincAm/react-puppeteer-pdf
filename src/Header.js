import React from "react";

const Header = () => (
  <div
    className="header-pdf"
    style={{
      fontFamily: "Helvetica Neue",
      fontSize: "12px",
      color: "#d3d3d3",
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}
  >
    <span />
    <div>
      Detailed Report <span class="date"></span>
    </div>
    <div className="header-pdfPaging">
      <span class="pageNumber"></span> of <span class="totalPages"></span>
    </div>
  </div>
);

export default Header;
