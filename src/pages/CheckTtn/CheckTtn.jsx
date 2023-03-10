import { InfoCard } from 'components/InfoCard/InfoCard';
import { SearchForm } from 'components/SearchForm/SearchForm';

export default function CheckTtn() {
  console.log('check ttn render');

  return (
    <>
      <SearchForm />
      <InfoCard />
    </>
  );
}
