import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { selectError, selectSelectedNumber } from 'redux/selectors';

import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
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
      <Field type="text" name="ttnNumber" placeholder="Введіть номер ТТН" />
      <ErrorMessage name="ttnNumber" component="div" />
    </>
  );
};

export const SearchForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = values => {
    dispatch(fetchInfo(values.ttnNumber));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <TtnInput />
        {error && <div>Невірний номер ТТН</div>}
        <button type="submit">Отримати статус ТТН</button>
      </Form>
    </Formik>
  );
};
