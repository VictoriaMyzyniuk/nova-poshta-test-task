import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { fetchDepartments } from 'redux/operations';

import {
  FormEl,
  SubmitButton,
  InputWrapper,
} from 'components/SearchForm/SearchForm.styled';

import {
  InputEl,
  ErrorMessageDepartment,
} from 'components/DepartmentsForm/DepartmentsForm.styled';
import { selectCity, selectPage } from 'redux/selectors';
import { clearDepartmentsList, updateCity } from 'redux/slice';
import { useEffect } from 'react';

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3, 'Мінімум 3 символа')
    .max(30, 'Максимум 25 символів')
    .matches(
      /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']*(-[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*( [А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*$/,
      'Введіть назву літерами українського алфавіту з великої букви'
    )
    .required("Поле обов'язкове для заповнення"),
});

const initialValues = {
  cityName: '',
};

export const DepartmentsForm = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const city = useSelector(selectCity);

  useEffect(() => {
    if (city) {
      dispatch(fetchDepartments({ city, page }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, page]);

  useEffect(() => {
    return () => {
      dispatch(updateCity(''));
      dispatch(clearDepartmentsList());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = values => {
    dispatch(updateCity(values.cityName));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <InputWrapper>
          <InputEl
            type="text"
            name="cityName"
            placeholder="Введіть назву міста"
          />
          <ErrorMessageDepartment name="cityName" component="div" />
        </InputWrapper>
        <SubmitButton type="submit">Шукати відділення</SubmitButton>
      </FormEl>
    </Formik>
  );
};
