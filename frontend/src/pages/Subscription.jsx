import { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import Footer from "../components/Footer/Footer";

function Subscription() {
  // State to manage selected version and employees
  const [version, setVersion] = useState("Normal");
  const [selectedPlanName, setSelectedPlanName] = useState(null);
  const [employees, setEmployees] = useState("50 Employees");
  const [subscribeButtonActive, setSubscribeButtonActive] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlanName(plan.name);
    setSubscribeButtonActive(true);
  };

  // Options for subscription plans
  const plans = [
    {
      name: "Plus",
      duration: "1 Month(s)",
      price: "24.99",
      discount: "0% Discount",
    },
    {
      name: "Hyper Plus",
      duration: "3 Month(s)",
      price: "42.49",
      discount: "5% Discount",
    },
    {
      name: "Super Plus",
      duration: "6 Month(s)",
      price: "134.99",
      discount: "10% Discount",
    },
    {
      name: "Ultra Plus",
      duration: "12 Month(s)",
      price: "249.99",
      discount: "15% Discount",
    },
  ];
  return (
    <>
      <PageTitle>Subscription</PageTitle>

      <div className="w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-green-800 dark:text-green-500">
            Your trial account will expire after 8 days
          </p>
        </div>

        {/* Version selection */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <label className="flex items-center space-x-2 dark:text-gray-100">
            <input
              type="radio"
              name="version"
              value="Normal"
              checked={version === "Normal"}
              onChange={() => setVersion("Normal")}
              className="form-radio text-green-700 outline-none"
            />
            <span>Normal Version</span>
          </label>
          <label className="flex items-center space-x-2 dark:text-gray-100">
            <input
              type="radio"
              name="version"
              value="Real-Time"
              checked={version === "Real-Time"}
              onChange={() => setVersion("Real-Time")}
              className="form-radio text-green-700 focus:outline-none"
            />
            <span>Real-Time tracking Version</span>
          </label>
        </div>

        {/* Employee selection dropdown */}
        <div className="flex justify-end mb-4 text-gray-600 dark:text-gray-200">
          <label htmlFor="dropdown" className="mt-2 mr-4">
            Max number of employees
          </label>
          <select
            id="dropdown"
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            className="border border-gray-300 rounded-md p-2 outline-none dark:bg-gray-800"
          >
            <option>3 Employees</option>
            <option>5 Employees</option>
            <option>10 Employees</option>
            <option>50 Employees</option>
          </select>
        </div>

        {/* Subscription Plans Table */}
        <div className="border-t py-4 mb-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex justify-between text-gray-600 dark:text-gray-200 items-center py-3 border-b last:border-none"
            >
              <div className="flex-1">
                <span className="font-medium">{plan.name}</span>
              </div>
              <div className="flex-1 text-center">
                <span>{plan.duration}</span>
              </div>
              <div className="flex-1 text-center">
                <span>${plan.price}</span>
              </div>
              <div className="flex-1 text-center">
                <span
                  className={`${
                    plan.discount !== "0% Discount"
                      ? "text-green-700 dark:text-green-500"
                      : ""
                  }`}
                >
                  {plan.discount}
                </span>
              </div>
              <div className="flex-1 text-right">
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`px-4 py-1 border rounded-md dark:text-gray-100  focus:outline-none ${
                    selectedPlanName === plan.name
                      ? `bg-green-700 dark:bg-green-800 text-white dark`
                      : ""
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <label className="block text-gray-600 dark:text-gray-200 mb-1">
              Use a coupon
            </label>
            <input
              type="text"
              placeholder="optional (case sensitive)"
              className="w-full p-2 border rounded-md outline-none border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <p className="text-xs text-gray-500 dark:text-gray-300">
              ** leave coupon empty if you don&apos;t have any **
            </p>
          </div>
          <button
            className={`px-6 py-2 border rounded-md focus:outline-none dark:border-none dark:text-gray-100  ${
              subscribeButtonActive
                ? "text-gray-100 bg-green-800 dark:bg-green-800 dark:hover:bg-green-700"
                : ""
            }`}
          >
            Subscribe
          </button>
        </div>

        {/* Payment Icons Section */}
        <div className="flex justify-center items-center space-x-8 mt-4">
          <img src="/images/visa.png" alt="Visa" className="w-14 h-16" />
          <img
            src="/images/mastercard.png"
            alt="Mastercard"
            className="w-14 h-10"
          />
          <img src="/images/amex.png" alt="Amex" className="w-14 h-8" />
          <img src="/images/troy.png" alt="Troy" className="w-14 h-8" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Subscription;
