import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ThemedSuspense from "./components/ThemedSuspense.jsx";
import Page404 from "./pages/404.jsx";

const Layout = lazy(() => import("./containers/Layout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const CreateAccount = lazy(() => import("./pages/CreateAccount.jsx"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword.jsx"));
import EmployeeReport from "./components/EmployeeReport.jsx";
import WorkingHoursReport from "./components/WorkingHoursReport.jsx";
import EmployeeHistoryReport from "./components/EmployeeHistoryReport.jsx";
import RealTimePath from "./components/RealTimePath.jsx";
import RealTimeLocationSummary from "./components/RealTimeLocationSummary.jsx";
import CheckInOutHistory from "./components/CheckInOutHistory";
import AttendanceReportLateIn from "./components/AttendanceReportLateIn.jsx";
import AttendanceEarlyOutReport from "./components/AttendanceEarlyOutReport.jsx";
import AttendanceChecksReport from "./components/AttendanceChecksReport.jsx";
import AttendanceAbsence from "./components/AttendanceAbsence.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/app/*",
    element: <Layout />,
  },
  {
    path: "/404",
    element: <Page404 />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/employee-report",
    element: <EmployeeReport />,
  },
  {
    path: "/working-hours-report",
    element: <WorkingHoursReport />,
  },
  {
    path: "/employee-history-report",
    element: <EmployeeHistoryReport />,
  },
  {
    path: "/real-time-path-report",
    element: <RealTimePath />,
  },
  {
    path: "/RealTimeLocationSummary",
    element: <RealTimeLocationSummary />,
  },
  {
    path: "/checkin-checkout-history",
    element: <CheckInOutHistory />,
  },
  {
    path: "/attendance-late-in-report",
    element: <AttendanceReportLateIn />,
  },
  {
    path: "/attendance-early-out-report",
    element: <AttendanceEarlyOutReport />,
  },
  {
    path: "/attendance-late-in-early-out-report",
    element: <AttendanceChecksReport />,
  },
  {
    path: "/attendance-absence-report",
    element: <AttendanceAbsence />,
  },
]);

function App() {
  return (
    <Suspense fallback={<ThemedSuspense />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
