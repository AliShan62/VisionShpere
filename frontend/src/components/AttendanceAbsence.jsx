import { useState } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const branches = ["All", "Lahore", "Karachi", "Islamabad"];
const attendanceRecords = [
  { name: "Ali Shan", date: "2024-02-05", branch: "Lahore" },
  { name: "Ahmed Khan", date: "2024-02-06", branch: "Karachi" },
];

const AttendanceAbsence = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredRecords = attendanceRecords.filter(
    (record) =>
      (selectedBranch === "All" || record.branch === selectedBranch) &&
      (selectedEmployee === "All" || record.name === selectedEmployee) &&
      (!fromDate || record.date >= fromDate) &&
      (!toDate || record.date <= toDate)
  );

  const downloadExcel = () => {
    if (filteredRecords.length === 0) return alert("No data to export!");

    const headers = [["Attendance Date", "Employee Name"]];
    const data = filteredRecords.map((record) => [record.date, record.name]);

    const ws = XLSX.utils.aoa_to_sheet([...headers, ...data]);
    ws["!cols"] = [{ wch: 15 }, { wch: 25 }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance Report");
    XLSX.writeFile(wb, "Attendance_Report.xlsx");
  };

  const downloadPDF = () => {
    if (filteredRecords.length === 0) return alert("No data to export!");
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Attendance Absence", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.autoTable({
      startY: 25,
      head: [["Attendance Date", "Employee Name"]],
      body: filteredRecords.map((record) => [record.date, record.name]),
      theme: "grid",
    });
    doc.save("Attendance_Report.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Attendance Absence{" "}
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
          <table className="w-full border text-gray-800 text-left">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Attendance Date
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Employee Name
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100">
                    <td className="border border-gray-300 p-2 text-left">
                      {record.date}
                    </td>
                    <td className="border border-gray-300 p-2 text-left">
                      {record.name}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="p-3 text-center text-gray-500">
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

export default AttendanceAbsence;
