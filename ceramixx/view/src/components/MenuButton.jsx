import React, { Component } from 'react'

const CenterMenuButton = (props) => (
  <div
    className={props.active?
      "settings-button settings-button-active" :
      "settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </div>
)

const RightMenuButton = (props) => (
  <div
    className={props.active?
      "settings-button outer-right-settings-button settings-button-active" :
      "settings-button outer-right-settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </div>
)

const LeftMenuButton = (props) => (
  <div
    className={props.active?
      "settings-button outer-left-settings-button settings-button-active" :
      "settings-button outer-left-settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </div>
)

export { CenterMenuButton, RightMenuButton, LeftMenuButton }
