import React, { Component } from 'react'
import IfComponent from './IfComponent'
import ForComponent from './ForComponent'

const LOWER_THRESHOLD = 0;
const UPPER_THRESHOLD = 500;


export default class ConditionalRendering extends Component {

  state = {
    if: false,
    for: 3
  }

  toggleComponent = () => {
    this.setState({
      if: !this.state.if
    });
  }

  changeList = (event) => {
    /*just a bit of thresholding, to not blow computers up in useless rendering */
    const value = event.target.value < LOWER_THRESHOLD ? LOWER_THRESHOLD : 
      ( event.target.value > UPPER_THRESHOLD ? UPPER_THRESHOLD : 
        event.target.value)

    this.setState({
      for: value
    })
  }

  getIfComponent = () => {
    return this.state.if ? <IfComponent /> : '';
  }

  getForComponent = () => {
    let listComponents = [];
    for(let i=0; i< this.state.for; i++) {
      listComponents.push(<ForComponent></ForComponent>);
    }
    return <div>{listComponents}</div>
  }

  render() {
    const showComponent = this.getIfComponent();
    const iterableComponent = this.getForComponent();

    return (
      <div>
        <h2>This is a conditional rendering component</h2>
        <div>
          <label for="showComponent">Show Component?
            <input name="showComponent" type="checkbox" value={this.state.if} onChange={this.toggleComponent}></input>
            {showComponent}
          </label>
        </div>
        <div>
          <label for="iterableComponent">How many times do you want to repeat the component?</label>
          <input type="number" value={this.state.for} onChange={this.changeList}></input>
          {iterableComponent}
        </div>
      </div>
    )
  }
}
