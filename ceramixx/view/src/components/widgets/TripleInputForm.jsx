import React, { Component } from 'react'

const TripleInputForm = (props) => {
  <FormGroup
    controlId="formBasicText"
    // validationState={this.getValidationState()}
  >
    <ControlLabel>{this.props.label}</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder="Enter text"
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>Validation is based on string length.</HelpBlock>
  </FormGroup>

}
