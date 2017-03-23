import React, { Component } from 'react'

import { ButtonToolbar, Button } from 'react-bootstrap'

const MenuButton = (props) => (
  <Button
    bsStyle={props.isActive? "success" : "default"}
    className={"settings-button"}
  </Button>
)

export { MenuButton as default }
