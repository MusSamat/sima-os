import React, { useState } from "react";

const Filter = (min, max, defaultState, label, id) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = e => {
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input
    style={{marginTop: "300px"}}
      type="range"
      id={id}
      min={min}
      max={max}
      step={10}
      value={state}
      onChange={handleChange}
    />
  );

  return [state, Slider, setSlide];
};

export default Filter;