import React, { Component } from 'react'

import InputLabel from './InputLabel'
import InputForm from './InputForm'
import SettingsSlider from './SettingsSlider'
import SettingsMenu from './SettingsMenu'

const InputPanel = () => (
  <div className="input-panel">
    <SettingsMenu/>
    <InputLabel labelName="Printer Settings"/>
    <SettingsSlider labelText="printer x" min={34} max={60} default={20}/>
    <SettingsSlider labelText="printer y" min={34} max={60} default={20}/>
    <SettingsSlider labelText="printer z" min={34} max={60} default={20}/>

    <SettingsSlider labelText="center x" min={34} max={60} default={20}/>
    <SettingsSlider labelText="center y" min={34} max={60} default={20}/>

    <SettingsSlider labelText="zero x" min={34} max={60} default={20}/>
    <SettingsSlider labelText="zero y" min={34} max={60} default={20}/>
    <SettingsSlider labelText="zero z" min={34} max={60} default={20}/>



    <InputLabel labelName="Object Placement"/>
    <SettingsSlider labelText="object x" min={34} max={60} default={20}/>
    <SettingsSlider labelText="object y" min={34} max={60} default={20}/>
    <SettingsSlider labelText="object z" min={34} max={60} default={20}/>

    <SettingsSlider labelText="center x" min={34} max={60} default={20}/>
    <SettingsSlider labelText="center y" min={34} max={60} default={20}/>
    <SettingsSlider labelText="center z" min={34} max={60} default={20}/>

    <InputLabel labelName="Slicer Settings"/>
    <SettingsSlider labelText="solid walls" min={34} max={60} default={20}/>
    <SettingsSlider labelText="bridges" min={34} max={60} default={20}/>
  </div>
)

export { InputPanel as default }
