import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const initialState = {
    tabs: {items: [
      {text: 'Tab 1', index: 10},
      {text: 'Tab 2', index: 22},
      {text: 'Another tab', index: 27}
    ]},
    sidebar: {
      items:[
        { text: 'Menu 1', index: '1', isLeaf: false },
        { text: 'sub 1-0', index: '1.0', isLeaf: true },
        { text: 'sub 1-1', index: '1.1', isLeaf: false },
        { text: 'sub 1-1-5', index: '1.1.5', isLeaf: true },
        { text: 'sub 1-1-3', index: '1.1.3', isLeaf: true },
        { text: 'sub 1-18', index: '1.18', isLeaf: true },
        { text: 'Menu 37', index: '37', isLeaf: true },
        { text: 'Menu 70', index: '70', isLeaf: false },
        { text: 'Menu 55', index: '55', isLeaf: true }
      ],
      selectedItemId: '1',
      isPanelCollapsed: false
    }
};

const store = configureStore(
  initialState
);

render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
