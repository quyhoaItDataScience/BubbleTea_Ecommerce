import React from "react";
import "./copyright.scss";

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="copyright">
      created with 💗 by Quý Hòa @copyright {year}{" "}
    </div>
  );
};

export default Copyright;
