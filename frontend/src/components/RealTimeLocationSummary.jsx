import { FaFileExcel, FaPrint } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const RealTimeLocationSummary = () => {
  const tableData = [
    [
      "37.7749°",
      "-122.4194°",
      "View",
      "San Francisco, CA",
      "10:30 AM",
      "45 mins",
    ],
  ];

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      ["Latitude", "Longitude", "Map", "Address", "Arrival Time", "Time Spent"],
      ...tableData,
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RealTimeLocationSummary");
    XLSX.writeFile(wb, "RealTimeLocationSummary.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Real-Time Location Summary", 10, 10);
    doc.autoTable({
      head: [
        [
          "Latitude",
          "Longitude",
          "Map",
          "Address",
          "Arrival Time",
          "Time Spent",
        ],
      ],
      body: tableData,
    });
    doc.save("RealTimeLocationSummary.pdf");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-green-400">
      <div className="bg-white rounded-2xl w-full max-w-5xl p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-600  mb-5">
            Real-Time Location Summary
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mb-10">
          <div>
            <label className="text-gray-800 font-medium">Branch:</label>
            <select className="ml-2 p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300">
              <option>All</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </div>

          <div>
            <label className="text-gray-800 font-medium">Employee:</label>
            <select className="ml-2 p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300">
              <option>Tanveer Husain</option>
              <option>John Doe</option>
            </select>
          </div>

          <div>
            <label className="text-gray-800 font-medium">Min Accuracy:</label>
            <input
              type="number"
              className="ml-2 p-2 border rounded-lg w-16 shadow-sm focus:ring focus:ring-indigo-300"
              defaultValue="75"
            />
          </div>

          <div>
            <label className="text-gray-800 font-medium">Date:</label>
            <input
              type="date"
              className="ml-2 p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
              defaultValue="2025-02-15"
            />
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
            Show
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-600 text-white text-lg">
                <th className="p-4">Latitude</th>
                <th className="p-4">Longitude</th>
                <th className="p-4">Map</th>
                <th className="p-4">Address</th>
                <th className="p-4">Arrival Time</th>
                <th className="p-4">Time Spent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center bg-gray-100 border-b hover:bg-gray-200">
                <td className="p-4">37.7749°</td>
                <td className="p-4">-122.4194°</td>
                <td className="p-4">
                  <a href="#" className="text-blue-600 font-medium">
                    View
                  </a>
                </td>
                <td className="p-4">San Francisco, CA</td>
                <td className="p-4">10:30 AM</td>
                <td className="p-4">45 mins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center gap-4 mt-6">
          <button
            className="text-green-600 text-2xl cursor-pointer"
            onClick={exportToExcel}
          >
            <FaFileExcel />
          </button>
          <button
            className="text-red-600 text-2xl cursor-pointer"
            onClick={exportToPDF}
          >
            <FaPrint />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeLocationSummary;
