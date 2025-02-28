// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react"; // Import useEffect
// import PageTitle from "../components/Typography/PageTitle";
// import Footer from "../components/Footer/Footer";
// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
// import { RxCross1 } from "react-icons/rx";
// import { GoEyeClosed } from "react-icons/go";

// function Shifts() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [expanded, setExpanded] = useState(null);
//   const [shiftSchedules, setShiftSchedules] = useState(() => {
//     const savedShifts = localStorage.getItem("shiftSchedules");
//     return savedShifts ? JSON.parse(savedShifts) : [];
//   });
//   const [editShiftIndex, setEditShiftIndex] = useState(null);

//   // Save shifts to local storage whenever shiftSchedules changes
//   useEffect(() => {
//     localStorage.setItem("shiftSchedules", JSON.stringify(shiftSchedules));
//   }, [shiftSchedules]);

//   const handleAddShift = (newShift) => {
//     if (!newShift.name || !newShift.days || newShift.days.length !== 7) {
//       alert("Invalid shift data!");
//       return;
//     }

//     if (editShiftIndex !== null) {
//       // Update existing shift
//       const updatedShifts = [...shiftSchedules];
//       updatedShifts[editShiftIndex] = newShift;
//       setShiftSchedules(updatedShifts);
//       setEditShiftIndex(null);
//     } else {
//       // Add new shift
//       setShiftSchedules([...shiftSchedules, newShift]);
//     }

//     setModalOpen(false);
//   };

//   const handleEditShift = (index) => {
//     setEditShiftIndex(index);
//     setModalOpen(true);
//   };

//   const handleDeleteShift = (index) => {
//     if (window.confirm("Are you sure you want to delete this shift?")) {
//       setShiftSchedules(shiftSchedules.filter((_, i) => i !== index));
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <PageTitle>Shifts</PageTitle>
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//           onClick={() => {
//             setEditShiftIndex(null);
//             setModalOpen(true);
//           }}
//         >
//           Add New Shift
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-700 text-center">
//           Working Days
//         </h2>

//         {shiftSchedules.map((shift, index) => (
//           <div key={index} className="mt-4">
//             <div
//               onClick={() => setExpanded(expanded === index ? null : index)}
//               className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200"
//             >
//               <div className="flex items-center space-x-2 cursor-pointer">
//                 {expanded === index ? (
//                   <GoEyeClosed className="w-5 h-5 text-green-500" />
//                 ) : (
//                   <EyeIcon className="w-5 h-5 text-green-500" />
//                 )}

//                 <span className="text-green-500 font-medium">{shift.name}</span>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handleEditShift(index)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <PencilIcon className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteShift(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <TrashIcon className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {expanded === index && (
//               <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-2 overflow-x-auto">
//                 <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//                   <thead>
//                     <tr className="bg-green-900 text-white text-left">
//                       <th className="px-4 py-2">#</th>
//                       <th className="px-4 py-2">Attendance Start</th>
//                       <th className="px-4 py-2">Attendance End</th>
//                       <th className="px-4 py-2">Break Start</th>
//                       <th className="px-4 py-2">Break End</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {shift.days.map((shiftDay, dayIndex) => (
//                       <tr
//                         key={dayIndex}
//                         className={
//                           shiftDay.dayOff
//                             ? "bg-blue-400 text-white font-semibold"
//                             : "bg-white text-gray-900 hover:bg-green-200 transition"
//                         }
//                       >
//                         <td className="px-4 py-3 border-b">{shiftDay.day}</td>
//                         {shiftDay.dayOff ? (
//                           <td colSpan="4" className="text-center font-semibold">
//                             Day Off
//                           </td>
//                         ) : (
//                           <>
//                             <td className="px-4 py-3 border-b">
//                               {shiftDay.start}
//                             </td>
//                             <td className="px-4 py-3 border-b">
//                               {shiftDay.end}
//                             </td>
//                             <td className="px-4 py-3 border-b">
//                               {shiftDay.breakStart}
//                             </td>
//                             <td className="px-4 py-3 border-b">
//                               {shiftDay.breakEnd}
//                             </td>
//                           </>
//                         )}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <ShiftModal
//         isOpen={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         onAddShift={handleAddShift}
//         editShift={
//           editShiftIndex !== null ? shiftSchedules[editShiftIndex] : null
//         }
//       />

