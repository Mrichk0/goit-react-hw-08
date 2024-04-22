import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/authOperations';
import { Formik, Form } from 'formik';
import CustomInput from '../../shared/components/CustomInput/CustomInput';
import { registerSchema } from '../../schemas/index.js';

import style from '../RegisterPage/registerPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmitForm = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <div>
      <h1>register page</h1>{' '}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmitForm}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <CustomInput
              label={'Name'}
              name={'name'}
              type={'text'}
              placeholder={'Enter name'}
            />
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
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
