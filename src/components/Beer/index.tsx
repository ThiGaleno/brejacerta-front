import { BiHeart } from 'react-icons/all';
import StarReview from './StarReview';

const Beer = (): JSX.Element => (
  <div className="sm:max-w-2xl my-2 p-2 rounded items-center flex w-full text-white">
    {/* <img src={} alt="asdf" /> */}
    <div>
      <span className="bg-yellow-light w-11 h-28 flex mr-2 "> a</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <div>
          <div className="text-xl leading-5">EISENBAHN</div>
          <div className="text-xs text-gray-default">Imperial Pale Ale</div>
        </div>
        <StarReview
          starSize={2}
          onChangeStars={(a) => {
            console.log(a);
          }}
        />
      </div>

      <div className="text-sm text-yellow-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam
        tempora beatae pariatur
      </div>
      <div className="space-x-3 flex text-sm">
        <div className="tooltip border cursor-default flex items-center py-1 px-2 rounded border-gray-dark">
          <span>IBU.25</span>
          <span className="hidden left-0 top-7 w-64">
            IBU é o nível de amargor da cerveja asdf asdf asd fasd fasdfasdf
          </span>
        </div>
        <div className="tooltip border cursor-default flex items-center py-1 px-2 rounded border-gray-dark">
          <span> ABV.25</span>
          <span className="hidden left-0 top-7">asdfasdf</span>
        </div>
        <button
          type="button"
          className="flex text-red-500 items-center text-2xl py-1 px- rounded border-gray-dark"
        >
          <div className="tooltip relative">
            <BiHeart />
            <div className="hidden left-0 top-7 ">Favoritar</div>
          </div>
        </button>
      </div>
    </div>
  </div>
);
export default Beer;
