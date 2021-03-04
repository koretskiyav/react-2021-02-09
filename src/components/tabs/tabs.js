import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { content } = tabs[activeTab];
  const url = useRouteMatch().url;

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <NavLink
            key={title}
            onClick={() => setActiveTab(index)}
            className={styles.tab}
            activeClassName={styles.active}
            to={url + `/${title.toLowerCase()}`}
          >
            {title}
          </NavLink>
        ))}
      </div>
      <Route path={url + '/' + tabs[activeTab].title.toLowerCase()} render={() => content}/>
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
