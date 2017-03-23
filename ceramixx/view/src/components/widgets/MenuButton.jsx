import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  handleClick() {
    var value = !this.state.active
    this.setState({active: value})
  }

  render() {
    return (
      <Button
        bsStyle={this.state.active? "success" : "default"}
        className={"settings-button"}
        onClick={this.handleClick.bind(this)}
        >{this.props.buttonText}</Button>
    )
  }
}
