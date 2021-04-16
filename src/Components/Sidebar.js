import React from "react";
import logo from "../img/soundshare.png";

const Sidebar = ({ sidebarItems }) => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="sidebar">
      <img src={logo} alt="soundshare logo" />
      <ul>
        {sidebarItems.map((item, index) => {
          return (
            <li key={index} className="active">
              <a href={item.name}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
