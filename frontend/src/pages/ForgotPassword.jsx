import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Label, Input } from "@windmill/react-ui";

function ForgotPassword() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleRecoverPassword = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/login"); // Navigate after 1-second delay
    }, 1000);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - 60% Image */}
          <div className="h-48 md:h-auto md:w-3/5">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src="https://www.paj-gps.co.uk/wp-content/uploads/2024/02/why-gps-tracker-needs-subscription.jpg"
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src="https://www.paj-gps.co.uk/wp-content/uploads/2024/02/why-gps-tracker-needs-subscription.jpg"
              alt="Office Dark Mode"
            />
          </div>

          {/* Right Side - 40% Form */}
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-2/5">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot Password
              </h1>

              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="email@email.com"
                />
              </Label>

              {/* Green Animated Button */}
              <motion.button
                className="mt-4 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
                onClick={handleRecoverPassword}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  clicked
                    ? { scale: 0.9, opacity: 0.6 }
                    : { scale: 1, opacity: 1 }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {clicked ? "Processing..." : "Recover Password"}
              </motion.button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
