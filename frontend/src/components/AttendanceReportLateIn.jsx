import { useState } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const branches = ["All", "Lahore", "Karachi", "Islamabad"];
const attendanceRecords = [
  {
    name: "Ali Shan",
    date: "2024-02-05",
    attendanceStart: "09:00 AM",
    checkIn: "09:15 AM",
    late: "15 mins",
    branch: "Lahore",
  },
  {
    name: "Ahmed Khan",
    date: "2024-02-06",
    attendanceStart: "09:00 AM",
    checkIn: "09:30 AM",
    late: "30 mins",
    branch: "Karachi",
  },
];

const AttendanceReportLateIn = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredRecords = attendanceRecords.filter(
    (record) =>
      (selectedBranch === "All" || record.branch === selectedBranch) &&
      (selectedEmployee === "All" || record.name === selectedEmployee)
  );

  const downloadExcel = () => {
    if (filteredRecords.length === 0) return alert("No data to export!");

    const headers = [
      ["Name", "Date", "Attendance Start Time", "Check-In Time", "Late"],
    ];
    const data = filteredRecords.map((record) => [
      record.name,
      record.date,
      record.attendanceStart,
      record.checkIn,
      record.late,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([...headers, ...data]);
    ws["!cols"] = [
      { wch: 20 },
      { wch: 15 },
      { wch: 20 },
      { wch: 20 },
      { wch: 12 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance Report");
    XLSX.writeFile(wb, "Attendance_Report.xlsx");
  };

  const downloadPDF = () => {
    if (filteredRecords.length === 0) return alert("No data to export!");
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Attendance Report (Late-In)", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.autoTable({
      startY: 25,
      head: [
        ["Name", "Date", "Attendance Start Time", "Check-In Time", "Late"],
      ],
      body: filteredRecords.map((record) => [
        record.name,
        record.date,
        record.attendanceStart,
        record.checkIn,
        record.late,
      ]),
      theme: "grid",
    });
    doc.save("Attendance_Report.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Attendance Report (Late-In)
          </h2>
          <div className="flex gap-4">
            <FaFileExcel
              className="text-green-600 text-2xl cursor-pointer"
              onClick={downloadExcel}
            />
            <FaFilePdf
              className="text-red-600 text-2xl cursor-pointer"
              onClick={downloadPDF}
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
              {attendanceRecords.map((record, index) => (
                <option key={index} value={record.name}>
                  {record.name}
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
                  Attendance Start Time
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Check-In Time
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Late
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr
                    key={index}
                    className="text-center border-t hover:bg-gray-100"
                  >
                    <td className="border border-gray-300 p-2">
                      {record.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {record.date}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {record.attendanceStart}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {record.checkIn}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {record.late}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    No attendance records found.
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

export default AttendanceReportLateIn;
