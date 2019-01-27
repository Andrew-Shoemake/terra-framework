import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ResizeObserver from 'resize-observer-polyfill';
import Table from 'terra-table';
import ContentContainer from 'terra-content-container';
import SelectableUtils from 'terra-table/lib/SelectableUtils';
import InfiniteUtils from './_InfiniteUtils';
import InfiniteContentRow from './_InfiniteContentRow';
import styles from './InfiniteTable.module.scss';

const cx = classNames.bind(styles);

// TODO: Update APi to match new table API.
// TODO: Determine header cell API.
const propTypes = {
  /**
   * The child table rows, of type InfiniteTable.TableRow, to be placed within the infinite table.
   * For further documentation of InfiniteTable.TableRow see terra-table's TableRow.
   */
  children: PropTypes.node,
  /**
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * This is questionable, I need at minimum a ref, potentially attributes on each
   * Could take an array of header cells
   * Could take a custom header
   * Might need to handle cloning
   */
  headerCellContent: PropTypes.array,
  /**
   * An indicator to be displayed when no children are yet present.
   */
  initialLoadingIndicator: PropTypes.element,
  /**
   * Determines whether or not the loading indicator is visible and if callbacks are triggered.
   */
  isFinishedLoading: PropTypes.bool,
  /**
   * Whether or not the table rows are selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not the rows should be zebra striped
   */
  isStriped: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * Callback trigger when new table rows are requested.
   */
  onRequestItems: PropTypes.func,
  /**
   * An indicator to be displayed at the end of the current loaded children.
   */
  progressiveLoadingIndicator: PropTypes.element,
  /**
   * An array of the currectly selected indexes.
   */
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  headerCellContent: [],
  isFinishedLoading: false,
  isSelectable: false,
  isStriped: false,
  selectedIndexes: [],
};

/**
 * Returns a TableRow sized according to the provided height to use as a spacer.
 * @param {number} height - Height to set on the TableRow.
 * @param {number} index - Index to use as part of the spacers key.
 */
const createSpacer = (height, index) => (
  <InfiniteContentRow
    className={cx(['spacer'])}
    style={{ height }}
    key={`infinite-spacer-${index}`}
    colSpan={3} // TODO: correct this
  />
);

const headerCellsFromContent = (cellContent, visibleWidths) => {
  const visible = [];
  const hidden = [];
  cellContent.forEach((content, index) => {
    const cellKey = `cell-${index}`;
    visible.push(
      <Table.HeaderCell
        key={cellKey}
        className={cx(['visible-header-cell'])}
        data-infinte-table-header-cell={index}
        content={content}
        style={{ width: visibleWidths[index] }}
      />,
    );
    hidden.push(
      <Table.HeaderCell
        key={cellKey}
        className={cx(['hidden-header'])}
        data-infinte-table-header-cell={index}
        aria-hidden="true"
        content={content}
      />,
    );
  });
  return { visible, hidden };
};

