import { forwardRef, memo } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  inputStyles: string;
  labelStyles: string;
  errorStyles: string;
  autoComplete: string;
  error: string | undefined;
}

export const FormInput = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        type,
        name,
        placeholder,
        label,
        inputStyles,
        labelStyles,
        errorStyles,
        autoComplete,
        error,
        ...rest
      },
      ref
    ) => (
      <div>
        <label className={labelStyles} htmlFor={name}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          aria-label={label}
          className={inputStyles}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...rest}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    )
  )
);
