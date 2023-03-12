import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDepartmentsList,
  selectDepartmentsError,
  selectPage,
  selectTotalCount,
} from 'redux/selectors';

import {
  DepartmentListHeader,
  DepartmentList,
  DepartmentListItem,
  DescriptionItem,
  ScheduleItem,
  DescriptionCityItem,
  ScheduleHeader,
  LoadMoreButton,
  ButtonWrapper,
} from 'components/DepartmentsListResult/DepartmentsListResult.styled';
import { updatePage } from 'redux/slice';

export const DepartmentsListResult = () => {
  const listOfDepartments = useSelector(selectDepartmentsList);
  const departmentsError = useSelector(selectDepartmentsError);
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const totalCount = useSelector(selectTotalCount);

  const onLoadMore = () => {
    dispatch(updatePage(page + 1));
  };
  return (
    <ButtonWrapper>
      {departmentsError ? (
        <DepartmentListHeader>Такого міста немає у списку</DepartmentListHeader>
      ) : (
        <DepartmentList>
          {listOfDepartments.map(item => (
            <DepartmentListItem key={nanoid()}>
              <DescriptionCityItem>{item.CityDescription}</DescriptionCityItem>
              <DescriptionItem>{item.Description}</DescriptionItem>
              <ScheduleHeader>Розклад роботи</ScheduleHeader>
              <ScheduleItem>Пн {item.Schedule.Monday}</ScheduleItem>
              <ScheduleItem>Вт {item.Schedule.Tuesday}</ScheduleItem>
              <ScheduleItem>Ср {item.Schedule.Wednesday}</ScheduleItem>
              <ScheduleItem>Чт {item.Schedule.Thursday}</ScheduleItem>
              <ScheduleItem>Пт {item.Schedule.Friday}</ScheduleItem>
              <ScheduleItem>Сб {item.Schedule.Saturday}</ScheduleItem>
              <ScheduleItem>Вс {item.Schedule.Sunday}</ScheduleItem>
            </DepartmentListItem>
          ))}
        </DepartmentList>
      )}
      {totalCount !== listOfDepartments.length &&
        !!listOfDepartments.length && (
          <div>
            <LoadMoreButton type="submit" onClick={onLoadMore}>
              Більше відділень
            </LoadMoreButton>
          </div>
        )}
    </ButtonWrapper>
  );
};
