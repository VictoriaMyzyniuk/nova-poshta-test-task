import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  width: 100%;
`;

export const InfoEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 280px;
  height: 80px;
  font-weight: 700;
  color: #051f75;
  font-size: 16px;
  background-color: #16a3a3;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
  padding: 2px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const InfoElContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: black;
  padding: 2px;
`;
