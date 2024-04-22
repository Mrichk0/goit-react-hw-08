import { Formik, Form } from 'formik';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

import CustomInput from '../../shared/components/CustomInput/CustomInput';
import { loginSchema } from '../../schemas/index.js';

import style from '../LoginPage/loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { setSubmitting, resetForm }) => {
    dispatch(login({ email, password }));
    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
      <h1>Login page</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <CustomInput
              label={'Email'}
              name={'email'}
              type={'text'}
              placeholder={'Enter email'}
            />

            <CustomInput
              label={'Password'}
              name={'password'}
              type={'text'}
              placeholder={'Enter password'}
            />

            <button
              className={style.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Enter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
