export interface LoginForm {
  email: string;
  password: string;
}

export interface InputProps {
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
