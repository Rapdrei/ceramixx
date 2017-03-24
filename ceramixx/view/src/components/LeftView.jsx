import React, { Component } from 'react'

import SettingsMenu from './SettingsMenu'
import WorkspaceSettings from './WorkspaceSettings'
import PlacementSettings from './PlacementSettings'
import CodeSettings from './CodeSettings'
import SlicerSettings from './SlicerSettings'

export default class LeftView extends React.Component {
  constructor(...props) {
    super(...props)

    this.state = {
      WorkspaceSettings: {

      },
      PlacementSettings: {

      },
      CodeSettings: {

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
        <PlacementSettings/>
        <CodeSettings/>
        <SlicerSettings/>
      </div>
    )
  }

  // redirectSettingsView(view) {
  //   switch (view) {
  //     case 'expression':
  //
  //       break;
  //     default:
  //
  //   }
  // }
}
