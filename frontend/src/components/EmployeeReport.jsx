import { useState } from "react";
import { FaFileExcel, FaPrint, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx"; // Excel export
import jsPDF from "jspdf"; // PDF export
import "jspdf-autotable"; // AutoTable plugin

const EmployeeReport = () => {
  const branches = ["All", "Lahore", "Karachi", "Islamabad"];
  const employees = [
    {
      firstName: "Ali",
      lastName: "Shan",
      phone: "+923436241328",
      dateAdded: "2025-02-11 09:46:28",
      branch: "Lahore",
    },
    {
      firstName: "Ahmed",
      lastName: "Khan",
      phone: "+923001234567",
      dateAdded: "2025-02-10 14:20:10",
      branch: "Karachi",
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState("All");

  const filteredEmployees = employees.filter(
    (emp) => selectedBranch === "All" || emp.branch === selectedBranch
  );

  // ✅ Function to Download Well-Formatted Excel File
  const downloadExcel = () => {
    if (filteredEmployees.length === 0)
      return alert("No employee data to export!");

    const ws = XLSX.utils.json_to_sheet(filteredEmployees, {
      header: ["firstName", "lastName", "phone", "dateAdded", "branch"],
    });

    // Set Column Widths
    ws["!cols"] = [
      { wch: 15 },
      { wch: 15 },
      { wch: 18 },
      { wch: 22 },
      { wch: 12 },
    ];

    // Create Workbook and Save File
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employee Report");
    XLSX.writeFile(wb, "Employee_Report.xlsx");
  };

  // ✅ Function to Download Well-Formatted PDF
  const downloadPDF = () => {
    if (filteredEmployees.length === 0)
      return alert("No employee data to export!");

    const doc = new jsPDF();
    doc.text("Employee Report", 14, 10);

    const tableColumn = [
      "First Name",
      "Last Name",
      "Phone",
      "Date Added",
      "Branch",
    ];
    const tableRows = filteredEmployees.map((emp) => [
      emp.firstName,
      emp.lastName,
      emp.phone,
      emp.dateAdded,
      emp.branch,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [0, 112, 192], textColor: [255, 255, 255] },
    });

    doc.save("Employee_Report.pdf");
  };

  // ✅ Function to Print the Report (Ensures Correct Formatting)
  const printReport = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Employee Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #007bff; color: white; }
            h2 { text-align: left; margin-top: 0; }
          </style>
        </head>
        <body>
          <h2>Employee Report</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Date Added</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              ${filteredEmployees
                .map(
                  (emp) => `
                <tr>
                  <td>${emp.firstName}</td>
                  <td>${emp.lastName}</td>
                  <td>${emp.phone}</td>
                  <td>${emp.dateAdded}</td>
                  <td>${emp.branch}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl print-container">
        {/* Header Section */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Employee Report
          </h2>
          <div className="flex gap-4">
            <FaFileExcel
              className="text-green-600 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={downloadExcel}
            />
            <FaFilePdf
              className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={downloadPDF}
            />
            <FaPrint
              className="text-gray-600 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={printReport}
            />
          </div>
        </div>

        {/* Branch Selection */}
        <div className="mt-4 flex justify-start">
          <label className="font-medium mr-3 text-gray-600">
            Select Branch:
          </label>
          <select
            className="border border-gray-400 rounded-md p-2"
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

        {/* Table Display */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border border-gray-300 text-gray-800">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Date Added</th>
                <th className="p-3">Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <tr
                    key={index}
                    className="text-center border-t border-gray-300 hover:bg-gray-100"
                  >
                    <td className="p-3">{emp.firstName}</td>
                    <td className="p-3">{emp.lastName}</td>
                    <td className="p-3">{emp.phone}</td>
                    <td className="p-3">{emp.dateAdded}</td>
                    <td className="p-3">{emp.branch}</td>
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

export default EmployeeReport;
