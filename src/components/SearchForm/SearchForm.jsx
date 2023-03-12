import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { selectError, selectSelectedNumber } from 'redux/selectors';

import { Formik, useFormikContext } from 'formik';

import {
  FormEl,
  InputEl,
  SubmitButton,
  Error,
  InfoError,
  InputWrapper,
} from 'components/SearchForm/SearchForm.styled';

import * as yup from 'yup';
import { useEffect } from 'react';

const schema = yup.object().shape({
  ttnNumber: yup
    .string()
    .matches(/^\d{14}$/, 'Введіть 14 цифр')
    .required("Поле обов'язкове для заповнення"),
});

const initialValues = {
  ttnNumber: '',
};

const TtnInput = () => {
  const { setFieldValue } = useFormikContext();

  const ttnSelectedNumber = useSelector(selectSelectedNumber);

  useEffect(() => {
    setFieldValue('ttnNumber', ttnSelectedNumber);
  }, [ttnSelectedNumber, setFieldValue]);

  return (
    <>
      <InputEl type="text" name="ttnNumber" placeholder="Введіть номер ТТН" />
      <Error name="ttnNumber" component="div" />
    </>
  );
};

export const SearchForm = () => {
  const dispatch = useDispatch();
  let error = useSelector(selectError);

  const handleSubmit = values => {
    dispatch(fetchInfo(values.ttnNumber));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <InputWrapper>
          <TtnInput />
          <InfoError error={error}>Невірний номер ТТН</InfoError>
        </InputWrapper>
        <SubmitButton type="submit">Отримати статус</SubmitButton>
      </FormEl>
    </Formik>
  );
};
