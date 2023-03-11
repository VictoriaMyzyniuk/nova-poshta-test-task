import { useSelector } from 'react-redux';
import { selectInfo } from 'redux/selectors';

export const InfoCard = () => {
  const cargoInfo = useSelector(selectInfo);
  const {
    Status,
    StatusCode,
    WarehouseRecipient,
    WarehouseSender,
    CitySender,
    CityRecipient,
  } = cargoInfo;
  return (
    <>
      <div>
        Статус доставки:
        {StatusCode === '3' ? (
          <div>Номер ТТН не знайдено. Перевірте номер та спробуйте ще раз</div>
        ) : (
          Status
        )}
      </div>
      <div>
        Відправлено:
        {WarehouseSender}/{CitySender}
      </div>
      <div>
        Отримано:
        {WarehouseRecipient}/{CityRecipient}
      </div>
    </>
  );
};
