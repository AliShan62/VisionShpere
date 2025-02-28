// // import { useState, useEffect } from "react";
// // import { RxCross1 } from "react-icons/rx";
// // import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Dropdown icons

// // const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
// //   const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
// //   const [activeDay, setActiveDay] = useState(null);
// //   const [days, setDays] = useState(
// //     editShift
// //       ? editShift.days
// //       : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
// //           day,
// //           dayOff: false,
// //           start: "",
// //           end: "",
// //           breakStart: "",
// //           breakEnd: "",
// //         }))
// //   );

// //   useEffect(() => {
// //     if (editShift) {
// //       setShiftName(editShift.name);
// //       setDays(editShift.days);
// //     }
// //   }, [editShift]);

// //   // Prevent body scroll when modal is open
// //   useEffect(() => {
// //     if (isOpen) {
// //       document.body.style.overflow = "hidden"; // Disable body scroll
// //     } else {
// //       document.body.style.overflow = "auto"; // Enable body scroll
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto"; // Reset when component unmounts
// //     };
// //   }, [isOpen]);

// //   const handleDayChange = (index, field, value) => {
// //     const updatedDays = [...days];
// //     updatedDays[index][field] = value;
// //     setDays(updatedDays);
// //   };

// //   const toggleDay = (index) => {
// //     setActiveDay(activeDay === index ? null : index);
// //   };

// //   const handleSave = () => {
// //     if (!shiftName.trim()) {
// //       alert("Shift Name is required!");
// //       return;
// //     }
// //     onAddShift({ name: shiftName, days });
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-lg font-bold">{editShift ? "Edit Shift" : "New Shift"}</h2>
// //           <RxCross1 className="cursor-pointer text-gray-600" onClick={onClose} />
// //         </div>

// //         {/* Shift Name */}
// //         <div className="mb-4">
// //           <label className="block text-gray-700 font-medium mb-1">Shift Name</label>
// //           <input
// //             type="text"
// //             value={shiftName}
// //             onChange={(e) => setShiftName(e.target.value)}
// //             className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
// //             placeholder="Enter shift name"
// //           />
// //         </div>

// //         {/* Days of the Week (Accordion) */}
// //         <div className="mt-4">
         
// //           <div className="border border-gray-300 rounded-lg overflow-hidden max-h-[50vh] overflow-y-auto">
// //             {days.map((day, index) => (
// //               <div key={index} className="border-b">
// //                 {/* Day Header with Dropdown Toggle */}
// //                 <div
// //                   className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
// //                   onClick={() => toggleDay(index)}
// //                 >
// //                   <span className="font-medium">{day.day}</span>
// //                   <span>{activeDay === index ? <FaChevronUp /> : <FaChevronDown />}</span>
// //                 </div>

// //                 {/* Day Settings (Visible when Active) */}
// //                 {activeDay === index && (
// //                   <div className="p-4 bg-white max-h-48 overflow-y-auto">
// //                     <div className="flex items-center mb-2">
// //                       <label className="mr-2 text-gray-700 font-medium">Day Off:</label>
// //                       <input
// //                         type="checkbox"
// //                         checked={day.dayOff}
// //                         onChange={() => handleDayChange(index, "dayOff", !day.dayOff)}
// //                         className="cursor-pointer"
// //                       />
// //                     </div>

