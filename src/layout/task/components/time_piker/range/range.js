import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import classNames from "classnames";

import "./styles.css";

const SliderTrack = ({ props, children, min, max, values }) => {
  const colors = ["#eeeeee", "#f84053", "#eeeeee"];
  const background = getTrackBackground({
    values,
    min,
    max,
    colors
  });

  return (
    <div
      className="slider-track-container"
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{ ...props.style, background }}
    >
      <div className="slider-track" ref={props.ref}>
        {children}
      </div>
    </div>
  );
};

const SliderThumb = ({ props, isDragged, index }) => {
  return (
    <div index={index} className="slider-thumb-container" style={props.style} {...props}>
      <div
        className={classNames("slider-thumb", { "is-dragged": isDragged })}
      >
        <span>{props?.['aria-valuenow']}</span>
      </div>
    </div>
  );
};

const DistanceSlider = ({ onChange = () => {}, min, max, step }) => {
  const [values, setValues] = useState([50]);

  const handleChange = (values) => {
    setValues(values);
    onChange(values);
  };

  const renderTrack = (props) => {
    return <SliderTrack {...props} min={min} max={max} values={values} />;
  };

  return (
    <>
      <Range
        allowOverlap
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={renderTrack}
        renderThumb={SliderThumb}
      />
    </>
  );
};

DistanceSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default DistanceSlider;
