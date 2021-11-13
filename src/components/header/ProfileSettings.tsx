import { Menu } from '@headlessui/react';
import { IoPersonCircleSharp } from 'react-icons/all';

const ProfileSettings = (): JSX.Element => {
  return (
    <Menu as="div" className="relative flex align">
      <Menu.Button>
        <IoPersonCircleSharp className="text-2xl" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-8 bg-gray-light rounded p-2 ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
export default ProfileSettings;
