import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  @media screen and (min-width: 900px) {
    align-items: flex-start;
    margin-top: 0;
    /* justify-content: flex-start; */
  }
`;

export const InfoEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 280px;
  height: 80px;
  font-weight: 700;
  color: #051f75;
  font-size: 16px;
  background-color: #16a3a3;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
  padding: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 900px) {
    width: 450px;
    height: 120px;
    font-size: 20px;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

export const InfoElContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: black;
  padding: 2px;

  @media screen and (min-width: 900px) {
    font-size: 16px;
    padding: 10px;
  }
`;
