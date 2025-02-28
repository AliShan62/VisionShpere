import { useSelector } from "react-redux";
import SidebarContent from "./SidebarContent";

function DesktopSidebar() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div>
      {isSidebarOpen && (
        <aside className="z-30 flex-shrink-0 w-64 overflow-y-auto bg-green-700 dark:bg-green-700">
          <SidebarContent />
        </aside>
      )}
    </div>
  );
}

export default DesktopSidebar;
