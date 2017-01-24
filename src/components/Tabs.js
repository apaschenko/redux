

import React, { Component } from 'react'

export default class Tabs extends Component {

  constructor(props) {
   // super(props);

    super({
      /*items: [
        {text: 'Tab 1', index: 10},
        {text: 'Tab 2', index: 22},
        {text: 'Another tab', index: 27}
      ]
   */ });
  }

  onTabClick( event ) {
    alert ( event.target.innerHTML );
  }

  onAddClick( event ) {
    alert ( event.target.innerHTML );
  }

  renderItems () {
    //return <p>{JSON.stringify(this.props.items)}</p>

    return this.props.items.map( (item) => {
       return (
         <button key={item.index} className='tabs-btn' onClick={this.onTabClick}>{item.text}</button>
       )
    })
  }
//
  render() {
    //const { tabs } = this.props
    return <div className='tabs-main'>
      {this.renderItems()}
      <button className='tabs-btn' onClick={this.onAddClick}>+</button>
    </div>
  }
}

