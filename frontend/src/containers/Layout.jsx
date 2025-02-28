import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../features/sidebar/sidebarSlice.js";
// import { SidebarContext } from "../context/SidebarContext";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));
const Profile = lazy(() => import("../pages/Profile.jsx"));
const Shifts = lazy(() => import("../pages/Shifts.jsx"));
const Branches = lazy(() => import("../pages/Branches.jsx"));
const Employees = lazy(() => import("../pages/Employees.jsx"));
const Reports = lazy(() => import("../pages/Reports.jsx"));
const Subscription = lazy(() => import("../pages/Subscription.jsx"));
const Adjust = lazy(() => import("../pages/Adjust.jsx"));
const Help = lazy(() => import("../pages/Help.jsx"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank.jsx"));

function Layout() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen); // Access the sidebar state from Redux();
  const dispatch = useDispatch();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    // On page load, check if it's desktop (e.g., width >= 1024px)
    if (window.innerWidth >= 1024) {
      dispatch(openSidebar()); // Set sidebar open on desktop
    } else {
      dispatch(closeSidebar()); // Ensure sidebar is closed on mobile
    }
  }, [dispatch]);

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const screenHeight = window.innerHeight;
    setSidebarHeight(screenHeight - headerHeight);
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full">
      <Header />
      <div
        className="flex bg-gray-50 dark:bg-gray-900"
        style={{ height: `${sidebarHeight}px` }}
      >
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="z-30 flex-shrink-0 w-64 bg-green-700 dark:bg-green-700 sticky top-16">
            <Sidebar />
          </aside>
        )}

        {/* Main content area */}
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Navigate to="/app/dashboard" replace />
            <Routes>
              {/* Default route */}
              {/* <Route path="/app" element={<Dashboard />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shifts" element={<Shifts />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/adjust" element={<Adjust />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Profile />} />
              <Route path="/logout" element={<Shifts />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="/blank" element={<Blank />} />
              {/* <Route path="*" element={<Navigate to="/app/404" />} /> */}
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
