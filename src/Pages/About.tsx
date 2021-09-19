import { SetStateAction, useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Api } from '../services/Api';

type Parameters = {
  id: string;
};

const About = (): JSX.Element => {
  const a: Parameters = useParams();
  const [url, setUrl] = useState(['']);
  const [indekiss, setIndekiss] = useState(0);

  const pokemon = async () => {
    await Api.get(`https://pokeapi.co/api/v2/pokemon/${a.id}`).then(
      (response) => {
        const IMAGIS: SetStateAction<string[]> = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.values(response.data.sprites).forEach((item: any) => {
          if (typeof item === 'object' || !item) return;
          IMAGIS.push(item);
          console.log(item.typeof);
        });
        setUrl(IMAGIS);
        setInterval(() => {
          if (indekiss === 4) {
            setIndekiss(0);
          }
          setIndekiss((indekiss) => (indekiss + 1) % IMAGIS.length);
        }, 1000);
      }
    );
  };

  useEffect(() => {
    pokemon();
  }, []);

  const simounao = false;
  return (
    <>
      {simounao && <Redirect to="/" />}
      <h1>baka {a.id}</h1>
      {
        <img src={url[indekiss]} alt="asdf" />
        // Object.values(url || {}).map((item : any, index: number) => {

        //      console.log(item)
        //      if(typeof item === "object" || !item ) return
        //     return <img key={index} src={item} />
        // })
      }
    </>
  );
};
export default About;
