import Header from '../components/header/Header';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex p-2">
        <div className="card border rounded items-center flex w-full text-white">
          {/* <img src={} alt="asdf" /> */}
          <div className="w-2/12">
            <span className="bg-yellow-light w-8 h-28 flex m-auto"> a</span>
          </div>
          <div className="w-10/12 space-y-2 pt-2 pb-2 pr-4">
            <div className="flex justify-between">
              <div>
                <div className="text-xl leading-5">EISENBAHN</div>
                <div className="text-xs">Imperial Pale Ale</div>
              </div>
              <div>
                <span>YYYYY</span> <span> (4.78)</span>
              </div>
            </div>

            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quisquam tempora beatae pariatur
            </div>
            <div>
              <span>IBU.25</span>
              <span>ABV.25</span>
              <span>s2</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
