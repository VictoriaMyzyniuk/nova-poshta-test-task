import { InfoCard } from 'components/InfoCard/InfoCard';
import { RequestHistory } from 'components/RequestHistory/RequestHistory';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { InfoWrapper } from 'pages/CheckTtn/CheckTtn.styled';

export default function CheckTtn() {
  return (
    <>
      <SearchForm />
      <InfoWrapper>
        <InfoCard />
        <RequestHistory />
      </InfoWrapper>
    </>
  );
}
