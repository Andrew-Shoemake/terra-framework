import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabContainer from './_TabContainer';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  activeTabKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onRequestActivate: PropTypes.func.isRequired,
};

const Tabs = ({
  id,
  activeTabKey,
  children,
  onRequestActivate,
  ...customProps
}) => {
  const workspacePortalsRef = useRef({});
  const workspaceLastKeyRef = useRef();
  const workspaceRef = useRef();

  React.useLayoutEffect(() => {
    const activeNode = workspacePortalsRef.current[activeTabKey];
    if (!workspaceRef.current || workspaceRef.current.contains(activeNode?.element)) {
      return;
    }
    if (workspaceLastKeyRef.current) {
      const lastNode = workspacePortalsRef.current[workspaceLastKeyRef.current].element;
      if (lastNode) {
        workspaceRef.current.removeChild(lastNode);
      }
    }

    if (activeNode?.element) {
      workspaceRef.current.appendChild(activeNode.element);
      workspaceLastKeyRef.current = activeTabKey;
    } else {
      workspaceLastKeyRef.current = undefined;
    }
  }, [activeTabKey]);

  const tabData = React.Children.map(children, child => {
    const tabId = `${id}-${child.props.tabKey}`;
    const panelId = `${tabId}-panel`
    return {
      id: tabId,
      associatedPanelId: panelId,
      label: child.props.label,
      icon: child.props.icon,
      count: child.props.count,
      isSelected: child.props.tabKey == activeTabKey,
      onSelect: onRequestActivate,
      metaData: child.props.metaData,
    };
  });

  const tabsClassNames = cx([
    'tabs',
    { 'body-fill': true },
    customProps.className,
  ]);
  
  return (
    <div
      {...customProps}
      id={id}
      className={tabsClassNames} 
      role="none"
    >
      <div className={cx('header')}>
        <TabContainer tabData={tabData} />
      </div>
      <div className={cx('body')} ref={workspaceRef}>
        {React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.tabKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `${id}-${child.props.tabKey}`;
            workspacePortalsRef.current[child.props.tabKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              key: child.props.tabKey,
              id: `${id}-${child.props.tabKey}`,
              isActive: child.props.tabKey === activeTabKey,
              portalElement,
            })
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = propTypes;

export default Tabs;
