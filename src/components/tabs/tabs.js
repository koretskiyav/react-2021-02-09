import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';
import { NavLink } from "react-router-dom";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const { content } = tabs[activeTab];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, path }, index) => (
          <NavLink
            key={title}
            to={path}
            className={cn(styles.tab, { [styles.active]: index === activeTab })}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </NavLink>
        ))}
      {content}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
