import { FcMenu } from 'react-icons/all';
import ProfileSettings from './ProfileSettings';

const Header = (): JSX.Element => {
  return (
    <nav className="p-1 bg-gray-dark flex items-center justify-between">
      <button type="button">
        <FcMenu className="text-3xl" />
      </button>

      <p>Breja Certa</p>
      <div className="flex">
        <ProfileSettings />
      </div>
      {/* <img src={} alt="" /> */}
    </nav>
  );
};

export default Header;
