// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import PageTitle from "../components/Typography/PageTitle";
// import Footer from "../components/Footer/Footer";
// import { MapPin, Pencil, Trash2 } from "lucide-react";
// import { GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
// import { RxCross1 } from "react-icons/rx";

// const defaultCenter = { lat: 31.5204, lng: 74.3587 }; // Lahore, Pakistan

// const Branches = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingBranch, setEditingBranch] = useState(null);
//   const [viewBranchLocation, setViewBranchLocation] = useState(null);
//   const [branches, setBranches] = useState(() => {
//     const savedBranches = localStorage.getItem("branches");
//     return savedBranches ? JSON.parse(savedBranches) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("branches", JSON.stringify(branches));
//   });

//   const handleSaveBranch = (newBranch) => {
//     if (editingBranch !== null) {
//       setBranches((prevBranches) =>
//         prevBranches.map((branch, index) =>
//           index === editingBranch.index ? newBranch : branch
//         )
//       );
//     } else {
//       setBranches([...branches, newBranch]);
//     }
//     setIsModalOpen(false);
//     setEditingBranch(null);
//   };

//   const handleEditBranch = (branch, index) => {
//     setEditingBranch({ ...branch, index });
//     setIsModalOpen(true);
//   };

//   const handleDeleteBranch = (index) => {
//     setBranches(branches.filter((_, i) => i !== index));
//   };

//   const handleLocationClick = (latitude, longitude) => {
//     setViewBranchLocation({
//       lat: parseFloat(latitude),
//       lng: parseFloat(longitude),
//     });
//   };

//   return (
//     <div className="min-h-screen text-gray-900 p-6 flex flex-col justify-between">
//       <div className="flex justify-between items-center mb-6">
//         <PageTitle className="text-blue-600 font-semibold text-2xl">
//           Branches
//         </PageTitle>
//         <button
//           className="bg-green-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-green-700 transition"
//           onClick={() => {
//             setEditingBranch(null);
//             setIsModalOpen(true);
//           }}
//         >
//           Add Branch
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px] border border-gray-200">
//           <h2 className="text-xl font-semibold text-blue-600 mb-4">
//             Branch List
//           </h2>
//           <ul className="divide-y divide-gray-300">
//             {branches.length === 0 ? (
//               <p className="text-gray-500 text-center">
//                 No branches added yet.
//               </p>
//             ) : (
//               branches.map((branch, index) => (
//                 <li
//                   key={index}
//                   className={`p-4 flex justify-between items-center rounded-md transition duration-300 ${
//                     index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
//                   }`}
//                 >
//                   <div className="text-lg font-medium text-gray-800">
//                     {branch.name}
//                   </div>
//                   <div className="flex gap-4 items-center">
//                     <MapPin
//                       size={22}
//                       className="text-blue-600 cursor-pointer hover:text-blue-800 transition"
//                       onClick={() =>
//                         handleLocationClick(branch.latitude, branch.longitude)
//                       }
//                       title="View on Map"
//                     />
//                     <Pencil
//                       size={20}
//                       className="text-gray-700 cursor-pointer hover:text-blue-700 transition"
//                       onClick={() => handleEditBranch(branch, index)}
//                       title="Edit Branch"
//                     />
//                     <Trash2
//                       size={20}
//                       className="text-gray-700 cursor-pointer hover:text-red-700 transition"
//                       onClick={() => handleDeleteBranch(index)}
//                       title="Delete Branch"
//                     />
//                   </div>
//                 </li>
//               ))
//             )}
//           </ul>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-4 min-h-[350px] w-full border border-gray-200">
//           <h2 className="text-xl font-semibold text-blue-600 mb-4">
//             Branch Map
//           </h2>

//           <GoogleMap
//             mapContainerStyle={{
//               width: "100%",
//               height: "350px",
//               borderRadius: "8px",
//             }}
//             options={{
//               disableDefaultUI: true,
//               zoomControl: false,
//               fullscreenControl: false,
//               mapTypeControl: false,
//             }}
//             center={viewBranchLocation || defaultCenter}
//             zoom={12}
//           >
//             {branches.map((branch, index) => (
//               <Marker
//                 key={index}
//                 position={{
//                   lat: parseFloat(branch.latitude),
//                   lng: parseFloat(branch.longitude),
//                 }}
//                 title={branch.name}
//               />
//             ))}
//           </GoogleMap>
//         </div>
//       </div>

