import React, { Component } from 'react'

export default class UpdatableChildWithMapStateToProps extends Component {
  
  /* the other way, that throws me a warning */

  props = {
    name: 'Default Unused Value',
    nameHandler: () => {}
  }

  mapStateToProps = (state) => {
    return {
      name: state.name,
      nameHandler: state.nameHandler
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.props.nameHandler} />
        <p>Children: His name is {this.props.name}</p>
      </div>
    )
  }

}
