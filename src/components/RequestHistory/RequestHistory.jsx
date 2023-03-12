import {
  updateSelectedNumber,
  // deleteSelectedNumber,
  clearRequestHistory,
} from 'redux/slice';
import { selectNumbersList } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { nanoid } from 'nanoid';

import {
  ListWrapper,
  ListHeader,
  ListEl,
  ListItem,
  ClearButton,
} from 'components/RequestHistory/RequestHistory.styled';

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
    <ListWrapper>
      <ListHeader>Історія пошуку</ListHeader>
      <ListEl>
        {requestHistory.map(item => {
          return (
            <ListItem key={nanoid()}>
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
            </ListItem>
          );
        })}
      </ListEl>
      {requestHistory.length !== 0 && (
        <ClearButton
          type="button"
          onClick={() => {
            clearHistory();
          }}
        >
          Очистити історію
        </ClearButton>
      )}
    </ListWrapper>
  );
};
