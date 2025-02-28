import { useContext, useState } from "react";
import {
  // SearchIcon,
  MoonIcon,
  SunIcon,
  // BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "../icons";
import {
  Avatar,
  // Badge,
  // Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext);

  const dispatch = useDispatch(); // Initialize dispatch for Redux actions

  // const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // function handleNotificationsClick() {
  //   setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  // }

  function handleProfileClick(event) {
    event.stopPropagation();
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className="w-full z-40 py-3 bg-green-900 shadow-bottom dark:bg-green-900">
      <div className="w-full flex items-center justify-between h-full px-6 text-white dark:text-white">
        <div>
          {/* <!-- Mobile hamburger --> */}
          <button
            className="-ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={() => dispatch(toggleSidebar())} // Dispatch the Redux action to toggle the sidebar
            aria-label="Menu"
          >
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        {/* <!-- Search input --> */}
        {/* <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div> */}
        <div className="font-bold uppercase font-mono">
          P r e s e n c e T r a c k
        </div>
        <div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            {/* <!-- Theme toggler --> */}
            <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={toggleMode}
                aria-label="Toggle color mode"
              >
                {mode === "dark" ? (
                  <SunIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <MoonIcon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </li>
            {/* <!-- Notifications menu --> */}
            {/* <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> 
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown>
          </li> */}
            {/* <!-- Profile menu --> */}
            <li className="relative">
              <button
                className="rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={handleProfileClick}
                aria-label="Account"
                aria-haspopup="true"
              >
                <Avatar
                  className="align-middle"
                  src="/images/profile_img.jpg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <Dropdown
                align="right"
                isOpen={isProfileMenuOpen}
                onClose={() => setIsProfileMenuOpen(false)}
              >
                <DropdownItem tag="a" href="#" className="text-xl">
                  <span>TanveerORG</span>
                </DropdownItem>
                <DropdownItem tag="a" href="#">
                  <OutlinePersonIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  <span>Account Settings</span>
                </DropdownItem>
                <DropdownItem tag="a" href="#">
                  <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Need Help?</span>
                </DropdownItem>
                <DropdownItem onClick={() => alert("Log out!")}>
                  <OutlineLogoutIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  <span>Log out</span>
                </DropdownItem>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
