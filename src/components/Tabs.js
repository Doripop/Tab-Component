import classNames from "classnames";
import React from "react";
import style from "./Tabs.scss";
import Tab from "./Tab";

const cn = classNames.bind(style);

const tabData = [
  {
    title: "tab1",
    children: (
      <div>
        <div>1 번</div>
        <div>1 번</div>
        <div>1 번</div>
      </div>
    ),
  },
  {
    title: "tab2",
    children: (
      <div>
        <div>2 번</div>
        <div>2 번</div>
        <div>2 번</div>
      </div>
    ),
  },
  {
    title: "tab3",
    children: (
      <div>
        <div>3 번</div>
        <div>3 번</div>
        <div>3 번</div>
      </div>
    ),
  },
  {
    title: "tab1",
    children: (
      <div>
        <div>1 번</div>
        <div>1 번</div>
        <div>1 번</div>
      </div>
    ),
  },
];

const Tabs = () => {
  return (
    <div className={cn("box")}>
      <div className={cn("in-box")}>
        <Tab children={tabData} type={"default"} />
        <Tab children={tabData} type={"full"} />
        <Tab children={tabData} type={"round"} />
      </div>
    </div>
  );
};

export default Tabs;
