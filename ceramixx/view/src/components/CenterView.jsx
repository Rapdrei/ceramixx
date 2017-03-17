import React, { Component } from 'react'

import Canvas from './Canvas'

let styles = {
  centerLayout: {
    display: 'flex',
    flex: 2
  }
}

const CenterView = () => (
  <div style={styles.centerLayout}>
  </div>
)

export { CenterView as default }
