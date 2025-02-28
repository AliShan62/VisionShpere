/* eslint-disable react/prop-types */
import { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { GoogleMap, Autocomplete, MarkerF } from "@react-google-maps/api";
import { RxCross1 } from "react-icons/rx";

const defaultCenter = { lat: 31.5204, lng: 74.3587 }; // Lahore, Pakistan

function Profile() {
  const [verifyCheckoutStatus, setVerifyCheckoutStatus] = useState(false);
  const [salaryEnableStatus, setSalaryEnableStatus] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <PageTitle>Profile</PageTitle>
      <div className="grid grid-cols-6 gap-8">
        {/* First section with fixed height */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-6 shadow-md flex-1">
            <img
              src="/images/profile_img.jpg"
              alt="Profile Image"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-center text-xl font-semibold mb-2">
              TanveerORG
            </h3>
            <Link
              to=""
              className="block text-center hover:text-green-500 text-green-400 dark:text-green-500 dark:hover:text-green-400 hover:underline"
            >
              Change Password
            </Link>
          </div>

          {/* NFC/QR Code Section */}
          <div className="bg-white rounded-lg text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-6 shadow-md flex-1">
            <img
              src="/images/qr_code_PNG.png"
              alt="QR Image"
              className="w-24 h-24 mx-auto mb-4 dark:bg-white rounded-md"
            />
            <Link
              to=""
              className="block text-center hover:text-green-500 text-green-400 dark:text-green-500 dark:hover:text-green-400 hover:underline mb-2"
            >
              NFC/QR Code
            </Link>
            <p className="text-sm text-center">
              Qr code image should be printed and attached to the company entry
              to be scanned by employees with force qr enabled as extra surety.
            </p>
          </div>

          {/* API Key Section */}
          <div className="bg-white rounded-lg text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-4 shadow-md flex-1">
            <h3 className="text-lg font-semibold mb-4">API Key</h3>
            <div className="w-full h-16 break-words overflow-y-scroll bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
              AIzaSyDuFmXH6wlIW4tzu7q9fyEK-_Gj_xE7nKE
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="py-2 px-2 rounded-md bg-green-600 hover:bg-green-700 text-white">
                Generate API KEY
              </button>
              <div className="py-2 rounded-md underline hover:text-green-500 text-green-400 dark:text-green-500 dark:hover:text-green-400">
                <Link>Read our API Docs</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col gap-4">
          {/* <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Edit Profile
          </h3> */}
          <div className="mb-4">
            <ul className="flex border-b">
              <li className="-mb-px mr-1">
                <a
                  className="bg-white dark:bg-gray-800 inline-block border-green-500 border-b-2 rounded-t py-2 px-4 text-green-400 dark:text-green-500"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Edit Profile
                </a>
              </li>
            </ul>
          </div>
          <form className="flex flex-col space-y-4">
            {/* Form Fields */}
            <div className="flex items-center space-x-2">
              <label
                htmlFor="companyName"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="email"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="phone"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="fax"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Fax
              </label>
              <input
                type="text"
                id="fax"
                placeholder="Fax"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="qrCode"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                NFC/QR Code
              </label>
              <input
                type="text"
                id="qrCode"
                placeholder="Tag"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="checkoutRange"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Checkout Range
              </label>
              <input
                type="number"
                id="checkoutRange"
                defaultValue="100"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="image"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="resetTime"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Reset Time
              </label>
              <input
                type="time"
                id="resetTime"
                defaultValue="00:00"
                className="w-2/3 p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                htmlFor="timeFormat"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Time Format
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="timeFormat"
                    id="12format"
                    value="12"
                    className="form-radio text-green-700 outline-none"
                  />
                  <label
                    htmlFor="12format"
                    className="ml-2 text-gray-700 dark:text-gray-300"
                  >
                    12
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="timeFormat"
                    id="24format"
                    value="24"
                    className="form-radio text-green-700 outline-none"
                  />
                  <label
                    htmlFor="24format"
                    className="ml-2 text-gray-700 dark:text-gray-300"
                  >
                    24
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label
                htmlFor="verifyCheckout"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Verify Checkout
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id="verifyCheckout"
                  className="w-3 h-3"
                  onChange={() =>
                    setVerifyCheckoutStatus(!verifyCheckoutStatus)
                  }
                />
                <label
                  htmlFor="verifyCheckout"
                  className="ml-3 text-lg text-gray-700 dark:text-gray-300"
                >
                  {verifyCheckoutStatus ? "Enabled" : "Disabled"}
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label
                htmlFor="salaryEnable"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Salary Enable
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="salaryEnable"
                  id="salaryEnable"
                  className="w-3 h-3"
                  onChange={() => setSalaryEnableStatus(!salaryEnableStatus)}
                />
                <label
                  htmlFor="salaryEnable"
                  className="ml-3 text-lg text-gray-700 dark:text-gray-300"
                >
                  {salaryEnableStatus ? "Enabled" : "Disabled"}
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label
                htmlFor="salaryEnable"
                className="w-1/3 text-green-400 dark:text-green-500"
              >
                Location
              </label>
              <div className="flex items-center">
                <Link
                  to="#"
                  onClick={() => setIsPopupOpen(true)}
                  className="hover:text-green-500 text-green-400 dark:text-green-500 dark:hover:text-green-400 hover:underline"
                >
                  Set Company Location
                </Link>
                <LocationPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

const LocationPopup = ({ isOpen, onClose }) => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [searchQuery, setSearchQuery] = useState("");
  const [autocompleteRef, setAutocompleteRef] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const containerStyle = { width: "100%", height: "200px" };
  const center = { lat: markerPosition.lat, lng: markerPosition.lng };

  const handleSave = () => {
    if (!latitude || !longitude) {
      alert("Please enter valid latitude and longitude.");
      return;
    }

    alert(`Location saved: ${latitude}, ${longitude}`);

    onClose();
  };

  const handleGoClick = () => {
    const newLat = parseFloat(latitude);
    const newLng = parseFloat(longitude);
    if (!isNaN(newLat) && !isNaN(newLng)) {
      setMarkerPosition({ lat: newLat, lng: newLng });
      setSelectedLocation({ lat: newLat, lng: newLng });
    }
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
      <div className="relative z-50 flex justify-center items-center">
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Set Company Location</h2>
            <button onClick={onClose} className="text-gray-500">
              <RxCross1 size={24} />
            </button>
          </div>
          <hr className="mb-4" />

          <div className="flex mb-4">
            <label className="w-1/3">Longitude:</label>
            <input
              type="text"
              value={longitude}
              onChange={handleManualLongitudeChange}
              className="w-2/3 border p-2 rounded"
            />
          </div>

          <div className="flex mb-4">
            <label className="w-1/3">Latitude:</label>
            <input
              type="text"
              value={latitude}
              onChange={handleManualLatitudeChange}
              className="w-2/3 border p-2 rounded"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handleGoClick}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Go
            </button>
            <button
              type="button"
              onClick={handleCurrentLocationClick}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Current
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Save
            </button>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <Autocomplete
              onLoad={(autocomplete) => setAutocompleteRef(autocomplete)}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full border p-2 rounded-md"
                placeholder="Search for a place"
              />
            </Autocomplete>
            <button
              type="button"
              onClick={handleSearchClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Search
            </button>
          </div>

          <div className="w-full">
            <div className="h-[200px] mb-4">
              <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={12}
                center={selectedLocation || center}
                options={{
                  disableDefaultUI: true,
                  zoomControl: false,
                  fullscreenControl: false,
                  mapTypeControl: false,
                }}
              >
                <MarkerF
                  position={markerPosition}
                  draggable
                  onDragEnd={onMarkerDragEnd}
                />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
