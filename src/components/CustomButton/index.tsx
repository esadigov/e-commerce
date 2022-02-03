import React from 'react';

import './custom-button.scss';

export interface ICustomButton extends
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: React.ReactNode;
}

export const CustomButton: React.FC<ICustomButton> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
