import React, { Component } from 'react'

import SettingsMenu from './SettingsMenu'
import WorkspaceSettings from './WorkspaceSettings'

export default class LeftSideView extends React.Component {
  constructor(...props) {
    super(...props)

    this.state = {
      WorkspaceSettings: {

      },
      PlacementSettings: {

      },
      CustomCodeSettings: {

      },
      SlicerSettings: {

      }
    }
  }

  render() {
    return (
      <div className="left-view">
        <div className="head-panel">
          <p className="logo-title"> cerami<span>x</span><span>x</span></p>
        </div>
        <SettingsMenu/>
        <WorkspaceSettings/>
        <
      </div>
    )
  }

  redirectSettingsView(view) {
    switch (view) {
      case 'expression':

        break;
      default:

    }
  }
}
