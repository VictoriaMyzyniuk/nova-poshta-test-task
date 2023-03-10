import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'redux/operations';
import { selectInfo, selectNumbersList } from 'redux/selectors';

import { updateSelectedNumber } from 'redux/slice';

export const InfoCard = () => {
  const { Status, WarehouseRecipient, WarehouseSender } =
    useSelector(selectInfo);
  const requestHistory = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  const handleClick = clickedNumber => {
    dispatch(updateSelectedNumber(clickedNumber));

    dispatch(fetchInfo(clickedNumber));
  };
  return (
    <>
      <div>
        Статус доставки:
        {Status}
      </div>
      <div>
        Відправлено:
        {WarehouseSender}
      </div>
      <div>
        Отримано:
        {WarehouseRecipient}
      </div>
      <ul>
        Історія
        {requestHistory.map(item => {
          return (
            <li
              key={item}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};
