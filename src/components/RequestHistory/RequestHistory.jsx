import {
  updateSelectedNumber,
  // deleteSelectedNumber,
  clearRequestHistory,
} from 'redux/slice';
import { selectNumbersList } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { nanoid } from 'nanoid';

export const RequestHistory = () => {
  const requestHistory = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  // const deleteNumber = item => {
  //   dispatch(deleteSelectedNumber(item));
  // };

  const clearHistory = () => {
    dispatch(clearRequestHistory());
  };

  const handleClick = clickedNumber => {
    dispatch(updateSelectedNumber(clickedNumber));

    dispatch(fetchInfo(clickedNumber));
  };
  return (
    <ul>
      Історія
      {requestHistory.map(item => {
        return (
          <li key={nanoid()}>
            <div
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </div>

            {/* <button
              type="button"
              onClick={() => {
                deleteNumber(item);
              }}
            >
              X
            </button> */}
          </li>
        );
      })}
      {requestHistory.length !== 0 && (
        <button
          type="button"
          onClick={() => {
            clearHistory();
          }}
        >
          clear
        </button>
      )}
    </ul>
  );
};
