import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'
import MenuButton from './MenuButton'

const SettingsMenu = (props) => (
  <ButtonToolbar className="settings-menu">
    <MenuButton buttonText="Workspace"/>
    <MenuButton buttonText="Placement"/>
    <MenuButton buttonText="Slider"/>
  </ButtonToolbar>
)

export { SettingsMenu as default }
