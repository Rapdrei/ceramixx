require('rc-slider/assets/index.css');
require('rc-tooltip/assets/bootstrap.css');

const React = require('react');
const Tooltip = require('rc-tooltip');
const Slider = require('rc-slider');
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

const SettingsSlider = (props) => (
  <div className="settings-slider-container">
    <p className="settings-label">{props.labelText}</p>
    <Slider
      className="settings-slider"
      min={props.min} max={props.max}
      defaultValue={props.default}
      handle={handle}
      tipFormatter={value => `${value}%`}
     />
  </div>
)

export {SettingsSlider as default }
