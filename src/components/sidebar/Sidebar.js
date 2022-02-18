import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ navData, openSidebar, toggleSidebar }) => {
  return (
    <section className={`sidebar ${openSidebar ? "active" : null}`}>
      <CloseIcon className="sidebar__close-icon" onClick={toggleSidebar} />
      {navData.map((item, idx) => {
        return (
          <Link
            to={item.to}
            key={idx}
            className="sidebar__link"
            onClick={toggleSidebar}
          >
            {item.name}
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;
