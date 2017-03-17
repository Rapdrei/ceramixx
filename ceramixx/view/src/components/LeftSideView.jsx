import React, { Component } from 'react'

import InputPanel from './InputPanel'

const LeftSideView = () => (
  <div className="left-view">
    <div className="head-panel">
      <p className="logo-title"> cerami<span>x</span><span>x</span></p>
    </div>
    <InputPanel/>
    <div className="input-field"></div>

  </div>
)

export { LeftSideView as default }
