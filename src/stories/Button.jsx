import React from 'react';
import '../stories/button.css'
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  width,
  height,
  padding,
  gap,
  color,
  backgroundColor,
  label,
  icon,
  position,
  top,
  fontFamily,
  fontStyle,
  fontWeight,
  fontSize,
  lineHeight,
  textTransform,
  ...props
}) => {

  return (
    <button
      type="button"
      style={{
        width: width,
        height: height,
        padding: padding,
        color: color,
        gap: gap,
        backgroundColor: backgroundColor,
        hover:'#FF6F61',
      }}
      {...props}
    >
      <img style={{
        position: position,
        top: top
      }}
        src={icon} />
      <span style={{
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: lineHeight,
        textTransform: textTransform,
      }}>
        {label}</span>
    </button>
  );
};


Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};