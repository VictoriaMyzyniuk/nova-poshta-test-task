import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { selectInfo, selectTtnNumber } from 'redux/selectors';

export default function CheckTtn() {
  // const info = useSelector(selectInfo);
  // console.log('info in ttn', info);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchInfo());
  // }, [dispatch]);

  // const form = e.target;
  // form.reset();

  return <SearchForm />;
}
