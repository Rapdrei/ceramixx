import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  handleClick() {
    var value = !this.state.active
    this.setState({active: {value}})
  }

  render() {
    return (
      <Button
        className={this.state.active?
          "settings-button menu-button-active":
          "settings-button"}
        onClick={this.handleClick.bind(this)}
        >{this.props.buttonText}</Button>
    )
  }
}

export { MenuButton as default }
