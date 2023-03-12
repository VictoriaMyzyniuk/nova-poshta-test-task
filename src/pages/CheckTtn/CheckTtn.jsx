import { InfoCard } from 'components/InfoCard/InfoCard';
import { RequestHistory } from 'components/RequestHistory/RequestHistory';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { InfoWrapper } from 'pages/CheckTtn/CheckTtn.styled';
import { Loader } from 'components/Loader/Loader';

import { selectIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function CheckTtn() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <SearchForm />
      {isLoading ? (
        <Loader />
      ) : (
        <InfoWrapper>
          <InfoCard />
          <RequestHistory />
        </InfoWrapper>
      )}
    </>
  );
}