//       <Footer />
//     </>
//   );
// }

// const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
//   const [expanded, setExpanded] = useState(null);
//   const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
//   const [days, setDays] = useState(
//     editShift
//       ? editShift.days
//       : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
//           day,
//           expanded: false,
//           dayOff: false,
//           start: "",
//           end: "",
//           breakStart: "",
//           breakEnd: "",
//         }))
//   );

//   const handleSave = () => {
//     if (!shiftName.trim()) {
//       alert("Shift Name is required!");
//       return;
//     }
//     onAddShift({ name: shiftName, days });
//     setShiftName("");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center overflow-y-scroll z-50 pt-24">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] max-h-[80vh] flex flex-col overflow-hidden">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">New Shift</h2>
//           <RxCross1 className="ml-auto cursor-pointer" onClick={onClose} />
//         </div>

//         <label className="block text-gray-700 mb-2">Shift Name</label>
//         <input
//           type="text"
//           value={shiftName}
//           onChange={(e) => setShiftName(e.target.value)}
//           className="w-full p-2 border rounded mb-4 outline-none"
//           placeholder="Enter shift name"
//         />

//         {/* Scrollable content */}
//         <div className="flex-1 overflow-y-auto pr-2 max-h-[50vh]">
//           {days.map((day, index) => (
//             <div key={index} className="pb-2">
//               <div
//                 className="flex items-center justify-between p-3 cursor-pointer bg-gray-100 rounded-md"
//                 onClick={() => setExpanded(expanded === index ? null : index)}
//               >
//                 <div className="flex items-center space-x-2">
//                   <span className="text-lg">📅</span>
//                   <span>{day.day}</span>
//                 </div>
//                 <span>{expanded === index ? "▲" : "▼"}</span>
//               </div>
//               {expanded === index && (
//                 <div className="p-3 bg-gray-50 rounded-md overflow-y-auto max-h-[200px]">
//                   <label className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={day.dayOff}
//                       onChange={() =>
//                         setDays(
//                           days.map((d, i) =>
//                             i === index ? { ...d, dayOff: !d.dayOff } : d
//                           )
//                         )
//                       }
//                     />
//                     <span>Day Off?</span>
//                   </label>
//                   {!day.dayOff && (
//                     <div className="mt-2 space-y-4">
//                       {/* Attendance Start & End on the same line */}
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block">Attendance Start</label>
//                           <input
//                             type="time"
//                             value={day.start}
//                             onChange={(e) =>
//                               setDays(
//                                 days.map((d, j) =>
//                                   j === index
//                                     ? { ...d, start: e.target.value }
//                                     : d
//                                 )
//                               )
//                             }
//                             className="w-full p-2 border rounded"
//                           />
//                         </div>
//                         <div>
//                           <label className="block">Attendance End</label>
//                           <input
//                             type="time"
//                             value={day.end}
//                             onChange={(e) =>
//                               setDays(
//                                 days.map((d, j) =>
//                                   j === index
//                                     ? { ...d, end: e.target.value }
//                                     : d
//                                 )
//                               )
//                             }
//                             className="w-full p-2 border rounded"
//                           />
//                         </div>
//                       </div>

//                       {/* Break Start & End on a separate line */}
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block">Break Start</label>
//                           <input
//                             type="time"
//                             value={day.breakStart}
//                             onChange={(e) =>
//                               setDays(
//                                 days.map((d, j) =>
//                                   j === index
//                                     ? { ...d, breakStart: e.target.value }
//                                     : d
//                                 )
//                               )
//                             }
//                             className="w-full p-2 border rounded"
//                           />
//                         </div>
//                         <div>
//                           <label className="block">Break End</label>
//                           <input
//                             type="time"
//                             value={day.breakEnd}
//                             onChange={(e) =>
//                               setDays(
//                                 days.map((d, j) =>
//                                   j === index
//                                     ? { ...d, breakEnd: e.target.value }
//                                     : d
//                                 )
//                               )
//                             }
//                             className="w-full p-2 border rounded"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-4 flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shifts;



