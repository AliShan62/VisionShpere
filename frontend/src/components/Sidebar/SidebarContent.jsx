import routes from "../../routes/sidebar";
import { NavLink, Route, Routes } from "react-router-dom";
import * as Icons from "../../icons";
import PropTypes from "prop-types";
// import SidebarSubmenu from "./SidebarSubmenu";
// import { Link } from "react-router-dom";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

function SidebarContent() {
  return (
    <div className="py-4 text-white dark:text-white overflow-y-auto">
      <ul className="">
        {routes.map(
          (route) => (
            // route.routes ? (
            //   <SidebarSubmenu route={route} key={route.name} />
            // ) : (
            <li className="relative pt-1 px-6" key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `rounded-md py-3 px-6 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-white bg-green-900 dark:text-gray-100"
                      : "hover:bg-gray-600 dark:hover:text-gray-200"
                  }`
                }
              >
                <Routes>
                  <Route path={route.path}></Route>
                </Routes>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
          // )
        )}
      </ul>
    </div>
  );
}

export default SidebarContent;
