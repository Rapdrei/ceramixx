import React, { Component } from 'react'

import SettingsMenu from './SettingsMenu'

export default class LeftSideView extends React.Component {
  render() {
    return (
      <div className="left-view">
        <div className="head-panel">
          <p className="logo-title"> cerami<span>x</span><span>x</span></p>
        </div>
        <SettingsMenu/>

      </div>
    )
  }
} 
