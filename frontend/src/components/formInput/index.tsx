import { FC } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  inputStyles: string;
  labelStyles: string;
}

export const FormInput: FC<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  inputStyles,
  labelStyles,
}) => {
  return (
    <div>
      <label className={labelStyles} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        aria-label={label}
        className={inputStyles}
        placeholder={placeholder}
      />
    </div>
  );
};
