import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/soundshare.png";

const Sidebar = ({ sidebarItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedNavList = sidebarItems.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <li key={index} onClick={() => onTitleClick(index)} className={active}>
        <Link to={item.path}>
          {/* <i class="fas fa-circle fa-xs" /> */}
          {/* <span className="bullet">•</span> */}
          <span className="itemName"> {item.name}</span>
        </Link>
      </li>
    );
  });

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={logo}
          alt="soundshare logo"
          onClick={() => onTitleClick(null)}
        />
      </Link>
      <ul>{renderedNavList}</ul>
    </div>
  );
};

export default Sidebar;
