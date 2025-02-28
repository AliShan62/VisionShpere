import { useState } from "react";
import {
  FaUser,
  FaClock,
  FaHistory,
  FaMapMarkerAlt,
  FaRoute,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const reportsData = [
  {
    title: "My Employees",
    icon: <FaUser className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Working Hours",
    icon: <FaClock className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Employee History",
    icon: <FaHistory className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Real Time Path",
    icon: <FaRoute className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Real-Time Location Summary",
    icon: <FaMapMarkerAlt className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Check IN/OUT History",
    icon: <FaCheckCircle className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Attendance Report (Late-In)",
    icon: <FaClock className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Attendance Report (Early-Out)",
    icon: <FaClock className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Attendance Report (Late-In/Early-Out)",
    icon: <FaClock className="text-black text-sm" />,
    canExpand: true,
  },
  {
    title: "Attendance Report (Absence)",
    icon: <FaClock className="text-black text-sm" />,
    canExpand: true,
  },
];

const Reports = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();

  const handleGenerateReport = (reportTitle) => {
    const reportRoutes = {
      "My Employees": "/employee-report",
      "Working Hours": "/working-hours-report",
      "Employee History": "/employee-history-report",
      "Real Time Path": "/real-time-path-report",
      "Real-Time Location Summary": "/RealTimeLocationSummary",
      "Check IN/OUT History": "/checkin-checkout-history",
      "Attendance Report (Late-In)": "/attendance-late-in-report",
      "Attendance Report (Early-Out)": "/attendance-early-out-report",
      "Attendance Report (Late-In/Early-Out)":
        "/attendance-late-in-early-out-report",
      "Attendance Report (Absence)": "/attendance-absence-report",
    };
    navigate(reportRoutes[reportTitle]);
  };

  return (
    <div className="p-6 min-h-screen">
      <div
        className="text-white text-lg font-semibold p-4 rounded-md"
        style={{ backgroundColor: "#046c4e" }}
      >
        Reports
      </div>

      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        {reportsData.map((report, index) => (
          <div key={index} className="border-b last:border-none">
            <div
              className={`flex items-center justify-between p-3 ${
                report.canExpand ? "hover:bg-gray-100 cursor-pointer" : ""
              }`}
              onClick={() =>
                report.canExpand &&
                setExpandedSection(
                  expandedSection === report.title ? null : report.title
                )
              }
            >
              <div className="flex items-center space-x-3">
                <span>{report.icon}</span>
                <span className="text-sm text-gray-800">{report.title}</span>
              </div>
            </div>

            {expandedSection === report.title && report.canExpand && (
              <div className="p-4 bg-gray-50 rounded-lg mt-2 transition-all duration-300 ease-in-out">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {report.title === "Employee History" ? (
                        <>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Name
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Started
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Finished
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Spent
                          </th>
                        </>
                      ) : report.title === "Attendance Report (Late-In)" ||
                        report.title === "Attendance Report (Early-Out)" ? (
                        <>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Name
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Date
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Attendance Start/End Time
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Check-In/Out Time
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Late/Early
                          </th>
                        </>
                      ) : report.title ===
                        "Attendance Report (Late-In/Early-Out)" ? (
                        <>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Name
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Date
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Attendance Type
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Expecting
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Actual
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Diff
                          </th>
                        </>
                      ) : report.title === "Attendance Report (Absence)" ? (
                        <>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Attendance Date
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Employee Name
                          </th>
                        </>
                      ) : (
                        <>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            First Name
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Last Name
                          </th>
                          <th className="border border-gray-300 p-2 text-left text-sm">
                            Phone
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                </table>

                <div className="mt-4 flex">
                  <button
                    onClick={() => handleGenerateReport(report.title)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-auto"
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
