import React, { Component } from 'react'

import LeftView from './LeftView'
import RightView from './RightView'

const App = () => (
  <div className="center-view">
    <LeftView/>
    <RightView/>
  </div>
)

export { App as default }