// // Shifts.js
// import { useState, useEffect } from "react";
// import PageTitle from "../components/Typography/PageTitle";
// import Footer from "../components/Footer/Footer";
// import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
// import { GoEyeClosed } from "react-icons/go";
// import ShiftModal from "../components/ShiftModal"; // Import the modal component

// function Shifts() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [expanded, setExpanded] = useState(null);
//   const [shiftSchedules, setShiftSchedules] = useState(() => {
//     const savedShifts = localStorage.getItem("shiftSchedules");
//     return savedShifts ? JSON.parse(savedShifts) : [];
//   });
//   const [editShiftIndex, setEditShiftIndex] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("shiftSchedules", JSON.stringify(shiftSchedules));
//   }, [shiftSchedules]);

//   const handleAddShift = (newShift) => {
//     if (!newShift.name || !newShift.days || newShift.days.length !== 7) {
//       alert("Invalid shift data!");
//       return;
//     }

//     if (editShiftIndex !== null) {
//       const updatedShifts = [...shiftSchedules];
//       updatedShifts[editShiftIndex] = newShift;
//       setShiftSchedules(updatedShifts);
//       setEditShiftIndex(null);
//     } else {
//       setShiftSchedules([...shiftSchedules, newShift]);
//     }

//     setModalOpen(false);
//   };

//   const handleEditShift = (index) => {
//     setEditShiftIndex(index);
//     setModalOpen(true);
//   };

//   const handleDeleteShift = (index) => {
//     if (window.confirm("Are you sure you want to delete this shift?")) {
//       setShiftSchedules(shiftSchedules.filter((_, i) => i !== index));
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <PageTitle>Shifts</PageTitle>
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//           onClick={() => {
//             setEditShiftIndex(null);
//             setModalOpen(true);
//           }}
//         >
//           Add New Shift
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-700 text-center">
//           Working Days
//         </h2>

//         {shiftSchedules.map((shift, index) => (
//           <div key={index} className="mt-4">
//             <div
//               onClick={() => setExpanded(expanded === index ? null : index)}
//               className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200"
//             >
//               <div className="flex items-center space-x-2 cursor-pointer">
//                 {expanded === index ? (
//                   <GoEyeClosed className="w-5 h-5 text-green-500" />
//                 ) : (
//                   <EyeIcon className="w-5 h-5 text-green-500" />
//                 )}
//                 <span className="text-green-500 font-medium">{shift.name}</span>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handleEditShift(index)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <PencilIcon className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteShift(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <TrashIcon className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {expanded === index && (
//               <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-2 overflow-x-auto">
//                 <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//                   <thead>
//                     <tr className="bg-green-900 text-white text-left">
//                       <th className="px-4 py-2">#</th>
//                       <th className="px-4 py-2">Attendance Start</th>
//                       <th className="px-4 py-2">Attendance End</th>
//                       <th className="px-4 py-2">Break Start</th>
//                       <th className="px-4 py-2">Break End</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {shift.days.map((shiftDay, dayIndex) => (
//                       <tr
//                         key={dayIndex}
//                         className={
//                           shiftDay.dayOff
//                             ? "bg-green-300 text-white font-semibold"
//                             : "bg-white text-gray-900 hover:bg-green-200 transition"
//                         }
//                       >
//                         <td className="px-4 py-3 border-b">{shiftDay.day}</td>
//                         {shiftDay.dayOff ? (
//                           <td colSpan="4" className="text-center font-semibold">
//                             Day Off
//                           </td>
//                         ) : (
//                           <>
//                             <td className="px-4 py-3 border-b">{shiftDay.start}</td>
//                             <td className="px-4 py-3 border-b">{shiftDay.end}</td>
//                             <td className="px-4 py-3 border-b">{shiftDay.breakStart}</td>
//                             <td className="px-4 py-3 border-b">{shiftDay.breakEnd}</td>
//                           </>
//                         )}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <ShiftModal
//         isOpen={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         onAddShift={handleAddShift}
//         editShift={editShiftIndex !== null ? shiftSchedules[editShiftIndex] : null}
//       />

