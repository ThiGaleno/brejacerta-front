import { useEffect, useState } from 'react';
// import Beer from '../components/Beer';
import Header from '../components/header/Header';
import { Api } from '../services/Api';

// type BeerProps = {
//   foo: string;
//   bar: number;
// };

const Home = (): JSX.Element => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    Api.get('http://localhost.com:3000/api/', {
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': true,
      //   'Access-Control-Allow-Methods': '*',
      //   // Authorization: `Bearer ${token}`,
      // },
    }).then((response) => {
      console.log(response, 'lkjlkj');
      // if (response.statusText === 'OK') {
      //   setBeers(response.data);
      // }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* {beers.map((beer) => {
          return <Beer props={beer} />;
        })} */}
      </main>
    </>
  );
};

export default Home;
