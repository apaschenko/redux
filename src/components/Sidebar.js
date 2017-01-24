
import React, { Component } from 'react'
import _ from 'lodash'

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = { treeOfExpandedItems: '' };
  }

  isItemToBeExpanded (index) {
    if (index.length === 0) {
      return true;
    } else {
      return (this.state.treeOfExpandedItems.indexOf(index) === 0);
    }
  }

  clickOnItem( index ) {

    let treeOfExpandedItems;
    let isNowExpanded = this.isItemToBeExpanded(index);
    if (isNowExpanded) {
      treeOfExpandedItems = _.dropRight(index.split('.')).join('.');
    } else {
      treeOfExpandedItems = index;
    }
    this.setState({
      treeOfExpandedItems: treeOfExpandedItems
    });
    console.log('treeOfExpandedItems: '+treeOfExpandedItems);

    this.props.clickOnItem( index );
  }

  setMenuCSSClass (index) {
    return `menu-${Math.min( (index.match(/\./g) || []).length, 3)}`;
  }

  setItemVisibility (index, selectedItemId) {
    // item should be visible only if its parent is expanded or if it is a root item
    if ( this.isItemToBeExpanded(this.getParentItemId(index)) ) {
      return 'sidebar-btn';
    } else {
      return 'none';
    }
  }

  getParentItemId (index) {
    let indexComponents = index.split('.');
    indexComponents.pop();
    if (indexComponents.length > 0) {
      return indexComponents.join('.');
    } else {
      return '';
    }
  }

  renderItems () {
    let selectedId = this.props.sidebarData.selectedItemId;
    let sortedItems = _.sortBy(this.props.sidebarData.items, 'index');
    return sortedItems.map( (item ) => {
      let itemIndex = item.index;

      let itemText = <div className={this.setMenuCSSClass(itemIndex)}>{item.text}</div>;

      if (item.isLeaf) {
        return <button className={this.setItemVisibility(itemIndex, selectedId)} key={ itemIndex }  onClick={() => {::this.clickOnItem(itemIndex)}}>
          {itemText}
        </button>
      } else {
        if (this.isItemToBeExpanded(item.index)) {
          return <button className={this.setItemVisibility(itemIndex, selectedId)} key={ itemIndex } onClick={() => {this.clickOnItem.call(this, itemIndex)}}>
            {itemText}
            <img src='./images/arrow_up.png'/>
          </button>
        } else {
          return <button className={this.setItemVisibility(itemIndex, selectedId)} key={ itemIndex }  onClick={() => {this.clickOnItem.call(this, itemIndex)}}>
            {itemText}
            <img src='./images/arrow_down.png'/>
          </button>
        }
      }
    });
  }

  render() {
    console.log('Sidebar has been re-rendered');
    return <div className={this.props.sidebarData.isPanelCollapsed? 'none' : 'sidebar-main'}>
      <button className='sidebar-add-item-btn'>
        <div className='menu-add-item'>+ Add New Item</div>
      </button>
      {this.renderItems()}
    </div>
  }
}


