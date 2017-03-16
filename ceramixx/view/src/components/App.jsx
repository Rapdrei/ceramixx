import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native';

import CenterView from './CenterView'
import RightSideView from './RightSideView'

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  centerView: {
    backgroundColor: 'blue',
    flex: 2
  },
  rightSideView: {
    backgroundColor: 'red',
    flex: 1
  }
});

const App = () => (
  <div className="App">
    <View style={styles.mainView}>
      <View style={styles.centerView} />
      <View style={styles.rightSideView} />
    </View>
  </div>
)

export { App as default }
