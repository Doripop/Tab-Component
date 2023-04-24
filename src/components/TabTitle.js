import React, { useState } from "react";
import style from "./Tabs.scss";
import classNames from "classnames";

const TabTitle = ({ title, setSelectedTab, index, active }) => {
  const cn = classNames.bind(style);
  return (
    <div className={cn("tab-list", active === index && "active")}>
      <button
        onClick={() => {
          setSelectedTab(index);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default TabTitle;
