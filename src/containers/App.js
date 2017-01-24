import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Tabs from '../components/Tabs'
import SidebarToggle from '../components/SidebarToggle'
import * as sidebarActions from '../actions/sidebarActions'
import * as tabsActions from '../actions/tabsActions'

class App extends Component {
  render() {
    console.log('App has been re-rendered')
    const { sidebar, tabs } = this.props;
    const { clickOnItem, sidebarToggle } = this.props.sidebarActions;

    return <div className='app-container'>
        <Sidebar sidebarData={sidebar} clickOnItem={ clickOnItem } />
        <div className='central-wrapper'>
          <div className='tabs-wrapper'>
            <SidebarToggle isSidebarCollapsed={ sidebar.isPanelCollapsed } sidebarToggle = { sidebarToggle } />
            <Tabs items={tabs.items} sidebarToggle={ sidebarToggle } />
          </div>
          <div className='content'> Content </div>
        </div>
    </div>
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps has been called')
  return {
    sidebar: state.sidebar,
    tabs: state.tabs
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispathToProps has been called')
  return {
    sidebarActions: bindActionCreators(sidebarActions, dispatch),
    tabsActions: bindActionCreators(tabsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
