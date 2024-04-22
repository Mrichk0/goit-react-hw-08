import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './customInput.module.css';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${styles.input} ${
          meta.touched && meta.error ? styles.error : ''
        }`}
      />
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomInput;
