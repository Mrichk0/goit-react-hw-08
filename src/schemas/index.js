import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required('name is required'),
  number: yup.number('please enter a number').required('number is required'),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});
