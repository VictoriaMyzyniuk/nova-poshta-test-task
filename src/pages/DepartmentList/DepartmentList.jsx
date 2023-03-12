import { DepartmentsForm } from 'components/DepartmentsForm/DepartmentsForm';
import { DepartmentsListResult } from 'components/DepartmentsListResult/DepartmentsListResult';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/selectors';

export default function DepartmentList() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <DepartmentsForm />
      {isLoading ? <Loader /> : <DepartmentsListResult />}
    </>
  );
}
