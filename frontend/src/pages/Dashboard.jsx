import { useState, useEffect } from "react";
import { GoogleMap, Marker, MarkerF } from "@react-google-maps/api";
import styles from "../styles/styles";
import {
  CheckIcon,
  FocusIcon,
  LocationIcon,
  PickIcon,
  UncheckIcon,
} from "../icons";

const defaultLocation = { lat: 30.3753, lng: 69.3451 }; // Pakistan default location
const branches = [
  { name: "UE Lahore", location: { lat: 31.4537, lng: 74.299 } }, // Lahore
  {
    name: "UE Faisalabad",
    location: { lat: 31.451331405292816, lng: 74.29295771022299 },
  }, // UMT
];

const employeesData = {
  checkedIn: [
    {
      id: 1,
      name: "Ali Khan",
      profileImage: "../../public/images/i.png",
      checkInTime: "09:30",
      location: { lat: 31.4551101883049, lng: 74.29712682908173 }, // LE Central Library
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      profileImage: "../../public/images/g.png",
      checkInTime: "10:15",
      location: { lat: 31.454228809513506, lng: 74.29825568652406 }, // UE DSNT
    },
    {
      id: 3,
      name: "Usman Raza",
      profileImage: "../../public/images/j.png",
      checkInTime: "08:50",
      location: { lat: 31.45367252752924, lng: 74.29869067265925 }, // UE ATM
    },
    {
      id: 4,
      name: "Ayesha Noor",
      profileImage: "../../public/images/k.png",
      checkOutTime: "16:45",
      location: { lat: 31.453820986278576, lng: 74.29968415038398 }, // UE Parking
    },
  ],
  checkedOut: [
    {
      id: 5,
      name: "Hassan Ali",
      profileImage: "../../public/images/e.png",
      checkOutTime: "17:30",
      location: { lat: 31.453447166616275, lng: 74.29801212821661 }, // I love UE garden
    },
  ],
};

