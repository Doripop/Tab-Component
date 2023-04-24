import React, { useState } from "react";
import style from "./Tabs.scss";
import classNames from "classnames";
import TabTitle from "./TabTitle";

const cn = classNames.bind(style);

const Tab = ({ children, type }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cn("tabs-nav-wrap", type)}>
      <nav className={cn("tabs-nav")}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.title}
            index={index}
            setSelectedTab={setSelectedTab}
            active={selectedTab}
          />
        ))}
      </nav>
      <div className={cn("nav-bar")} style={{ "--bar": selectedTab }} />
      {children[selectedTab].children}
    </div>
  );
};

export default Tab;