// //                     {/* Shift Timings */}
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                       <div>
// //                         <label className="block text-gray-700 font-medium mb-1">Start Time</label>
// //                         <input
// //                           type="time"
// //                           value={day.dayOff ? "" : day.start}
// //                           onChange={(e) => handleDayChange(index, "start", e.target.value)}
// //                           disabled={day.dayOff}
// //                           className="w-full p-1 border rounded-md outline-none"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-gray-700 font-medium mb-1">End Time</label>
// //                         <input
// //                           type="time"
// //                           value={day.dayOff ? "" : day.end}
// //                           onChange={(e) => handleDayChange(index, "end", e.target.value)}
// //                           disabled={day.dayOff}
// //                           className="w-full p-1 border rounded-md outline-none"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-gray-700 font-medium mb-1">Break Start</label>
// //                         <input
// //                           type="time"
// //                           value={day.dayOff ? "" : day.breakStart}
// //                           onChange={(e) => handleDayChange(index, "breakStart", e.target.value)}
// //                           disabled={day.dayOff}
// //                           className="w-full p-1 border rounded-md outline-none"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-gray-700 font-medium mb-1">Break End</label>
// //                         <input
// //                           type="time"
// //                           value={day.dayOff ? "" : day.breakEnd}
// //                           onChange={(e) => handleDayChange(index, "breakEnd", e.target.value)}
// //                           disabled={day.dayOff}
// //                           className="w-full p-1 border rounded-md outline-none"
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Save Button */}
// //         <div className="mt-6 flex justify-end">
// //           <button
// //             onClick={handleSave}
// //             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
// //           >
// //             {editShift ? "Update Shift" : "Save Shift"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShiftModal;


// import { useState, useEffect } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
//   const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
//   const [activeDay, setActiveDay] = useState(null);
//   const [days, setDays] = useState(
//     editShift
//       ? editShift.days
//       : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
//           day,
//           dayOff: false,
//           start: "",
//           end: "",
//           breakStart: "",
//           breakEnd: "",
//         }))
//   );

//   useEffect(() => {
//     if (editShift) {
//       setShiftName(editShift.name);
//       setDays(editShift.days);
//     }
//   }, [editShift]);

//   const handleDayChange = (index, field, value) => {
//     const updatedDays = [...days];
//     updatedDays[index][field] = value;
//     setDays(updatedDays);
//   };

//   const toggleDay = (index) => {
//     setActiveDay(activeDay === index ? null : index);
//   };

//   const handleSave = () => {
//     if (!shiftName.trim()) {
//       alert("Shift Name is required!");
//       return;
//     }
//     onAddShift({ name: shiftName, days });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl h-auto overflow-auto max-h-[80vh]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">{editShift ? "Edit Shift" : "New Shift"}</h2>
//           <RxCross1 className="cursor-pointer text-gray-600" onClick={onClose} />
//         </div>

//         {/* Shift Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Shift Name</label>
//           <input
//             type="text"
//             value={shiftName}
//             onChange={(e) => setShiftName(e.target.value)}
//             className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
//             placeholder="Enter shift name"
//           />
//         </div>

//         {/* Days of the Week (Accordion) */}
//         <div className="mt-4">
//           {days.map((day, index) => (
//             <div key={index} className="border-b">
//               <div
//                 className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
//                 onClick={() => toggleDay(index)}
//               >
//                 <span className="font-medium">{day.day}</span>
//                 <span>{activeDay === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//               </div>

//               {activeDay === index && (
//                 <div className="p-4 bg-white">
//                   <div className="flex items-center mb-2">
//                     <label className="mr-2 text-gray-700 font-medium">Day Off:</label>
//                     <input
//                       type="checkbox"
//                       checked={day.dayOff}
//                       onChange={() => handleDayChange(index, "dayOff", !day.dayOff)}
//                       className="cursor-pointer"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Start Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.start}
//                         onChange={(e) => handleDayChange(index, "start", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">End Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.end}
//                         onChange={(e) => handleDayChange(index, "end", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break Start</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakStart}
//                         onChange={(e) => handleDayChange(index, "breakStart", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break End</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakEnd}
//                         onChange={(e) => handleDayChange(index, "breakEnd", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//           >
//             {editShift ? "Update Shift" : "Save Shift"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShiftModal;

// import { useState, useEffect } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
//   const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
//   const [activeDay, setActiveDay] = useState(null);
//   const [days, setDays] = useState(
//     editShift
//       ? editShift.days
//       : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
//           day,
//           dayOff: false,
//           start: "",
//           end: "",
//           breakStart: "",
//           breakEnd: "",
//         }))
//   );

//   useEffect(() => {
//     if (editShift) {
//       setShiftName(editShift.name);
//       setDays(editShift.days);
//     }
//   }, [editShift]);

//   const handleDayChange = (index, field, value) => {
//     const updatedDays = [...days];
//     updatedDays[index][field] = value;
//     setDays(updatedDays);
//   };

