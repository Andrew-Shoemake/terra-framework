import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import CollapsibleTabs from './_CollapsibleTabs';
import CollapsedTabs from './_CollapsedTabs';

const propTypes = {
  /**
   * Currently active Tabs.Pane components to be displayed.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
  /**
   * Tabs style. One of: `'modular-centered'`, `'modular-left-aligned'`, `'structural'`.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
  variant: PropTypes.oneOf(['modular-centered', 'modular-left-aligned', 'structural']),
  */
};

const TabBar = ({ children, onTruncationChange }) => {
  const [breakpoint, setBreakpoint] = useState(null);

  // NOTE: Hard-coding variant to structural until discussions have resolved around if we want modular tabs.
  const variant = 'structural';

  let tabs;
  if (breakpoint) {
    if (breakpoint === 'tiny') {
      tabs = (
        <CollapsedTabs
          onTruncationChange={onTruncationChange}
        >
          {children}
        </CollapsedTabs>
      );
    } else {
      tabs = (
        <CollapsibleTabs
          onTruncationChange={onTruncationChange}
          variant={variant}
        >
          {children}
        </CollapsibleTabs>
      );
    }
  }

  return (
    <ResponsiveElement onChange={value => setBreakpoint(value)}>
      {tabs}
    </ResponsiveElement>
  );
};

TabBar.propTypes = propTypes;

export default TabBar;
