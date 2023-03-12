import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media screen and (min-width: 900px) {
    margin-left: 70px;
    padding-top: 0;
    justify-content: flex-start;
  }
`;

export const ListHeader = styled.div`
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;

  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;

export const ListEl = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  height: 175px;

  overflow-y: ${props => {
    return props.requestHistory.length > 5 ? 'scroll' : 'hidden';
  }};
  @media screen and (min-width: 900px) {
    height: 315px;
    overflow-y: ${props => {
      return props.requestHistory.length > 9 ? 'scroll' : 'hidden';
    }};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  border: 1px solid #ff0000;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: 500;

  background-color: #eb9a9a;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #fff;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ClearButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #5d5e5e;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;

  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: #fff;
  }
`;
