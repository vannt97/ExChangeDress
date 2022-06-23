import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
export default function TabContent() {
  const { data, isLoad } = useSelector((state) => state.ExChangeDressReducer);
  const renderTabPane = () => {
    if (isLoad) {
      return data.navPills.map((navtabPane, index) => {
        let showClass = navtabPane.type === "topclothes" ? "active" : "";
        return (
          <div
            className={`tab_pane ${showClass}`}
            id={navtabPane.type}
            key={index}
          >
            {data.tabPanes.map((item, indexTab) => {
              if (navtabPane.type === item.type) {
                return (
                  <div className="item" key={indexTab}>
                    <Item item={item} />
                  </div>
                );
              }
            })}
          </div>
        );
      });
    }
    return <div></div>;
  };
  return <div className="tab_content">{renderTabPane()}</div>;
}