//   const toggleDay = (index) => {
//     setActiveDay(activeDay === index ? null : index);
//   };

//   const handleSave = () => {
//     if (!shiftName.trim()) {
//       alert("Shift Name is required!");
//       return;
//     }
//     onAddShift({ name: shiftName, days });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl h-auto overflow-y-auto max-h-[80vh]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">{editShift ? "Edit Shift" : "New Shift"}</h2>
//           <RxCross1 className="cursor-pointer text-gray-600" onClick={onClose} />
//         </div>

//         {/* Shift Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Shift Name</label>
//           <input
//             type="text"
//             value={shiftName}
//             onChange={(e) => setShiftName(e.target.value)}
//             className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
//             placeholder="Enter shift name"
//           />
//         </div>

//         {/* Days of the Week (Accordion) */}
//         <div className="mt-4">
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className={`border-b ${day.dayOff ? "bg-green-100" : ""}`}
//             >
//               <div
//                 className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
//                 onClick={() => toggleDay(index)}
//               >
//                 <span className="font-medium">{day.day}</span>
//                 <span>{activeDay === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//               </div>

//               {activeDay === index && (
//                 <div className="p-4 bg-white">
//                   <div className="flex items-center mb-2">
//                     <label className="mr-2 text-gray-700 font-medium">Day Off:</label>
//                     <input
//                       type="checkbox"
//                       checked={day.dayOff}
//                       onChange={() => handleDayChange(index, "dayOff", !day.dayOff)}
//                       className="cursor-pointer"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Start Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.start}
//                         onChange={(e) => handleDayChange(index, "start", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">End Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.end}
//                         onChange={(e) => handleDayChange(index, "end", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break Start</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakStart}
//                         onChange={(e) => handleDayChange(index, "breakStart", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break End</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakEnd}
//                         onChange={(e) => handleDayChange(index, "breakEnd", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//           >
//             {editShift ? "Update Shift" : "Save Shift"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShiftModal;


// import { useState, useEffect } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
//   const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
//   const [activeDay, setActiveDay] = useState(null);
//   const [days, setDays] = useState(
//     editShift
//       ? editShift.days
//       : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
//           day,
//           dayOff: false,
//           start: "",
//           end: "",
//           breakStart: "",
//           breakEnd: "",
//         }))
//   );

//   useEffect(() => {
//     if (editShift) {
//       setShiftName(editShift.name);
//       setDays(editShift.days);
//     }
//   }, [editShift]);

//   const handleDayChange = (index, field, value) => {
//     const updatedDays = [...days];
//     updatedDays[index][field] = value;
//     setDays(updatedDays);
//   };

//   const toggleDay = (index) => {
//     setActiveDay(activeDay === index ? null : index);
//   };

//   const handleSave = () => {
//     if (!shiftName.trim()) {
//       alert("Shift Name is required!");
//       return;
//     }
//     onAddShift({ name: shiftName, days });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl h-auto overflow-y-auto max-h-[80vh]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">{editShift ? "Edit Shift" : "New Shift"}</h2>
//           <RxCross1 className="cursor-pointer text-gray-600" onClick={onClose} />
//         </div>

//         {/* Shift Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Shift Name</label>
//           <input
//             type="text"
//             value={shiftName}
//             onChange={(e) => setShiftName(e.target.value)}
//             className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
//             placeholder="Enter shift name"
//           />
//         </div>

//         {/* Days of the Week (Accordion) */}
//         <div className="mt-4">
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className={`border-b ${day.dayOff ? "bg-green-200" : ""}`}
//             >
//               <div
//                 className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
//                 onClick={() => toggleDay(index)}
//               >
//                 <span className="font-medium">{day.day}</span>
//                 <span>{activeDay === index ? <FaChevronUp /> : <FaChevronDown />}</span>
//               </div>

