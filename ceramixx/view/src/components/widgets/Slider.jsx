import React, { Component } from 'react'

import ReactBootstrapSlider from 'react-bootstrap-slider';

const Slider = React.createClass({
  render: function () {
        return (
          <ReactBootstrapSlider
            value={this.state.currentValue}
            change={this.changeValue}
            slideStop={this.changeValue}
            step={this.state.step}
            max={this.state.max}
            min={this.state.min}
            orientation="vertical"
            reversed={true}
            disabled="disabled" />
        );
    }
});

export { Slider as default }
