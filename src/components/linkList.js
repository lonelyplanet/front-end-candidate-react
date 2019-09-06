import React from "react";
import PropTypes from "prop-types";

import "./linkList.css";

const LinkList = ({ title, links }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      <ul className="list">
        {links.map(item => {
          return (
            <li key={item.href} className="item">
              <a href={item.href} className="link">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default LinkList;
