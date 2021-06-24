import { useEffect } from 'react';
import { axios } from 'utils/constants';
import Head from 'next/head';
import Dashboard from 'components/Dashboard';
import Sidebar from 'components/Sidebar';
import { updateState } from 'redux/currency';
import { useDispatch } from 'react-redux';
import {
  handlefrom,
  handlefromExchange,
  handletoExchange,
} from 'redux/currency';

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateState(props));
    dispatch(handletoExchange(props.rates.rates['USD']));
    dispatch(handlefromExchange(props.rates.rates['INR']));
    dispatch(handlefrom(1));
  }, []);
  return (
    <div className="home__container">
      <Head>
        <meta name="language" content="EN"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="currency converter online" />
        <meta name="keywords" content="money currency exchange rates reactjs nextjs converter" />
        <meta name="robots" content="index, follow" />
        <title>currency converter</title>
      </Head>
      <Dashboard />
      <Sidebar />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const rates = await axios.get('/rates');
    const symbols = await axios.get('/symbols');

    return {
      props: {
        rates: rates.data,
        symbols: symbols.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default Home;