function Dashboard() {
  const [map, setMap] = useState(null);
  const [showBranches, setShowBranches] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [checkedInEmployees, setCheckedInEmployees] = useState(employeesData);
  const [isCheckedInOpen, setIsCheckedInOpen] = useState(false);
  const [isCheckedOutOpen, setIsCheckedOutOpen] = useState(false);
  const [center, setCenter] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("defaultLocation")) || defaultLocation
    );
  });

  useEffect(() => {
    localStorage.setItem("defaultLocation", JSON.stringify(center));
    if (map && selectedEmployee) {
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
            <div class="text-xs p-2">
            <div class="flex flex-col items-center mb-1">
              <img src="${
                selectedEmployee.profileImage
              }" alt="Profile" class="w-12 h-12 rounded-full mb-1" />
              <h3 class="text-xs">${selectedEmployee.name}</h3>
            </div>
            <div class="text-xs text-center">
              <p>${
                selectedEmployee.checkInTime
                  ? `Checked In: ${selectedEmployee.checkInTime}`
                  : `Checked Out: ${selectedEmployee.checkOutTime}`
              }</p>
            </div>
          </div>
          `,
        position: selectedEmployee.location,
      });

      infoWindow.open(map); // Opens the InfoWindow on the map

      return () => {
        infoWindow.close(); // Clean up the InfoWindow when the component is unmounted
      };
    }
  }, [center, map, selectedEmployee]);

  const handlePick = () => {
    setCenter(map.getCenter().toJSON());
    alert("Location Picked!");
  };
  const handleCurrent = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setCenter(newLocation);
    });
  };

  const handleRecenter = () =>
    setCenter(JSON.parse(localStorage.getItem("defaultLocation")));

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-end items-end">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
          }}
          center={center}
          zoom={19}
          options={{
            disableDefaultUI: true, // Disables all default UI
            zoomControl: false, // Hides zoom controls specifically
            fullscreenControl: false, // Hides fullscreen button
            mapTypeControl: false, // Hides Map/Satellite toggle
          }}
          onLoad={(mapInstance) => setMap(mapInstance)}
        >
          <Marker position={center} />

          {showBranches &&
            branches.map((branch, index) => (
              <Marker
                key={index}
                position={branch.location}
                // label={{
                //   text: branch.name,
                //   color: "green",
                //   fontWeight: "bold",
                //   fontSize: "14px",
                // }}
                icon={{
                  url: "/images/logo-city-mountain-company-ezgif.com-png-to-jpg-converter-removebg-preview.png", // Custom icon URL
                  scaledSize: new window.google.maps.Size(75, 100), // Adjust icon size
                }}
              />
            ))}

          {/* Markers for checked-in employees */}
          {employeesData.checkedIn.map((employee, index) => (
            <MarkerF
              key={index}
              position={employee.location}
              icon={{
                url: "/images/green_marker.png",
                scaledSize: new window.google.maps.Size(40, 65),
              }}
              options={{
                animation: window.google.maps.Animation.BOUNCE,
              }}
              onClick={() => setSelectedEmployee(employee)} // Set the selected employee
            />
          ))}

          {/* Markers for checked-out employees */}
          {employeesData.checkedOut.map((employee, index) => (
            <MarkerF
              key={index}
              position={employee.location}
              icon={{
                url: "../../public/images/red_marker.png",
                scaledSize: new window.google.maps.Size(40, 65),
              }}
              onClick={() => setSelectedEmployee(employee)} // Set the selected employee
            />
          ))}
        </GoogleMap>

        {/* checkbox top right */}
        <div
          className="absolute top-5 right-5 bg-gray-300 rounded-sm mr-2 flex justify-start items-center py-1 pl-1 pr-20"
          style={{ top: "calc(0% + 80px)" }}
        >
          <input
            type="checkbox"
            id="checkbox"
            className="cursor-pointer mr-2 ml-1"
            style={{ width: "15px", height: "15px" }}
            checked={showBranches}
            onChange={() => setShowBranches(!showBranches)}
          />
          <label htmlFor="checkbox" className="cursor-pointer">
            Show All Branches
          </label>
        </div>

        {/* Buttons Bottom Right */}
        <div className="absolute flex space-x-2 pr-2">
          <button onClick={handlePick} className={`${styles.button}`}>
            <PickIcon className="mr-1" /> Pick
          </button>
          <button onClick={handleCurrent} className={`${styles.button}`}>
            <LocationIcon className="mr-1" /> Current
          </button>
          <button onClick={handleRecenter} className={`${styles.button}`}>
            <FocusIcon className="mr-1" /> Recenter
          </button>
        </div>

        {/* dropdown center right */}
        <div
          className="absolute bottom-5 bg-transparent shadow-lg rounded-lg right-5 flex flex-col space-y-2 mr-2"
          style={{ top: "calc(20%)" }}
        >
          {/* dropdown for branches */}
          <div className="w-full flex items-center cursor-pointer bg-white space-x-3 rounded-md">
            <select
              name=""
              id=""
              className="w-full p-1 outline-none"
              onChange={(e) => {
                const selectedBranchName = e.target.value;
                setSelectedBranch(selectedBranchName);

                // Find and set the center if a branch is selected
                if (selectedBranchName) {
                  const selectedBranch = branches.find(
                    (branch) => branch.name === selectedBranchName
                  );
                  if (selectedBranch) {
                    setCenter(selectedBranch.location);
                  }
                }
              }}
            >
              <option value="">All Branches</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className={`w-full flex flex-col cursor-pointer px-4 pt-4 pb-3 bg-white rounded-md ${
              isCheckedInOpen ? "max-h-[500px]" : "max-h-[60px] overflow-hidden"
            }`}
            onClick={() =>
              setIsCheckedInOpen(!isCheckedInOpen) || setIsCheckedOutOpen(false)
            }
          >
            {/* Header Section */}
            <div className="w-full flex items-center justify-between space-x-1">
              <CheckIcon
                size={35}
                className="bg-green-500 bg-opacity-25 rounded-full"
                color="green"
              />
              <h4 className="text-green-600">GEO</h4>
              <p className="text-gray-500">| Checked IN</p>
              <span className="w-6 h-6 bg-green-200 text-green-600 flex items-center justify-center rounded-full">
                {checkedInEmployees.checkedIn.length}
              </span>
            </div>

            {/* Dropdown Section (Visible when open) */}
            <div className="mt-2 w-full">
              {isCheckedInOpen &&
                checkedInEmployees.checkedIn.map((emp) => (
                  <div
                    className="w-full flex items-center p-2 bg-white space-x-3 rounded-md border-b transition-all"
                    key={emp.id}
                    onClick={() => setCenter(emp.location)}
                  >
                    <img
                      src={emp.profileImage}
                      alt=""
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <div>{emp.name}</div>
                      <div>{emp.checkInTime}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div
            className={`w-full flex flex-col cursor-pointer px-4 pt-4 pb-3 bg-white rounded-md transition-all duration-300 ease-in-out ${
              isCheckedOutOpen
                ? "max-h-[500px]"
                : "max-h-[60px] overflow-hidden"
            }`}
            onClick={() =>
              setIsCheckedOutOpen(!isCheckedOutOpen) ||
              setIsCheckedInOpen(false)
            }
          >
            {/* Header Section */}
            <div className="w-full flex items-center justify-between space-x-1">
              <UncheckIcon
                size={35}
                className="bg-green-500 bg-opacity-25 rounded-full"
                color="green"
              />
              <h4 className="text-green-600">GEO</h4>
              <p className="text-gray-500">| Checked OUT</p>
              <span className="w-6 h-6 bg-green-200 text-green-600 flex items-center justify-center rounded-full">
                {checkedInEmployees.checkedOut.length}
              </span>
            </div>

            {/* Dropdown Section (Visible when open) */}
            <div className="mt-2 w-full">
              {isCheckedOutOpen &&
                checkedInEmployees.checkedOut.map((emp) => (
                  <div
                    className="w-full flex items-center p-2 bg-white space-x-3 rounded-md border-b transition-all cursor-default"
                    key={emp.id}
                    // onClick={() => setCenter(emp.location)}
                  >
                    <img
                      src={emp.profileImage}
                      alt=""
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <div>{emp.name}</div>
                      <div>{emp.checkOutTime}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
