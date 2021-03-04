import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTab] = useState(0);
  const { content } = tabs[activeTab];
  const url = useRouteMatch().url;

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }) => (
          <NavLink
            key={title}
            className={styles.tab}
            activeClassName={styles.active}
            to={url + `/${title.toLowerCase()}`}
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
