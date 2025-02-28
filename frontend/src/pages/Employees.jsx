// import PageTitle from "../components/Typography/PageTitle";
// import { useState, useEffect } from "react";
// import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

// function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editEmployee, setEditEmployee] = useState(null);

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//   });

//   useEffect(() => {
//     const storedEmployees = JSON.parse(localStorage.getItem("employees"));
//     if (storedEmployees) {
//       setEmployees(storedEmployees);
//     }
//   }, []);

//   useEffect(() => {
//     if (employees.length > 0) {
//       localStorage.setItem("employees", JSON.stringify(employees));
//     }
//   }, [employees]);

//   const validate = () => {
//     let valid = true;
//     let validationErrors = {};

//     if (!firstName) {
//       validationErrors.firstName = "First Name is required.";
//       valid = false;
//     }

//     if (!lastName) {
//       validationErrors.lastName = "Last Name is required.";
//       valid = false;
//     }

//     const phoneRegex = /^[0-9]{10}$/; // Simple phone number validation (10 digits)
//     if (!phone || !phoneRegex.test(phone)) {
//       validationErrors.phone =
//         "Phone number is invalid. It should be 10 digits.";
//       valid = false;
//     }

//     setErrors(validationErrors);
//     return valid;
//   };

//   const addEmployee = () => {
//     if (!validate()) return;

//     const newEmployee = {
//       id: employees.length + 1,
//       name: `${firstName} ${lastName}`,
//       phone: phone,
//       code: `ACT-${Math.floor(1000 + Math.random() * 9000)}`,
//     };

//     const updatedEmployees = [...employees, newEmployee];
//     setEmployees(updatedEmployees);
//     setFirstName("");
//     setLastName("");
//     setPhone("");
//     setShowModal(false);
//   };

//   const deleteEmployee = (id) => {
//     const updatedEmployees = employees.filter((employee) => employee.id !== id);
//     setEmployees(updatedEmployees);
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // Update localStorage immediately
//   };

//   const editEmployeeDetails = (employee) => {
//     setFirstName(employee.name.split(" ")[0]);
//     setLastName(employee.name.split(" ")[1]);
//     setPhone(employee.phone);
//     setEditEmployee(employee);
//     setShowModal(true);
//   };

//   const updateEmployee = () => {
//     if (!validate()) return;

//     const updatedEmployees = employees.map((employee) =>
//       employee.id === editEmployee.id
//         ? { ...employee, name: `${firstName} ${lastName}`, phone }
//         : employee
//     );
//     setEmployees(updatedEmployees);
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // Update localStorage immediately
//     setEditEmployee(null);
//     setFirstName("");
//     setLastName("");
//     setPhone("");
//     setShowModal(false);
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
//       {/* Page Title with Add Employee Button */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-6">
//         <PageTitle className="text-2xl font-semibold text-gray-700">
//           Employees
//         </PageTitle>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
//         >
//           Add Employee
//         </button>
//       </div>

//       {/* Employee List */}
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-4 text-gray-700">Employee</th>
//               <th className="p-4 text-gray-700">Phone</th>
//               <th className="p-4 text-gray-700">Activation Code</th>
//               <th className="p-4 text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.length > 0 ? (
//               employees.map((employee) => (
//                 <tr key={employee.id} className="border-b hover:bg-gray-100">
//                   <td className="p-4">{employee.name}</td>
//                   <td className="p-4">{employee.phone}</td>
//                   <td className="p-4">{employee.code}</td>
//                   <td className="p-4 flex space-x-2">
//                     {/* Edit Icon */}
//                     <PencilIcon
//                       onClick={() => editEmployeeDetails(employee)}
//                       className="w-5 h-5 text-yellow-500 cursor-pointer hover:text-yellow-600 transition-all"
//                     />
//                     {/* Delete Icon */}
//                     <TrashIcon
//                       onClick={() => deleteEmployee(employee.id)}
//                       className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-600 transition-all"
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="p-4 text-center text-gray-500">
//                   No employees added yet.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Add or Edit Employee Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h3 className="text-xl font-semibold mb-4">
//               {editEmployee ? "Edit Employee" : "Add New Employee"}
//             </h3>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="w-full p-2 border rounded-md mb-2"
//               />
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm">{errors.firstName}</p>
//               )}

//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="w-full p-2 border rounded-md mb-2"
//               />
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm">{errors.lastName}</p>
//               )}

//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-2 border rounded-md mb-2"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm">{errors.phone}</p>
//               )}
//             </div>

//             {/* Toggle Buttons in One Row */}
//             <div className="flex flex-wrap justify-start gap-4 mb-4">
//               <div className="flex items-center space-x-1">
//                 <label className="text-sm">GEO</label>
//                 <input type="checkbox" className="form-checkbox" />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <label className="text-sm">Real-Time</label>
//                 <input type="checkbox" className="form-checkbox" />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <label className="text-sm">NFC/QR</label>
//                 <input type="checkbox" className="form-checkbox" />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <label className="text-sm">Force QR</label>
//                 <input type="checkbox" className="form-checkbox" />
//               </div>
//             </div>

//             {/* Image Upload */}
//             <div className="mb-4">
//               <label
//                 htmlFor="image-upload"
//                 className="block text-sm font-semibold mb-2"
//               >
//                 Image
//               </label>
//               <input
//                 type="file"
//                 id="image-upload"
//                 className="w-full p-1 border rounded-md"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end items-center space-x-3">
//               <button
//                 onClick={editEmployee ? updateEmployee : addEmployee}
//                 className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-all"
//               >
//                 {editEmployee ? "Update" : "Add "}
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-500 text-white px-2 py-2 rounded-md hover:bg-gray-600 transition-all"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Employees;

import PageTitle from "../components/Typography/PageTitle";
import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/v1/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const validate = () => {
    let valid = true;
    let validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First Name is required.";
      valid = false;
    }

    if (!lastName) {
      validationErrors.lastName = "Last Name is required.";
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      validationErrors.phone =
        "Phone number is invalid. It should be 10 digits.";
      valid = false;
    }

    setErrors(validationErrors);
    return valid;
  };

  const addEmployee = async () => {
    if (!validate()) return;

    const newEmployee = {
      firstName,
      lastName,
      phone,
    };

    try {
      const response = await fetch(
        "http://localhost:9000/api/v1/employees/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmployee),
        }
      );

      if (!response.ok) throw new Error("Failed to add employee");

      setFirstName("");
      setLastName("");
      setPhone("");
      setShowModal(false);
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <PageTitle className="text-2xl font-semibold text-gray-700">
          Employees
        </PageTitle>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          Add Employee
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Employee</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}

              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="flex justify-end items-center space-x-3">
              <button
                onClick={addEmployee}
                className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-all"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-2 py-2 rounded-md hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
