import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '@src/store';
import { FormInput } from '@src/components';
import { Routes, ImageUrl } from '@src/constant';
import { LoginValidation } from '@src/validation';
import { loginUser } from '@src/store/action';

interface LoginForm {
  email: string;
  password: string;
}

const styles = {
  label: 'block text-sm font-medium leading-6 text-gray-900 my-1.5',
  input:
    'block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6 my-3',
  button:
    'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  error: 'text-sm text-red-500 mb-2',
};

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const { error, user } = useAppSelector(({ UserReducer }) => UserReducer);

  const loginHandler = (data: LoginForm) => dispatch(loginUser(data));

  if (error) toast.error(error, { toastId: error });

  useEffect(() => {
    const userToken = Cookies.get('user');
    if (userToken && JSON.parse(userToken).token) navigate(Routes.home);
  }, [navigate]);

  useEffect(() => {
    if (user && user.token) Cookies.set('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={ImageUrl['login']}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(loginHandler)}>
          <FormInput
            type="email"
            placeholder="example@domain.com"
            label="Email"
            inputStyles={styles.input}
            labelStyles={styles.label}
            errorStyles={styles.error}
            error={errors.email?.message}
            autoComplete="username"
            {...register('email', LoginValidation['email'])}
          />
          <FormInput
            type="password"
            placeholder="••••••••"
            label="Password"
            inputStyles={styles.input}
            labelStyles={styles.label}
            errorStyles={styles.error}
            error={errors.password?.message}
            autoComplete="current-password"
            {...register('password', LoginValidation['password'])}
          />
          <button type="submit" className={styles.button}>
            Sign in
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            No account? Contact administrator to create.
          </a>
        </p>
      </div>
    </div>
  );
};