//       {isModalOpen && (
//         <BranchesPopup
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSave={handleSaveBranch}
//           branchToEdit={editingBranch}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// };

// const BranchesPopup = ({ isOpen, onClose, onSave, branchToEdit }) => {
//   const [branchName, setBranchName] = useState(branchToEdit?.name || "");
//   const [longitude, setLongitude] = useState(branchToEdit?.longitude || "");
//   const [latitude, setLatitude] = useState(branchToEdit?.latitude || "");
//   const [markerPosition, setMarkerPosition] = useState({
//     lat: branchToEdit?.latitude || 31.5204,
//     lng: branchToEdit?.longitude || 74.3587,
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [autocompleteRef, setAutocompleteRef] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

//   const containerStyle = { width: "100%", height: "200px" };
//   const center = { lat: markerPosition.lat, lng: markerPosition.lng };

//   const handleSave = () => {
//     if (!branchName.trim()) {
//       alert("Please enter a branch name.");
//       return;
//     }
//     if (!latitude || !longitude) {
//       alert("Please enter valid latitude and longitude.");
//       return;
//     }

//     onSave({
//       name: branchName,
//       latitude,
//       longitude,
//     });

//     onClose();
//   };

//   const handleCurrentLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//         setMarkerPosition({ lat: latitude, lng: longitude });
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const handleGoClick = () => {
//     const newLat = parseFloat(latitude);
//     const newLng = parseFloat(longitude);
//     if (!isNaN(newLat) && !isNaN(newLng)) {
//       setMarkerPosition({ lat: newLat, lng: newLng });
//       setSelectedLocation({ lat: newLat, lng: newLng });
//     }
//   };

//   const onMarkerDragEnd = (event) => {
//     const newLat = event.latLng.lat();
//     const newLng = event.latLng.lng();
//     setLatitude(newLat);
//     setLongitude(newLng);
//     setMarkerPosition({ lat: newLat, lng: newLng });
//   };

//   const handleManualLatitudeChange = (e) => {
//     const value = e.target.value;
//     setLatitude(value);
//     const lat = parseFloat(value);
//     if (!isNaN(lat)) {
//       setMarkerPosition((prev) => ({ ...prev, lat }));
//     }
//   };

//   const handleManualLongitudeChange = (e) => {
//     const value = e.target.value;
//     setLongitude(value);
//     const lng = parseFloat(value);
//     if (!isNaN(lng)) {
//       setMarkerPosition((prev) => ({ ...prev, lng }));
//     }
//   };

//   const handleSearchClick = () => {
//     if (autocompleteRef) {
//       const place = autocompleteRef.getPlace();
//       if (place.geometry) {
//         const lat = place.geometry.location.lat();
//         const lng = place.geometry.location.lng();
//         setSelectedLocation({ lat, lng });
//         setLatitude(lat);
//         setLongitude(lng);
//       }
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="fixed inset-0 bg-gray-800 bg-opacity-50"
//         onClick={onClose}
//       ></div>
//       <div className="relative z-50 flex justify-center items-center">
//         <div className="w-full bg-white rounded-lg shadow-lg p-4">
//           <div className="flex justify-between items-center mb-3">
//             <h2 className="text-lg font-semibold">Add Branch</h2>
//             <button onClick={onClose} className="text-gray-500">
//               <RxCross1 size={24} />
//             </button>
//           </div>
//           <hr className="mb-4" />

//           <div className="flex mb-3">
//             <label className="w-1/3">Branch Name:</label>
//             <input
//               type="text"
//               value={branchName}
//               onChange={(e) => setBranchName(e.target.value)}
//               className="w-2/3 border ml-1 p-2 rounded"
//             />
//           </div>

//           <div className="flex mb-3">
//             <label className="w-1/3">Longitude:</label>
//             <input
//               type="text"
//               value={longitude}
//               onChange={handleManualLongitudeChange}
//               className="w-2/3 border p-2 rounded"
//             />
//           </div>

//           <div className="flex mb-3">
//             <label className="w-1/3">Latitude:</label>
//             <input
//               type="text"
//               value={latitude}
//               onChange={handleManualLatitudeChange}
//               className="w-2/3 border p-2 rounded"
//             />
//           </div>

//           <div className="flex justify-between items-center mb-3">
//             <button
//               type="button"
//               onClick={handleGoClick}
//               className="bg-green-600 text-white px-6 py-2 rounded-md"
//             >
//               Go
//             </button>
//             <button
//               type="button"
//               onClick={handleCurrentLocationClick}
//               className="bg-green-600 text-white px-6 py-2 rounded-md"
//             >
//               Current
//             </button>
//             <button
//               type="button"
//               onClick={handleSave}
//               className="bg-green-600 text-white px-6 py-2 rounded-md"
//             >
//               Save
//             </button>
//           </div>

//           <div className="mb-3 flex justify-between items-center">
//             <Autocomplete
//               onLoad={(autocomplete) => setAutocompleteRef(autocomplete)}
//             >
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full border p-2 rounded-md"
//                 placeholder="Search for a place"
//               />
//             </Autocomplete>
//             <button
//               onClick={handleSearchClick}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
//             >
//               Search
//             </button>
//           </div>

//           <div className="w-full">
//             <div className="h-[200px] mb-3">
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 zoom={15}
//                 center={selectedLocation || center}
//                 options={{
//                   disableDefaultUI: true,
//                   zoomControl: false,
//                   fullscreenControl: false,
//                   mapTypeControl: false,
//                 }}
//               >
//                 <Marker
//                   position={markerPosition}
//                   draggable
//                   onDragEnd={onMarkerDragEnd}
//                 />
//               </GoogleMap>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Branches;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import Footer from "../components/Footer/Footer";
import { MapPin, Pencil, Trash2 } from "lucide-react";
import { GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
import { RxCross1 } from "react-icons/rx";

const defaultCenter = { lat: 31.5204, lng: 74.3587 }; // Lahore, Pakistan

const Branches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState(null);
  const [viewBranchLocation, setViewBranchLocation] = useState(null);
  const [branches, setBranches] = useState(() => {
    const savedBranches = localStorage.getItem("branches");
    return savedBranches ? JSON.parse(savedBranches) : [];
  });

  useEffect(() => {
    localStorage.setItem("branches", JSON.stringify(branches));
  }, [branches]);

  const handleSaveBranch = (newBranch) => {
    // Check if the branch name is unique
    const isUnique = !branches.some((branch) => branch.name === newBranch.name);
    if (!isUnique) {
      alert("Branch name must be unique!");
      return;
    }

    if (editingBranch !== null) {
      setBranches((prevBranches) =>
        prevBranches.map((branch, index) =>
          index === editingBranch.index ? newBranch : branch
        )
      );
    } else {
      setBranches([...branches, newBranch]);
    }
    setIsModalOpen(false);
    setEditingBranch(null);
  };

  const handleEditBranch = (branch, index) => {
    setEditingBranch({ ...branch, index });
    setIsModalOpen(true);
  };

  const handleDeleteBranch = (index) => {
    setBranches(branches.filter((_, i) => i !== index));
  };

  const handleLocationClick = (latitude, longitude) => {
    setViewBranchLocation({
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    });
  };

  return (
    <div className="min-h-screen text-gray-900 p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-6">
        <PageTitle className="text-gray-600 font-semibold text-2xl">
          Branches
        </PageTitle>
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-green-700 transition"
          onClick={() => {
            setEditingBranch(null);
            setIsModalOpen(true);
          }}
        >
          Add Branch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px] border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Branch List
          </h2>
          <ul className="divide-y divide-gray-300">
            {branches.length === 0 ? (
              <p className="text-gray-500 text-center">
                No branches added yet.
              </p>
            ) : (
              branches.map((branch, index) => (
                <li
                  key={index}
                  className={`p-4 flex justify-between items-center rounded-md transition duration-300 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  }`}
                >
                  <div className="text-lg font-medium text-gray-800">
                    {branch.name}
                  </div>
                  <div className="flex gap-4 items-center">
                    <MapPin
                      size={22}
                      className="text-blue-600 cursor-pointer hover:text-blue-800 transition"
                      onClick={() =>
                        handleLocationClick(branch.latitude, branch.longitude)
                      }
                      title="View on Map"
                    />
                    <Pencil
                      size={20}
                      className="text-gray-700 cursor-pointer hover:text-blue-700 transition"
                      onClick={() => handleEditBranch(branch, index)}
                      title="Edit Branch"
                    />
                    <Trash2
                      size={20}
                      className="text-gray-700 cursor-pointer hover:text-red-700 transition"
                      onClick={() => handleDeleteBranch(index)}
                      title="Delete Branch"
                    />
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 min-h-[350px] w-full border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Branch Map
          </h2>

          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "350px",
              borderRadius: "8px",
            }}
            options={{
              disableDefaultUI: true,
              zoomControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
            center={viewBranchLocation || defaultCenter}
            zoom={12}
          >
            {branches.map((branch, index) => (
              <Marker
                key={index}
                position={{
                  lat: parseFloat(branch.latitude),
                  lng: parseFloat(branch.longitude),
                }}
                title={branch.name}
              />
            ))}
          </GoogleMap>
        </div>
      </div>

      {isModalOpen && (
        <BranchesPopup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveBranch}
          branchToEdit={editingBranch}
        />
      )}

      <Footer />
    </div>
  );
};

const BranchesPopup = ({ isOpen, onClose, onSave, branchToEdit }) => {
  const [branchName, setBranchName] = useState(branchToEdit?.name || "");
  const [longitude, setLongitude] = useState(branchToEdit?.longitude || "");
  const [latitude, setLatitude] = useState(branchToEdit?.latitude || "");
  const [markerPosition, setMarkerPosition] = useState({
    lat: branchToEdit?.latitude || 31.5204,
    lng: branchToEdit?.longitude || 74.3587,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [autocompleteRef, setAutocompleteRef] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const containerStyle = { width: "100%", height: "200px" };
  const center = { lat: markerPosition.lat, lng: markerPosition.lng };

  const handleSave = () => {
    if (!branchName.trim()) {
      alert("Please enter a branch name.");
      return;
    }
    if (!latitude || !longitude) {
      alert("Please enter valid latitude and longitude.");
      return;
    }

    onSave({
      name: branchName,
      latitude,
      longitude,
    });

    onClose();
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setMarkerPosition({ lat: latitude, lng: longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleGoClick = () => {
    const newLat = parseFloat(latitude);
    const newLng = parseFloat(longitude);
    if (!isNaN(newLat) && !isNaN(newLng)) {
      setMarkerPosition({ lat: newLat, lng: newLng });
      setSelectedLocation({ lat: newLat, lng: newLng });
    }
  };

  const onMarkerDragEnd = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setLatitude(newLat);
    setLongitude(newLng);
    setMarkerPosition({ lat: newLat, lng: newLng });
  };

  const handleManualLatitudeChange = (e) => {
    const value = e.target.value;
    setLatitude(value);
    const lat = parseFloat(value);
    if (!isNaN(lat)) {
      setMarkerPosition((prev) => ({ ...prev, lat }));
    }
  };

  const handleManualLongitudeChange = (e) => {
    const value = e.target.value;
    setLongitude(value);
    const lng = parseFloat(value);
    if (!isNaN(lng)) {
      setMarkerPosition((prev) => ({ ...prev, lng }));
    }
  };

  const handleSearchClick = () => {
    if (autocompleteRef) {
      const place = autocompleteRef.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelectedLocation({ lat, lng });
        setLatitude(lat);
        setLongitude(lng);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-[600px] max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-600">
            {branchToEdit ? "Edit Branch" : "Add Branch"}
          </h2>
          <RxCross1
            size={20}
            className="cursor-pointer text-gray-700"
            onClick={onClose}
          />
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Branch Name"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <div className="flex justify-between items-center gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                Latitude:
                <input
                  type="number"
                  value={latitude}
                  onChange={handleManualLatitudeChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Longitude:
                <input
                  type="number"
                  value={longitude}
                  onChange={handleManualLongitudeChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
            </div>
          </div>

          <div className="flex  justify-between">
            <div className="flex justify-between items-center gap-4">
              <Autocomplete
                onLoad={(ref) => setAutocompleteRef(ref)}
                onPlaceChanged={handleSearchClick}
              >
                <input
                  type="text"
                  placeholder="Search Location"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-4/4 p-2 border border-gray-300 rounded-md" // Adjust width here
                />
              </Autocomplete>
            </div>
            <button
              onClick={handleCurrentLocationClick}
              className="bg-green-600 text-white p-2 rounded-md"
            >
              Current
            </button>
            <button
              onClick={handleGoClick}
              className="bg-green-600 text-white p-2 rounded-md"
            >
              Go
            </button>

            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              {branchToEdit ? "Update Branch" : "Save Branch"}
            </button>
          </div>

          <div className="h-[300px] w-full mt-4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={12}
              center={selectedLocation}
            >
              <Marker
                position={selectedLocation}
                draggable
                onDragEnd={onMarkerDragEnd}
              />
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
