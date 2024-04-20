import * as yup from 'yup';

const basicSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required('name is required'),
  number: yup.number('please enter a number').required('number is required'),
});

export default basicSchema;
