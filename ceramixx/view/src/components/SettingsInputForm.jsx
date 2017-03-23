import React, { Component } from 'react'

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


export default class SettingsInputForm extends React.Component({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          className="input-form"
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholderText}
            onChange={this.handleChange}
            className="input-field"
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
});
