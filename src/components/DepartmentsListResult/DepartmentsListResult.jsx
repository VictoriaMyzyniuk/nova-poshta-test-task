import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectDepartmentsList, selectDepartmentsError } from 'redux/selectors';

export const DepartmentsListResult = () => {
  const listOfDepartments = useSelector(selectDepartmentsList);
  const departmentsError = useSelector(selectDepartmentsError);

  return (
    <>
      {departmentsError ? (
        <div>Такого міста немає у списку</div>
      ) : (
        <ul>
          {listOfDepartments.map(item => (
            <li key={nanoid()}>
              <div>{item.CityDescription}</div>
              <div>{item.Description}</div>
              <div>+{item.Phone}</div>
              <div>Розклад роботи</div>
              <div>{item.Schedule.Monday}</div>
              <div>{item.Schedule.Tuesday}</div>
              <div>{item.Schedule.Wednesday}</div>
              <div>{item.Schedule.Thersday}</div>
              <div>{item.Schedule.Friday}</div>
              <div>{item.Schedule.Saturday}</div>
              <div>{item.Schedule.Sunday}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