//               {activeDay === index && (
//                 <div className="p-4 bg-white">
//                   <div className="flex items-center mb-2">
//                     <label className="mr-2 text-gray-700 font-medium">Day Off:</label>
//                     <input
//                       type="checkbox"
//                       checked={day.dayOff}
//                       onChange={() => handleDayChange(index, "dayOff", !day.dayOff)}
//                       className="cursor-pointer"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Start Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.start}
//                         onChange={(e) => handleDayChange(index, "start", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">End Time</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.end}
//                         onChange={(e) => handleDayChange(index, "end", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break Start</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakStart}
//                         onChange={(e) => handleDayChange(index, "breakStart", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-1">Break End</label>
//                       <input
//                         type="time"
//                         value={day.dayOff ? "" : day.breakEnd}
//                         onChange={(e) => handleDayChange(index, "breakEnd", e.target.value)}
//                         disabled={day.dayOff}
//                         className="w-full p-1 border rounded-md outline-none"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//           >
//             {editShift ? "Update Shift" : "Save Shift"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShiftModal;

import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShiftModal = ({ isOpen, onClose, onAddShift, editShift }) => {
  const [shiftName, setShiftName] = useState(editShift ? editShift.name : "");
  const [activeDay, setActiveDay] = useState(null);
  const [days, setDays] = useState(
    editShift
      ? editShift.days
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
          day,
          dayOff: false,
          start: "",
          end: "",
          breakStart: "",
          breakEnd: "",
        }))
  );

  useEffect(() => {
    if (editShift) {
      setShiftName(editShift.name);
      setDays(editShift.days);
    }
  }, [editShift]);

  const handleDayChange = (index, field, value) => {
    const updatedDays = [...days];
    updatedDays[index][field] = value;
    setDays(updatedDays);
  };

  const toggleDay = (index) => {
    setActiveDay(activeDay === index ? null : index);
  };

  const handleSave = () => {
    if (!shiftName.trim()) {
      alert("Shift Name is required!");
      return;
    }
    onAddShift({ name: shiftName, days });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl h-auto overflow-y-auto max-h-[80vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{editShift ? "Edit Shift" : "New Shift"}</h2>
          <RxCross1 className="cursor-pointer text-gray-600" onClick={onClose} />
        </div>

        {/* Shift Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-small mb-1">Shift Name</label>
          <input
            type="text"
            value={shiftName}
            onChange={(e) => setShiftName(e.target.value)}
            className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
            placeholder="Enter shift name"
          />
        </div>

        {/* Days of the Week (Accordion) */}
        <div className="mt-4">
          {days.map((day, index) => (
            <div
              key={index}
              className={`border-b ${day.dayOff ? "bg-green-200" : ""}`}
            >
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
                onClick={() => toggleDay(index)}
              >
                <span className="font-small">{day.day}</span>
                <span>{activeDay === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>

              {activeDay === index && (
                <div className="p-4 bg-white">
                  <div className="flex items-center mb-2">
                    <label className="mr-2 text-gray-700 font-small">Day Off:</label>
                    <input
                      type="checkbox"
                      checked={day.dayOff}
                      onChange={() => handleDayChange(index, "dayOff", !day.dayOff)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-small mb-1">Start Time</label>
                      <input
                        type="time"
                        value={day.dayOff ? "" : day.start}
                        onChange={(e) => handleDayChange(index, "start", e.target.value)}
                        disabled={day.dayOff}
                        className="w-full p-1 border rounded-md outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-small mb-1">End Time</label>
                      <input
                        type="time"
                        value={day.dayOff ? "" : day.end}
                        onChange={(e) => handleDayChange(index, "end", e.target.value)}
                        disabled={day.dayOff}
                        className="w-full p-1 border rounded-md outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-small mb-1">Break Start</label>
                      <input
                        type="time"
                        value={day.dayOff ? "" : day.breakStart}
                        onChange={(e) => handleDayChange(index, "breakStart", e.target.value)}
                        disabled={day.dayOff}
                        className="w-full p-1 border rounded-md outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font- mb-1">Break End</label>
                      <input
                        type="time"
                        value={day.dayOff ? "" : day.breakEnd}
                        onChange={(e) => handleDayChange(index, "breakEnd", e.target.value)}
                        disabled={day.dayOff}
                        className="w-full p-1 border rounded-md outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-2">
        <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            {editShift ? "Update Shift" : "Save Shift"}
          </button>
  
        </div>
      </div>
    </div>
  );
};

export default ShiftModal;
