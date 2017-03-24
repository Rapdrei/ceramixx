import React, { Component } from 'react'

import { CenterMenuButton, LeftMenuButton, RightMenuButton} from './MenuButton'

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
      <div className="settings-menu">
        <LeftMenuButton
          buttonText="Workspace"
          className="outer-left-settings-button"
          active={true}
          onClick={this.handleClickWorkspace.bind(this)}
        />
        <CenterMenuButton
          buttonText="Placement"
          onClick={this.handleClickPlacement.bind(this)}
        />
        <CenterMenuButton
          buttonText="Slicer"
          onClick={this.handleClickSlicer.bind(this)}
        />
        <RightMenuButton
          buttonText="Code"
          className="outer-right-settings-button"
          onClick={this.handleClickCustomCode.bind(this)}
        />
      </div>
    )
  }
}
