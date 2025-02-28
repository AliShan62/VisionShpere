import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import { useSelector } from "react-redux";

function Sidebar() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isMobile = window.innerWidth < 1024; // Adjust based on your breakpoint
  const isDesktopSidebarOpen = isMobile ? isSidebarOpen : true; // Keep desktop sidebar always open
  return (
    <div>
      {isMobile && isSidebarOpen && (
        <MobileSidebar /> // Only show on mobile
      )}
      {isDesktopSidebarOpen && (
        <DesktopSidebar /> // Always visible on desktop
      )}
    </div>
  );
}

export default Sidebar;
