import React from "react";
import { useSelector } from "react-redux";

export default function NavTabs(props) {
  const { data, isLoad } = useSelector((state) => state.ExChangeDressReducer);
  const handlerSwitch = (e) => {
    let { name } = e.target;
    let tab_pane = document.getElementById(name);
    let activeClasses = document.querySelectorAll(".content__left .active");
    tab_pane.classList.add("active");
    e.target.classList.add("active");
    for (let i = 0; i < activeClasses.length; i++) {
      activeClasses[i].classList.remove("active");
    }
  };
  const renderNav = () => {
    if (isLoad) {
      return data.navPills.map((nav, index) => {
        let activeClass = nav.type === "topclothes" ? "active" : "";
        return (
          <li className="nav-item" key={index}>
            <button
              onClick={handlerSwitch}
              name={nav.type}
              className={activeClass}
            >
              {nav.showName}
            </button>
          </li>
        );
      });
    }
    return <div></div>;
  };
  return <ul className="navbar">{renderNav()}</ul>;
}
