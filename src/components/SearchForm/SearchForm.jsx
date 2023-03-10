import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { selectSelectedNumber } from 'redux/selectors';

import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';

const schema = yup.object().shape({
  ttnNumber: yup
    .string()
    // .min(4)
    // .max(10)
    // .matches(
    //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    //   'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    // )
    .required(),
});

const initialValues = {
  ttnNumber: '',
};

const TtnInput = () => {
  const { setFieldValue } = useFormikContext();
  const ttnSelectedNumber = useSelector(selectSelectedNumber);

  useEffect(() => {
    setFieldValue('ttnNumber', ttnSelectedNumber);
    console.log('ttnSelectedNumber in useeffect', ttnSelectedNumber);
  }, [ttnSelectedNumber]);

  return (
    <>
      <Field type="number" name="ttnNumber" placeholder="Введіть номер ТТН" />
      <ErrorMessage name="name" component="div" />
    </>
  );
};

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);

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

        <button>Отримати статус ТТН</button>
      </Form>
    </Formik>
  );
};
