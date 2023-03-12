import styled from '@emotion/styled';

export const DepartmentListHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  /* background-color: #1bad84;
  padding: 5px; */
  text-align: center;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
`;

export const DepartmentList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;

  padding: 0;

  @media screen and (min-width: 900px) {
    /* margin: -15px; */
  }
`;

export const DepartmentListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 130px;
  height: 250px;
  border: 1px solid #39bb96;
  padding: 5px;

  text-align: center;
  border-radius: 5px;
  margin: 5px;

  font-size: 12px;
  font-weight: 500;

  background-color: #ccf9ef;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 900px) {
    margin: 15px;
    width: 200px;
    height: 350px;
  }
`;

export const DescriptionCityItem = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #0f0473;

  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border: 1px solid #1bad84;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 5px;
  @media screen and (min-width: 900px) {
    font-size: 16px;
    margin-bottom: 10px;
    padding: 10px;
    height: 100px;
  }
`;

export const ScheduleItem = styled.div`
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`;

export const ScheduleHeader = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #0f0473;
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;

export const LoadMoreButton = styled.button`
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
