import { FC, useCallback, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '@src/components';
import { Routes } from '@src/constant';

const styles = {
  label: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
  input:
    'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  button:
    'w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
};

export const Login: FC = () => {
  const navigate = useNavigate();
  const loginHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(Routes.home);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
            <FormInput
              type="email"
              name="email"
              placeholder="example@domain.com"
              label="Email"
              inputStyles={styles.input}
              labelStyles={styles.label}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="••••••••"
              label="Password"
              inputStyles={styles.input}
              labelStyles={styles.label}
            />
            <button type="submit" className={styles.button}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
