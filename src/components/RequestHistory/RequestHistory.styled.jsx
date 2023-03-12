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
  /* background-color: #1bad84;
  padding: 5px; */
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
  overflow-y: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }

  @media screen and (min-width: 900px) {
    height: 315px;
    overflow-y: hidden;
    overflow-y: scroll;
  }
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
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #39bb96;
  }

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
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: #05aa91;
  }
`;
