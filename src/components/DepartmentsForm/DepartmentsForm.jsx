import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { fetchDepartments } from 'redux/operations';

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3)
    .max(25)
    .matches(
      /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']*(-[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*$/,

      'Введіть назву міста літерами українського алфавіту'
    )
    .required(),
});

const initialValues = {
  cityName: '',
};

export const DepartmentsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(fetchDepartments(values.cityName));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="cityName" placeholder="Введіть назву міста" />
        <ErrorMessage name="cityName" component="div" />
        <button type="submit">Шукати відділення</button>
      </Form>
    </Formik>
  );
};
