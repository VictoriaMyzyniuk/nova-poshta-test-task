import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const ListHeader = styled.div`
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  /* background-color: #1bad84;
  padding: 5px; */
  text-align: center;
  border-radius: 5px;
`;

export const ListEl = styled.ul`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  border: 1px solid #39bb96;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 5px;

  background-color: #ccf9ef;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ClearButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #39bb96;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline-color: #504e4e;
`;
