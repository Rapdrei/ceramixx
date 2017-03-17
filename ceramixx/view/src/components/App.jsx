import React, { Component } from 'react'

import LeftSideView from './LeftSideView'
import RightSideView from './RightSideView'

const App = () => (
  <div className="center-view">
    <LeftSideView/>
    <RightSideView/>
  </div>
)

export { App as default }
