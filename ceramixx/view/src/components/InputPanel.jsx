import React, { Component } from 'react'

import InputLabel from './widgets/InputLabel'
import InputForm from './widgets/InputForm'
import Slider from './widgets/Slider'

const InputPanel = () => (
  <div className="input-panel">
    <InputLabel labelName="test"/>
    <InputForm placeholderText="placeholder"/>
    <Slider/>
  </div>
)

export { InputPanel as default }
