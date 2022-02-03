import React from 'react';

import './form-input.scss';

export interface IFormInput extends
React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    value: string;
    label: string;
}

export const FormInput: React.FC<IFormInput> = ({
  label, value, ...otherProps
}) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {label ? (
      <label
        className={`${
          value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
