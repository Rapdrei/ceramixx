import React, { Component } from 'react'

const CenterMenuButton = (props) => (
  <button
    className={props.active?
      "settings-button settings-button-active" :
      "settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </button>
)

const RightMenuButton = (props) => (
  <button
    className={props.active?
      "settings-button outer-right-settings-button settings-button-active" :
      "settings-button outer-right-settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </button>
)

const LeftMenuButton = (props) => (
  <button
    className={props.active?
      "settings-button outer-left-settings-button settings-button-active" :
      "settings-button outer-left-settings-button"
    }
    >
      <p>{props.buttonText}</p>
    </button>
)

export { CenterMenuButton, RightMenuButton, LeftMenuButton }
