import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'

const MenuButton = (props) => (
  <Button>{props.buttonText}</Button>
)

export { SettingsMenu as default }
