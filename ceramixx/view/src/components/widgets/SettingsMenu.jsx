import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'
import MenuButton from './MenuButton'

export default class SettingsMenu extends React.Component {
  constructor(...props) {
    super(...props)

    this.state = {
      workspace: true,
      placement: false,
      slicer: false,
      customCode: false
    }

    this.handleClickWorkspace = this.handleClick.bind(this, 'workspace')
    this.handleClickPlacement = this.handleClick.bind(this, 'placement')
    this.handleClickCustomCode = this.handleClick.bind(this, 'customCode')
    this.handleClickSlicer = this.handleClick.bind(this, 'slicer')
  }

  resetActiveStates() {
    this.setState({
      workspace: false,
      placement: false,
      slicer: false,
      customCode: false
    })
  }

  handleClick(selectedButton) {
    this.resetActiveStates()

    switch (selectedButton) {
      case 'workspace': {
        this.setState({workspace: true})
        break
      }
      case 'placement': {
        this.setState({placement: true})
        break
      }
      case 'slicer': {
        this.setState({slicer: true})
        break
      }
      case 'customCode': {
        this.setState({customCode: true})
        break
      }
    }
  }

  render() {
    return (
      <ButtonToolbar className="settings-menu">
        <MenuButton
          buttonText="Workspace"
          isActive={this.state.workspace}
          onClick={this.handleClickWorkspace.bind(this)}
        />
        <MenuButton
          buttonText="Placement"
          isActive={this.state.placement}
          onClick={this.handleClickPlacement.bind(this)}
        />
        <MenuButton
          buttonText="Slicer"
          isActive={this.state.slicer}
          onClick={this.handleClickSlicer.bind(this)}
        />
        <MenuButton
          buttonText="Custom Code"
          isActive={this.state.customCode}
          onClick={this.handleClickCustomCode.bind(this)}
        />
      </ButtonToolbar>
    )
  }
}
