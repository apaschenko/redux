

import React, { Component } from 'react'

export default class SidebarToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    }
  }

  onToggleClick() {
    this.props.sidebarToggle();
  }

  render() {
    //const { tabs } = this.props
    return <button className='sidebar-toggle-btn' onClick={::this.onToggleClick}>
      {this.props.isSidebarCollapsed? '>':'<'}
    </button>

  }
}

