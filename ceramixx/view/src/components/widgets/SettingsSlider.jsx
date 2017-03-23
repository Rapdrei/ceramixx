import React, { Component } from 'react'

import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';

const SettingsSlider = React.createClass({
  render: function () {
    <div>
      <Slider />
      <Range />
    </div>
    }
});

export { SettingsSlider as default }
