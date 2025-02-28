import { useState, useMemo } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const branches = ["All", "Lahore", "Karachi", "Islamabad"];
const checkInOutData = [
  { name: "Ali Shan", count: 12, branch: "Lahore", date: "2024-02-15" },
  { name: "Ahmed Khan", count: 18, branch: "Karachi", date: "2024-02-16" },
];

const CheckInOutHistory = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredData = useMemo(() => {
    return checkInOutData.filter(
      (emp) =>
        (selectedBranch === "All" || emp.branch === selectedBranch) &&
        (selectedEmployee === "All" || emp.name === selectedEmployee) &&
        (!fromDate || new Date(emp.date) >= new Date(fromDate)) &&
        (!toDate || new Date(emp.date) <= new Date(toDate))
    );
  }, [selectedBranch, selectedEmployee, fromDate, toDate]);

  const totalCheckIns = filteredData.reduce(
    (total, emp) => total + emp.count,
    0
  );

  const downloadFile = (type) => {
    if (filteredData.length === 0) return alert("No data to export!");

    if (type === "excel") {
      const headers = [["Name", "Count"]];
      const data = filteredData.map((emp) => [emp.name, emp.count]);
      data.push(["Total", totalCheckIns]);

      const ws = XLSX.utils.aoa_to_sheet([...headers, ...data]);
      ws["!cols"] = [{ wch: 20 }, { wch: 12 }];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Check_IN_OUT_History");
      XLSX.writeFile(wb, "Check_IN_OUT_History.xlsx");
    } else {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Check IN/OUT History", 105, 15, { align: "center" });
      doc.setFontSize(12);
      doc.autoTable({
        startY: 25,
        head: [["Name", "Count"]],
        body: [
          ...filteredData.map((emp) => [emp.name, emp.count]),
          ["Total", totalCheckIns],
        ],
        theme: "grid",
      });
      doc.save("Check_IN_OUT_History.pdf");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Check IN/OUT History
          </h2>
          <div className="flex gap-4">
            <FaFileExcel
              className="text-green-600 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={() => downloadFile("excel")}
            />
            <FaFilePdf
              className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={() => downloadFile("pdf")}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {[
            {
              label: "Branch",
              value: selectedBranch,
              setter: setSelectedBranch,
              options: branches,
            },
            {
              label: "Employee",
              value: selectedEmployee,
              setter: setSelectedEmployee,
              options: [
                "All",
                ...new Set(checkInOutData.map((emp) => emp.name)),
              ],
            },
          ].map(({ label, value, setter, options }, index) => (
            <div key={index}>
              <label className="block mb-1 text-sm font-medium">{label}</label>
              <select
                className="border p-2 w-full"
                value={value}
                onChange={(e) => setter(e.target.value)}
              >
                {options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          {[
            { label: "From Date", value: fromDate, setter: setFromDate },
            { label: "To Date", value: toDate, setter: setToDate },
          ].map(({ label, value, setter }, index) => (
            <div key={index}>
              <label className="block mb-1 text-sm font-medium">{label}</label>
              <input
                type="date"
                className="border p-2 w-full"
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border text-gray-800">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Name
                </th>
                <th className="border border-gray-300 p-2 text-left text-sm">
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                [...filteredData, { name: "Total", count: totalCheckIns }].map(
                  (emp, index) => (
                    <tr
                      key={index}
                      className="text-left border-t hover:bg-gray-100"
                    >
                      <td className="border border-gray-300 p-2 font-semibold">
                        {emp.name}
                      </td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        {emp.count}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan="2" className="p-3 text-center text-gray-500">
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

export default CheckInOutHistory;
