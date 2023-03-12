import { useSelector } from 'react-redux';
import { selectInfo } from 'redux/selectors';

import {
  InfoWrapper,
  InfoEl,
  InfoElContent,
} from 'components/InfoCard/InfoCard.styled';

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
    <InfoWrapper>
      <InfoEl>
        Статус доставки:
        {StatusCode === '3' ? (
          <InfoElContent>
            Номер ТТН не знайдено. Перевірте номер та спробуйте ще раз
          </InfoElContent>
        ) : (
          <InfoElContent>{Status}</InfoElContent>
        )}
      </InfoEl>
      <InfoEl>
        Відправлено:
        <InfoElContent>
          {WarehouseSender}
          <br />
          Населений пункт: {CitySender}
        </InfoElContent>
      </InfoEl>
      <InfoEl>
        Отримано:
        <InfoElContent>
          {WarehouseRecipient}
          <br />
          Населений пункт: {CityRecipient}
        </InfoElContent>
      </InfoEl>
    </InfoWrapper>
  );
};
