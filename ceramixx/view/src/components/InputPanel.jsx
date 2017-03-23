import React, { Component } from 'react'

import InputLabel from './widgets/InputLabel'
import InputForm from './widgets/InputForm'
import SettingsSlider from './widgets/SettingsSlider'
import { Panel } from 'react-bootstrap'

const InputPanel = () => (
  <div className="input-panel">
    <InputLabel labelName="testlabel"/>
  </div>
)

export { InputPanel as default }
