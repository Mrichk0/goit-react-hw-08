import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import basicSchema from '../../../schemas/index.js';
import CustomInput from '../CustomInput/CustomInput';
import style from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const onSubmitForm = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting, isValid }) => (
        <Form className={style.form}>
          <CustomInput
            label={'Name'}
            name={'name'}
            type={'text'}
            placeholder={'Enter name'}
          />

          <CustomInput
            label={'Number'}
            name={'number'}
            type={'tel'}
            placeholder={'Enter number'}
          />

          <button
            disabled={isSubmitting || !isValid}
            type="submit"
            className={style.submitButton}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
