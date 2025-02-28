import PageTitle from "../components/Typography/PageTitle";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../components/Footer/Footer";
import { CalendarIcon } from "../icons";

function Adjust() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <PageTitle>Adjust</PageTitle>
      <section>
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <input
              type="hidden"
              id="timeformat"
              value="24"
              className="p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />

            {/* Criteria Section */}
            <fieldset>
              <div className="mb-4">
                <ul className="flex border-b">
                  <li className="-mb-px mr-1">
                    <a
                      className="bg-white dark:bg-gray-800 inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 dark:text-gray-100 font-semibold"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Criteria
                    </a>
                  </li>
                </ul>
              </div>

              {/* Form Fields */}
              <div className="w-full flex space-x-4 my-6">
                <div className="w-full flex">
                  <label
                    htmlFor="dropdown"
                    className="block text-gray-600 dark:text-gray-200 text-lg pr-4 mt-2"
                  >
                    Employee
                  </label>
                  <select
                    id="dropdown"
                    className="w-full px-3 py-2 text-gray-600 border rounded-md focus:outline-none dark:text-gray-200 dark:bg-gray-800"
                  >
                    <option>All</option>
                    <option>Irsa Tehreem</option>
                    <option>Tanveer Hussain</option>
                    <option>Ali Shan</option>
                  </select>
                </div>

                <div className="w-full flex">
                  <label
                    htmlFor="adjustDate"
                    className="block text-gray-600 dark:text-gray-200 text-lg pl-8 pr-4 mt-2"
                  >
                    Date
                  </label>

                  <div className="relative w-full">
                    {/* Date Picker */}
                    <DatePicker
                      id="adjustDate"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="yyyy/MM/dd"
                      className="w-full px-3 py-2 pl-10 border dark:text-gray-200 dark:bg-gray-800 rounded-md focus:outline-none"
                    />
                    {/* Calendar icon inside the input */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-200" />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <br />

            {/* Log Section */}
            <fieldset>
              <div className="mb-4">
                <ul className="flex border-b">
                  <li className="-mb-px mr-1">
                    <h3
                      className="bg-white dark:bg-gray-800 inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 dark:text-gray-100 font-semibold"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      id="adjustLogTitle"
                    >
                      Log
                    </h3>
                  </li>
                </ul>
              </div>

              {/* Log Table */}
              <div className="mt-8 max-h-52 text-gray-600 dark:text-gray-200 overflow-y-auto border rounded-lg">
                <table
                  id="employeeLogsTable"
                  className="table-auto w-full text-center"
                  cellPadding="10"
                  cellSpacing="10"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Checked In</th>
                      <th>Checked Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Irsa Tehreem</td>
                      <td>21</td>
                      <td>3.9</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Tanveer Hussain</td>
                      <td>23</td>
                      <td>3.4</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Ali Shan</td>
                      <td>22</td>
                      <td>3.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>

            {/* Hidden Inputs */}
            <input
              type="hidden"
              name="adjustEmployee"
              id="adjustEmployee"
              value="-1"
            />
            <input
              type="hidden"
              name="adjustSelectedDate"
              id="adjustSelectedDate"
              value="2024/10/12"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Adjust;
