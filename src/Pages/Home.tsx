import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <h1>Opa meu bom!</h1>
        <div
          className="sm:flex sm:justify-center grid-cols-2 space-x-0 gap-6"
          style={{ border: 'solid 1px red' }}
        >
          <p className="sm:m-4 font-bold uppercase  text-blue-900">
            teg lsahdflksajdflkasdj
          </p>
          <p>teg faksjdflkasjd asldkjf aslkdj lsa</p>
        </div>

        <Link to="/About/7">meu botão</Link>
      </div>
    </>
  );
};

export default Home;
