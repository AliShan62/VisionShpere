import { useState } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const branches = ["All", "Lahore", "Karachi", "Islamabad"];
const employees = [
  {
    name: "Ali Shan",
    date: "2024-02-01",
    endTime: "17:00",
    checkOut: "16:30",
    early: "30 min",
    branch: "Lahore",
  },
  {
    name: "Ahmed Khan",
    date: "2024-02-05",
    endTime: "18:00",
    checkOut: "17:45",
    early: "15 min",
    branch: "Karachi",
  },
];

const AttendanceEarlyOutReport = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredEmployees = employees.filter((emp) => {
    const empDate = new Date(emp.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (selectedBranch === "All" || emp.branch === selectedBranch) &&
      (selectedEmployee === "All" || emp.name === selectedEmployee) &&
      (!from || empDate >= from) &&
      (!to || empDate <= to)
    );
  });

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredEmployees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance Report");
    XLSX.writeFile(workbook, "Attendance_Report.xlsx");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Attendance Early-Out Report", 14, 10);

    const tableColumn = ["Name", "Date", "End Time", "Check-Out", "Early"];
    const tableRows = filteredEmployees.map((emp) => [
      emp.name,
      emp.date,
      emp.endTime,
      emp.checkOut,
      emp.early,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("Attendance_Report.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Attendance Early-Out Report
          </h2>
          <div className="flex gap-4">
            <FaFileExcel
              className="text-green-600 text-2xl cursor-pointer"
              onClick={exportToExcel}
            />
            <FaFilePdf
              className="text-red-600 text-2xl cursor-pointer"
              onClick={exportToPDF}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Branch</label>
            <select
              className="border p-2 w-full"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Employee</label>
            <select
              className="border p-2 w-full"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <option value="All">All</option>
              {employees.map((emp, index) => (
                <option key={index} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">From Date</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">To Date</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border text-gray-800">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Name
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Date
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Attendance End Time
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Check-Out Time
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Early
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <tr
                    key={index}
                    className="text-center border-t hover:bg-gray-100"
                  >
                    <td className="border border-gray-300 p-2">{emp.name}</td>
                    <td className="border border-gray-300 p-2">{emp.date}</td>
                    <td className="border border-gray-300 p-2">
                      {emp.endTime}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {emp.checkOut}
                    </td>
                    <td className="border border-gray-300 p-2">{emp.early}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceEarlyOutReport;
