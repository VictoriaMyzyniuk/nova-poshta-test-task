import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInfo } from 'redux/operations';

export const SearchForm = () => {
  const [number, setNumber] = useState('');
  console.log(number);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(fetchInfo(number));
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="number"
        placeholder="Введіть номер ТТН"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button>Отримати статус ТТН</button>
    </form>
  );
};
