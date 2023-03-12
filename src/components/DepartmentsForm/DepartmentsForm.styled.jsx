import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 250px;
  height: 20px;

  /* margin-bottom: 15px; */
  padding: 5px;
  border-radius: 5px;
  outline-color: #05aa91;
  border-color: #0aab7e;
  font-weight: 700;

  @media screen and (min-width: 900px) {
    height: 26px;
    margin-right: 20px;
    margin-bottom: 4px;
  }
`;

export const ErrorMessageDepartment = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;

  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 900px) {
  }
`;
