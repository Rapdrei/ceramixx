import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'

const SettingsMenu = (props) => (
  <ButtonToolbar className="settings-menu">
    <Button className="settings-button"> Workspace</Button>
    <Button className="settings-button"> Placement</Button>
    <Button className="settings-button"> Slicer</Button>
  </ButtonToolbar>
)

export { SettingsMenu as default }
