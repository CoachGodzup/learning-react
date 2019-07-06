import React, { Component } from 'react'

export default class UpdatableChild extends Component {

  /* The way I managed to work */
  constructor(props) {
    super(props);
    this.state.name = props.name;
    this.nameHandler = props.nameHandler;
  }

  state = {
    name: 'Default unused name'
  }
  
  nameHandler = () => {}

  render() {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.props.nameHandler} />
        <p>Children: His name is {this.props.name}</p>
      </div>
    )
  }

}
