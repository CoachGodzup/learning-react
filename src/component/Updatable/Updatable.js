import React, { Component } from 'react'
import UpdatableChild from './UpdatableChild'
import UpdatableChildWithMapStateToProps from './UpdatableChildWithMapStateToProps'

export default class Updatable extends Component {

  state = {
    name: 'UpdatFather'
  }

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>This is an updatable component</h2>
        <p>Father: His name is {this.state.name}</p>

        <UpdatableChild name={this.state.name} nameHandler={this.nameHandler}></UpdatableChild>
        <UpdatableChildWithMapStateToProps name={this.state.name} nameHandler={this.nameHandler}></UpdatableChildWithMapStateToProps>

      </div>
    )
  }
}
