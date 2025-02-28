import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function Main({ children }) {
  const location = useLocation();
  return (
    <main className={`w-full h-full overflow-y-auto`}>
      <div
        className={`container grid mx-auto ${
          location.pathname === "/app/dashboard" ? "" : "px-6"
        }`}
      >
        {children}
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
