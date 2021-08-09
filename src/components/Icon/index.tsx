import React from 'react';

interface PropsIcon {
  name: any,
  color: string,
  size: string,
  display: string,
  height: string,
};

export const Icon = (props: PropsIcon) => {
  const {
    name,
    color,
    size,
    display,
    height,
  } = props;

  const SVGComponent = name;
  const displayCustom = display ?? 'block';

  if (!SVGComponent) {
    return <div />;
  }

  return (
    <div
      style={{
        width: size,
        height: height ?? size,
        display: displayCustom,
      }}
    >
      <SVGComponent
        fill={color || color || '#000'}
        width={size}
        {...props}
      />
    </div>
  );
};
