import { useState } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const branches = ["All", "Lahore", "Karachi", "Islamabad"];
const employees = [
  { firstName: "Ali", lastName: "Shan", hoursWorked: 8, branch: "Lahore" },
  { firstName: "Ahmed", lastName: "Khan", hoursWorked: 9, branch: "Karachi" },
];

const WorkingHoursReport = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredEmployees = employees.filter(
    (emp) =>
      (selectedBranch === "All" || emp.branch === selectedBranch) &&
      (selectedEmployee === "All" ||
        `${emp.firstName} ${emp.lastName}` === selectedEmployee)
  );

  const downloadExcel = () => {
    if (filteredEmployees.length === 0) return alert("No data to export!");

    const headers = [["First Name", "Last Name", "Hours Worked", "Branch"]];
    const data = filteredEmployees.map((emp) => [
      emp.firstName,
      emp.lastName,
      emp.hoursWorked,
      emp.branch,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([...headers, ...data]);
    ws["!cols"] = [{ wch: 15 }, { wch: 15 }, { wch: 18 }, { wch: 12 }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Working Hours Report");
    XLSX.writeFile(wb, "Working_Hours_Report.xlsx");
  };

  const downloadPDF = () => {
    if (filteredEmployees.length === 0) return alert("No data to export!");
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Working Hours Report", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.autoTable({
      startY: 25,
      head: [["First Name", "Last Name", "Hours Worked", "Branch"]],
      body: filteredEmployees.map((emp) => [
        emp.firstName,
        emp.lastName,
        emp.hoursWorked,
        emp.branch,
      ]),
      theme: "grid",
    });
    doc.save("Working_Hours_Report.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Working Hours Report
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
              {employees.map((emp, index) => (
                <option key={index} value={`${emp.firstName} ${emp.lastName}`}>
                  {emp.firstName} {emp.lastName}
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
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Hours Worked</th>
                <th className="p-3">Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <tr
                    key={index}
                    className="text-center border-t hover:bg-gray-100"
                  >
                    <td className="p-3">{emp.firstName}</td>
                    <td className="p-3">{emp.lastName}</td>
                    <td className="p-3">{emp.hoursWorked}</td>
                    <td className="p-3">{emp.branch}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
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

export default WorkingHoursReport;
