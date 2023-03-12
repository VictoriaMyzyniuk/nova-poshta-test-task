import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { fetchDepartments } from 'redux/operations';

import {
  FormEl,
  InputEl,
  SubmitButton,
  Error,
} from 'components/SearchForm/SearchForm.styled';

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
      <FormEl>
        <InputEl
          type="text"
          name="cityName"
          placeholder="Введіть назву міста"
        />
        <Error name="cityName" component="div" />
        <SubmitButton type="submit">Шукати відділення</SubmitButton>
      </FormEl>
    </Formik>
  );
};
