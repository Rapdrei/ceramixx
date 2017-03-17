import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import CenterView from './CenterView'
import LeftSideView from './LeftSideView'

let styles = {
  mainLayout: {
    display: 'flex',
    height: 100,
    width: 100
  }
}

const App = () => (
  <div className="App" style={styles.mainLayout}>
    <LeftSideView/>
    <CenterView/>
  </div>
)

export { App as default }
