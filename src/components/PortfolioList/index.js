import React from "react";
import style from "./PortfolioList.module.css";

const PortfolioList = ({ title, selected, setSelected, id }) => {
  return (
    <li
      className={selected ? `${style.active}` : `${style.portfoliolist}`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
