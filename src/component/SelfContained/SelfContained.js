import React, { Component } from 'react'

export default class SelfContained extends Component {

  state = {
    name: 'Rascal'
  }

  changeName = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>This is a self-contained component</h2>
        <p>His name is {this.state.name}</p>
        <input type="text" value={this.state.name} onChange={this.changeName} />
      </div>
    )
  }
}
