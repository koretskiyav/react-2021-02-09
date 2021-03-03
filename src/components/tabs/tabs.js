import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs , mode}) => {

  const currentTab = tabs.find((tab) => tab.path === mode);

  const { content } = currentTab === undefined ? tabs[0] : currentTab;
  const currentMode = mode === undefined ? 'menu' : mode;

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, restId, path }, index) => (
          <NavLink
            key={title}
            className={cn(styles.tab, { [styles.active]: path === currentMode })}
            to={`/restaurants/${restId}/${path}`}
          >
            {title}
          </NavLink>
        ))}
      </div>
      {content}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
