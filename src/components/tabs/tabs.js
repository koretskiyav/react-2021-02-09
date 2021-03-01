import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTabId, setActiveTab] = useState(tabs[0].entityId);

  const activeTab = tabs.filter((tab) => tab.entityId === activeTabId)[0] || {};

  const onClick = (entityId) => {
    setActiveTab(entityId);
  };

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, entityId }) => (
          <span
            key={title}
            className={cn(styles.tab, {
              [styles.active]: entityId === activeTabId,
            })}
            onClick={() => onClick(entityId)}
          >
            {title}
          </span>
        ))}
      </div>
      {activeTab.content}
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
