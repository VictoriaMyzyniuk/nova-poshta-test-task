import { Circles } from 'react-loader-spinner';
import { Spinner } from 'components/Loader/Loader.styled';
export const Loader = () => {
  return (
    <Spinner>
      <Circles
        height="80"
        width="80"
        color="#ae0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spinner>
  );
};
