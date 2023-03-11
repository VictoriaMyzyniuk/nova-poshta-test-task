import { InfoCard } from 'components/InfoCard/InfoCard';
import { RequestHistory } from 'components/RequestHistory/RequestHistory';
import { SearchForm } from 'components/SearchForm/SearchForm';

export default function CheckTtn() {
  return (
    <>
      <SearchForm />
      <InfoCard />
      <RequestHistory />
    </>
  );
}