//       <Footer />
//     </>
//   );
// }

// export default Shifts;

// Shifts.js
import { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import Footer from "../components/Footer/Footer";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { GoEyeClosed } from "react-icons/go";
import ShiftModal from "../components/ShiftModal"; // Import the modal component

function Shifts() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [shiftSchedules, setShiftSchedules] = useState(() => {
    const savedShifts = localStorage.getItem("shiftSchedules");
    return savedShifts ? JSON.parse(savedShifts) : [];
  });
  const [editShiftIndex, setEditShiftIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("shiftSchedules", JSON.stringify(shiftSchedules));
  }, [shiftSchedules]);

  const handleAddShift = (newShift) => {
    // Check if the shift name is already taken
    const isDuplicate = shiftSchedules.some(shift => shift.name === newShift.name);

    if (!newShift.name || !newShift.days || newShift.days.length !== 7) {
      alert("Invalid shift data!");
      return;
    }

    if (isDuplicate) {
      alert("Shift name must be unique!");
      return;
    }

    if (editShiftIndex !== null) {
      const updatedShifts = [...shiftSchedules];
      updatedShifts[editShiftIndex] = newShift;
      setShiftSchedules(updatedShifts);
      setEditShiftIndex(null);
    } else {
      setShiftSchedules([...shiftSchedules, newShift]);
    }

    setModalOpen(false);
  };

  const handleEditShift = (index) => {
    setEditShiftIndex(index);
    setModalOpen(true);
  };

  const handleDeleteShift = (index) => {
    if (window.confirm("Are you sure you want to delete this shift?")) {
      setShiftSchedules(shiftSchedules.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <PageTitle>Shifts</PageTitle>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          onClick={() => {
            setEditShiftIndex(null);
            setModalOpen(true);
          }}
        >
          Add New Shift
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 text-center">
          Working Days
        </h2>

        {shiftSchedules.map((shift, index) => (
          <div key={index} className="mt-4">
            <div
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                {expanded === index ? (
                  <GoEyeClosed className="w-5 h-5 text-green-500" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-green-500" />
                )}
                <span className="text-green-500 font-medium">{shift.name}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditShift(index)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteShift(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {expanded === index && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-2 overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green-900 text-white text-left">
                      <th className="px-4 py-2">#</th>
                      <th className="px-4 py-2">Attendance Start</th>
                      <th className="px-4 py-2">Attendance End</th>
                      <th className="px-4 py-2">Break Start</th>
                      <th className="px-4 py-2">Break End</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shift.days.map((shiftDay, dayIndex) => (
                      <tr
                        key={dayIndex}
                        className={
                          shiftDay.dayOff
                            ? "bg-green-300 text-white font-semibold"
                            : "bg-white text-gray-900 hover:bg-green-200 transition"
                        }
                      >
                        <td className="px-4 py-3 border-b">{shiftDay.day}</td>
                        {shiftDay.dayOff ? (
                          <td colSpan="4" className="text-center font-semibold">
                            Day Off
                          </td>
                        ) : (
                          <>
                            <td className="px-4 py-3 border-b">{shiftDay.start}</td>
                            <td className="px-4 py-3 border-b">{shiftDay.end}</td>
                            <td className="px-4 py-3 border-b">{shiftDay.breakStart}</td>
                            <td className="px-4 py-3 border-b">{shiftDay.breakEnd}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <ShiftModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddShift={handleAddShift}
        editShift={editShiftIndex !== null ? shiftSchedules[editShiftIndex] : null}
      />

      <Footer />
    </>
  );
}

export default Shifts;