class InfiniteTable extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.enableListeners = this.enableListeners.bind(this);
    this.disableListeners = this.disableListeners.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.setVisibleNode = this.setVisibleNode.bind(this);
    this.updateItemCache = this.updateItemCache.bind(this);
    this.initializeItemCache = this.initializeItemCache.bind(this);
    this.updateScrollGroups = this.updateScrollGroups.bind(this);
    this.handleRenderCompletion = this.handleRenderCompletion.bind(this);
    this.handleResize = this.resizeDebounce(this.handleResize.bind(this));
    this.resetTimeout = this.resetTimeout.bind(this);
    this.wrapChild = this.wrapChild.bind(this);
    this.syncHeaders = this.syncHeaders.bind(this);
    this.setVisibleHeaderNode = this.setVisibleHeaderNode.bind(this);
    this.setHiddenHeaderNode = this.setHiddenHeaderNode.bind(this);

    this.visibleWidths = [];
    this.initializeItemCache(props);
  }

  componentDidMount() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.updateScrollGroups();
    this.handleRenderCompletion();
  }

  componentWillReceiveProps(newProps) {
    const newChildCount = React.Children.count(newProps.children);
    if (newChildCount > this.childCount) {
      this.lastChildIndex = this.childCount;
      this.loadingIndex += 1;
      this.updateItemCache(newProps);
    } else if (newChildCount < this.childCount) {
      this.initializeItemCache(newProps);
    } else {
      this.childrenArray = React.Children.toArray(newProps.children);
    }
  }

  componentDidUpdate() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.handleRenderCompletion();
  }

  componentWillUnmount() {
    this.disableListeners();
  }

  /**
   * Sets the html node of contentNode and if it was previously undefined trigger updateScrollGroups.
   * @param {node} node - Html node of the Table.
   */
  setContentNode(node) {
    const wasUndefined = !this.contentNode;
    this.contentNode = node;

    if (this.contentNode && wasUndefined) {
      this.updateScrollGroups();
    }
  }

  /**
   * Sets the html node of visible node, used to query visible component in tableRows.
   * @param {node} node - Html node of the Table.
   */
  setVisibleNode(node) {
    this.visibleNode = node;
  }

  /**
   * Sets the html node of visible node, used to query visible component in tableRows.
   * @param {node} node - Html node of the Table.
   */
  setVisibleHeaderNode(node) {
    this.visibleHeaderNode = node;
  }

  /**
   * Sets the html node of visible node, used to query visible component in tableRows.
   * @param {node} node - Html node of the Table.
   */
  setHiddenHeaderNode(node) {
    this.hiddenHeaderNode = node;
  }

  syncHeaders() {
    this.visibleWidths = [];

    const hiddenChildren = this.hiddenHeaderNode.querySelectorAll('[data-infinte-table-header-cell]');
    const visibleChildren = this.visibleHeaderNode.querySelectorAll('[data-infinte-table-header-cell]');
    const childLength = hiddenChildren.length;
    for (let i = 0; i < childLength; i += 1) {
      const hiddenChild = hiddenChildren[i];
      const width = hiddenChild.getBoundingClientRect().width;
      this.visibleWidths.push(width);

      const visibleChild = visibleChildren[i];
      visibleChild.style.width = width;
    }
  }

  /**
   * If a request for items has not been made and/or updates are not pending trigger onRequestItems.
   */
  triggerItemRequest() {
    if (!this.props.isFinishedLoading && !this.hasRequestedItems && !this.isRenderingNew && this.props.onRequestItems) {
      this.hasRequestedItems = true;
      this.props.onRequestItems();
    }
  }

  /**
   * Following a render reset newChildren values. If new items were render trigger an update calculation.
   */
  handleRenderCompletion() {
    this.syncHeaders();

    this.renderNewChildren = false;
    this.preventUpdate = false;
    this.lastChildIndex = this.childCount;
    if (this.isRenderingNew) {
      this.isRenderingNew = false;
      this.update(null, false, true); // Prevent from triggering an item request to avoid infinite loop of loading.
    } else if (this.contentNode && InfiniteUtils.shouldTriggerItemRequest(InfiniteUtils.getContentData(this.contentNode))) {
      this.triggerItemRequest();
    }
  }

  /**
   * Cache the value for the child count and convert the children props to an array.
   * @param {object} props - React element props.
   */
  updateItemCache(props) {
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);
    this.hasRequestedItems = false;
    this.renderNewChildren = true;
  }

  /**
   * Set the initial state of the virtualization values for the table.
   * @param {object} props - React element props.
   */
  initializeItemCache(props) {
    this.loadingIndex = 0;
    this.lastChildIndex = -1;
    this.itemsByIndex = [];
    this.scrollGroups = [];
    this.boundary = {
      topBoundryIndex: -1,
      hiddenTopHeight: -1,
      bottomBoundryIndex: -1,
      hiddenBottomHeight: -1,
    };
    this.updateItemCache(props);
  }

  /**
   * Adds a resize observer and scroll event listener to the contentNode.
   */
  enableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      this.handleResize(entries[0].contentRect);
    });
    this.resizeObserver.observe(this.contentNode);
    this.contentNode.addEventListener('scroll', this.update);
    this.listenersAdded = true;
  }

  /**
   * Removes the resize observer and scroll event listener from the contentNode.
   */
  disableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver.disconnect(this.contentNode);
    this.contentNode.removeEventListener('scroll', this.update);
    this.listenersAdded = false;
  }

  /**
   * Reset the timeout on this.timer.
   * @param {function} fn - The handleResize function.
   * @param {object} args - Arguments passed to the handleResize function.
   * @param {context} context - Javascript context.
   * @param {double} now - DOMHighResTimeStamp.
   */
  resetTimeout(fn, args, context, now) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.last = now;
      this.disableScroll = false;
      fn.apply(context, args);
    }, 250);
  }

  /**
   * Debounce the size event and prevent updates from scrolling.
   * @param {function} fn - The handleResize function.
   */
  resizeDebounce(fn) {
    return (...args) => {
      const context = this;
      const now = performance.now();
      if (this.last && now < this.last + 250) {
        this.resetTimeout(fn, args, context, now);
      } else {
        this.last = now;
        this.disableScroll = true;
        this.resetTimeout(fn, args, context, now);
      }
    };
  }

  /**
   * Triggers a height adjustment if the height or scroll height changes.
   */
  handleResize() {
    if (this.scrollHeight !== this.contentNode.scrollHeight || this.clientHeight !== this.contentNode.clientHeight) {
      this.adjustHeight();
    }
  }

  /**
   * Calculates the visible scroll items and if the hidden items have changed force an update.
   * @param {object} event - Browser DOM event.
   * @param {bool} ensureUpdate - Regardless of calculation ensure a forceUpdate occurs.
   * @param {bool} preventRequest - Should triggerItemRequest be prevented.
   */
  update(event, ensureUpdate, preventRequest) {
    if (!this.contentNode || this.disableScroll || this.preventUpdate) {
      return;
    }

    const contentData = InfiniteUtils.getContentData(this.contentNode);
    const hiddenItems = InfiniteUtils.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
    this.scrollHeight = contentData.scrollHeight;
    this.clientHeight = contentData.clientHeight;

    if (ensureUpdate || hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
      this.preventUpdate = true;
      this.boundary = {
        topBoundryIndex: hiddenItems.topHiddenItem.index,
        hiddenTopHeight: hiddenItems.topHiddenItem.height,
        bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
        hiddenBottomHeight: hiddenItems.bottomHiddenItem.height,
      };
      this.forceUpdate();
    }

    if (!preventRequest && InfiniteUtils.shouldTriggerItemRequest(contentData)) {
      this.triggerItemRequest();
    }
  }

  /**
   * Groups scroll items by height to reduce the number of refreshs that occur on scroll.
   */
  updateScrollGroups() {
    if (!this.contentNode) {
      return;
    }

    let groupHeight = 0;
    let groupIndex = 0;
    let captureOffsetTop = true;
    const maxGroupHeight = 1 * this.contentNode.clientHeight;
    this.scrollGroups = [];
    for (let i = 0; i < this.itemsByIndex.length; i += 1) {
      const item = this.itemsByIndex[i];
      if (this.scrollGroups[groupIndex] && item.height >= maxGroupHeight) {
        groupHeight = 0;
        groupIndex += 1;
        captureOffsetTop = true;
      }

      groupHeight += item.height;
      this.scrollGroups[groupIndex] = this.scrollGroups[groupIndex] || { items: [] };
      this.scrollGroups[groupIndex].items.push(i);
      this.scrollGroups[groupIndex].height = groupHeight;
      this.itemsByIndex[i].groupIndex = groupIndex;
      if (captureOffsetTop) {
        this.scrollGroups[groupIndex].offsetTop = this.itemsByIndex[i].offsetTop;
        captureOffsetTop = false;
      }

      if (groupHeight >= maxGroupHeight) {
        groupHeight = 0;
        groupIndex += 1;
        captureOffsetTop = true;
      }
    }
  }

  /**
   * Checks the boundingClientRect for the scroll item's height and offsetTop then caches it.
   * @param {node} node - The child node for the scroll item.
   * @param {number} index - Index of the child.
   */
  updateHeight(node, index) {
    if (node) {
      this.itemsByIndex[index] = this.itemsByIndex[index] || {};
      let updatedHeight = false;
      const newHeight = node.getBoundingClientRect().height;
      if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - newHeight) > 1) {
        this.itemsByIndex[index].height = newHeight;
        updatedHeight = true;
      }
      if (!this.itemsByIndex[index].offsetTop || Math.abs(this.itemsByIndex[index].offsetTop - node.offsetTop) > 1) {
        this.itemsByIndex[index].offsetTop = node.offsetTop;
      }
      if (this.itemsByIndex.length === this.childCount) {
        // TODO: maybe for efficient to allow for new items to just call last index adjust trailing items.
        if (!this.scrollGroups.length) {
          this.updateScrollGroups();
        } else if (updatedHeight) {
          this.adjustHeight();
        }
      }
    }
  }

  /**
   * Detects which scroll items are on the dom and reads the heights to see if resize has changed the boundClientRect.
   */
  adjustHeight() {
    if (this.visibleNode) {
      this.itemsByIndex.forEach((item, itemIndex) => {
        const scrollItemNode = this.visibleNode.querySelector(`[data-infinite-table-index="${itemIndex}"]`);
        if (scrollItemNode) {
          const newHeight = scrollItemNode.getBoundingClientRect().height;
          if (!this.itemsByIndex[itemIndex].height || Math.abs(newHeight - this.itemsByIndex[itemIndex].height) > 1) {
            this.itemsByIndex[itemIndex].height = newHeight;
          }
          if (!this.itemsByIndex[itemIndex].offsetTop || Math.abs(this.itemsByIndex[itemIndex].offsetTop - scrollItemNode.offsetTop) > 1) {
            this.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;
          }
          this.adjustTrailingItems(itemIndex);
        }
      });

      // needs to update offset tops of every other save
      this.updateScrollGroups();
      this.boundary = {
        topBoundryIndex: -1,
        hiddenTopHeight: -1,
        bottomBoundryIndex: -1,
        hiddenBottomHeight: -1,
      };
      this.update(null, true);
    }
  }

  /**
   * Updates the offsetTop of scroll items following the element that adjusted it's height.
   * @param {number} index - Index of the scroll item that had adjusted it's height.
   */
  adjustTrailingItems(index) {
    let lastTop = this.itemsByIndex[index].offsetTop;
    let lastHeight = this.itemsByIndex[index].height;
    for (let i = index + 1; i < this.itemsByIndex.length; i += 1) {
      lastTop += lastHeight;
      lastHeight = this.itemsByIndex[i].height;
      this.itemsByIndex[i].offsetTop = lastTop;
    }
  }

  /**
   * Clones the child element with new props for selection, refCallback,  and data attributes.
   * @param {element} child - React child element.
   * @param {number} index - Index of the child element.
   */
  wrapChild(child, index) {
    const wrappedCallBack = (node) => {
      this.updateHeight(node, index);
      if (child.props.refCallback) {
        child.props.refCallback(node);
      }
    };

    let newProps = {};
    if (this.props.isSelectable) {
      const wrappedOnClick = SelectableUtils.wrappedOnClickForRow(child, index, this.props.onChange);
      const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForRow(child, index, this.props.onChange);
      newProps = SelectableUtils.newPropsForRow(child, index, wrappedOnClick, wrappedOnKeyDown, this.props.selectedIndexes, this.props.disableUnselectedItems);
    }

    newProps.refCallback = wrappedCallBack;
    newProps['data-infinite-table-index'] = index;
    newProps.style = child.props.style ? Object.assign({}, child.props.style, { overflow: 'hidden' }) : { overflow: 'hidden' };
    return React.cloneElement(child, newProps);
  }

  render() {
    const {
      children,
      disableUnselectedItems,
      headerCellContent,
      initialLoadingIndicator,
      isFinishedLoading,
      isSelectable,
      isStriped,
      onRequestItems,
      progressiveLoadingIndicator,
      selectedIndexes,
      ...customProps
    } = this.props;
    // TODO: Initial load hide the visible header and rows until a measurement can be taken from the hidden header.

    // TODO: May need to selectively add an absolutely positioned invisible row to account for striping.
    // TODO: Account for striping offset caused by the spacer.
    const topSpacer = createSpacer(`${this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0}px`, 0);
    const bottomSpacer = createSpacer(`${this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0}px`, 1);

    let loadingSpinner;
    let fullLoadingSpinner;

    if (!isFinishedLoading) {
      if (this.childCount > 0) {
        loadingSpinner = (
          <InfiniteContentRow
            content={progressiveLoadingIndicator}
            key={`infinite-spinner-row-${this.loadingIndex}`}
            colSpan={3} // TODO: correct this with either counting header cells or taking prop.
          />
        );
      } else {
        // TODO: Switch from array to paranthesis.
        fullLoadingSpinner = [
          <div
            key="infinite-spinner-full"
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            {initialLoadingIndicator}
          </div>,
        ];
      }
    }

    let newChildren;
    let visibleChildren;

    if (!fullLoadingSpinner) {
      let upperChildIndex = this.lastChildIndex;
      if ((!this.scrollGroups.length && this.lastChildIndex <= 0) || !this.renderNewChildren) {
        upperChildIndex = this.childCount;
      } else {
        // TODO: Consume new table API>
        newChildren = (
          <Table {...customProps} className={cx(['infinite-hidden'])}>
            <Table.Rows>
              {InfiniteUtils.getNewChildren(this.lastChildIndex, this.childrenArray, this.wrapChild)}
            </Table.Rows>
          </Table>
        );
        this.isRenderingNew = true;
      }
      visibleChildren = InfiniteUtils.getVisibleChildren(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);
    }

    const headerCells = headerCellsFromContent(headerCellContent, this.visibleWidths);

    // TODO: Consume new table API>
    // TODO: Determine if click and focus should be allowed. If so, require a new key for sorting.
    const visibleHeader = (
      <Table>
        <Table.Header refCallback={this.setVisibleHeaderNode}>
          {headerCells.visible}
        </Table.Header>
      </Table>
    );

    // TODO: Add resize observers to sync with each header cell.
    const hiddenHeader = (
      <Table.Header className={cx(['hidden-header'])} aria-hidden="true" refCallback={this.setHiddenHeaderNode}>
        {headerCells.hidden}
      </Table.Header>
    );

    let rowContent = [topSpacer];
    if (visibleChildren) { rowContent = rowContent.concat(visibleChildren); }
    rowContent.push(bottomSpacer);
    if (loadingSpinner) { rowContent.push(loadingSpinner); }

    // TODO: Consume new table API>
    // TODO: Move refCallback to table itself.
    return (
      <ContentContainer
        header={visibleHeader}
        fill
        scrollRefCallback={this.setContentNode}
      >
        {fullLoadingSpinner}
        <Table {...customProps} className={cx(['infinite-table', customProps.className])}>
          {hiddenHeader}
          <Table.Rows refCallback={this.setVisibleNode}>
            {rowContent}
          </Table.Rows>
        </Table>
        {newChildren}
      </ContentContainer>
    );
  }
}

InfiniteTable.propTypes = propTypes;
InfiniteTable.defaultProps = defaultProps;
InfiniteTable.Rows = Table.Rows;
InfiniteTable.Header = Table.Header;
InfiniteTable.HeaderCell = Table.HeaderCell;
InfiniteTable.Row = Table.Row;
InfiniteTable.Cell = Table.Cell;
InfiniteTable.Subheader = Table.Subheader;

export default InfiniteTable;
