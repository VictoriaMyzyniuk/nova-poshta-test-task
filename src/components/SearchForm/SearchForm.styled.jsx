import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const InputWrapper = styled.div`
  min-height: 74px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 250px;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  outline-color: #bb3d3d;
  border-color: #ab0a0a;
  font-weight: 700;
  outline: none;

  @media screen and (min-width: 900px) {
    height: 26px;
    margin-bottom: 4px;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #5d5e5e;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #ffffff;

  padding: 5px;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: #b11b1b;
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;

  font-weight: 500;
  font-size: 12px;
`;

export const InfoError = styled.div`
  width: 300px;
  text-align: center;

  margin-bottom: 1px;
  font-weight: 500;
  font-size: 12px;
  color: ${props => {
    return props.error ? 'red' : 'transparent';
  }};
`;
