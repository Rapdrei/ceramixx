import React, { Component } from 'react'

import Canvas from './Canvas'

const centerStyle = {
  background: "blue",
  color: "green"
}

const CenterView = () => (
  <div id="CenterView" style={centerStyle}>
    <Canvas/>
  </div>
)

export { CenterView as default }
