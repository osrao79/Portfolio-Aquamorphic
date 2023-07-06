import React from "react";
import { GithubPicker } from "react-color";
import { colors } from "../../utils/data";
import './themePicker.css'
// import "../../screens/Dashboard/Dashboard.css";

const ThemePicker = (props) => {
  const {
    ColorPickerRef,
    showColorPicker,
    showColorPickerBool,
    handleChangeComplete,
    themeColor,
  } = props;
  return (
    <div className='theme-picker' ref={ColorPickerRef}>
      <div className='color-block' onClick={showColorPicker}>
        <div className='inner'></div>
      </div>
      {showColorPickerBool && (
        // <div className='pelette-box'>
          <GithubPicker
            className='pelette'
            colors={colors}
            width='205px'
            color={themeColor}
          onChangeComplete={handleChangeComplete}
          triangle="top-left"
          />
        // </div>
      )}
      
    </div>
  );
};

export default ThemePicker;
