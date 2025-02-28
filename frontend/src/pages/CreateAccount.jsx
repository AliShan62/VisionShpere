// // // import { Link } from "react-router-dom";

// // // import ImageLight from "../assets/img/create-account-office.jpeg";
// // // import ImageDark from "../assets/img/create-account-office-dark.jpeg";
// // // import { Input, Label, Button } from "@windmill/react-ui";

// // // function Login() {
// // //   return (
// // //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
// // //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
// // //         <div className="flex flex-col overflow-y-auto md:flex-row">
// // //           <div className="h-32 md:h-auto md:w-1/2">
// // //             <img
// // //               aria-hidden="true"
// // //               className="object-cover w-full h-full dark:hidden"
// // //               src={ImageLight}
// // //               alt="Office"
// // //             />
// // //             <img
// // //               aria-hidden="true"
// // //               className="hidden object-cover w-full h-full dark:block"
// // //               src={ImageDark}
// // //               alt="Office"
// // //             />
// // //           </div>
// // //           <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
// // //             <div className="w-full">
// // //               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
// // //                 Create account
// // //               </h1>
// // //               <Label>
// // //                 <span>Business Name</span>
// // //                 <Input className="mt-1" type="text" placeholder="name" />
// // //               </Label>
// // //               <Label className="mt-4">
// // //                 <span>Email</span>
// // //                 <Input
// // //                   className="mt-1"
// // //                   type="email"
// // //                   placeholder="email@email.com"
// // //                 />
// // //               </Label>
// // //               <Label className="mt-4">
// // //                 <span>Phone</span>
// // //                 <Input className="mt-1" type="text" placeholder="+123456789" />
// // //               </Label>
// // //               <Label className="mt-4">
// // //                 <span>Username</span>
// // //                 <Input className="mt-1" type="text" placeholder="username" />
// // //               </Label>
// // //               <Label className="mt-4">
// // //                 <span>Password</span>
// // //                 <Input
// // //                   className="mt-1"
// // //                   placeholder="your-password"
// // //                   type="password"
// // //                 />
// // //               </Label>

// // //               {/* <Button
// // //                 tag={Link}
// // //                 to="/login"
// // //                 block
// // //                 className="mt-4 bg-green-700"
// // //               >
// // //                 Create account
// // //               </Button> */}
// // //               <motion.button
// // //                 className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
// // //                 onClick={() => navigate("/login")}
// // //                 initial={{ scale: 1, opacity: 1 }}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95, opacity: 0.7 }}
// // //               >
// // //                 Create Account
// // //               </motion.button>

// // //               <hr className="my-8" />

// // //               <p className="mt-4">
// // //                 <Link
// // //                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
// // //                   to="/login"
// // //                 >
// // //                   Already have an account? Login
// // //                 </Link>
// // //               </p>
// // //             </div>
// // //           </main>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import ImageLight from "../assets/img/create-account-office.jpeg";
// // import ImageDark from "../assets/img/create-account-office-dark.jpeg";
// // import { Input, Label } from "@windmill/react-ui";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [clicked, setClicked] = useState(false);

// //   const handleCreateAccount = () => {
// //     setClicked(true);
// //     setTimeout(() => {
// //       navigate("/login");
// //     }, 1000); // Simulating loading effect before navigation
// //   };

// //   return (
// //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
// //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
// //         <div className="flex flex-col overflow-y-auto md:flex-row">
// //           <div className="h-32 md:h-auto md:w-1/2">
// //             <img
// //               aria-hidden="true"
// //               className="object-cover w-full h-full dark:hidden"
// //               src="https://deltasalesapp.com/assets/images/deltaSalesApp/Solutions/GPS-based%20Employee%20Location%20Tracking.png"
// //               alt="Office"
// //             />
// //             <img
// //               aria-hidden="true"
// //               className="hidden object-cover w-full h-full dark:block"
// //               src={ImageDark}
// //               alt="Office"
// //             />
// //           </div>
// //           <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
// //             <div className="w-full">
// //               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
// //                 Create account
// //               </h1>
// //               <Label>
// //                 <span>Business Name</span>
// //                 <Input className="mt-1" type="text" placeholder="name" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Email</span>
// //                 <Input
// //                   className="mt-1"
// //                   type="email"
// //                   placeholder="email@email.com"
// //                 />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Phone</span>
// //                 <Input className="mt-1" type="text" placeholder="+123456789" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Username</span>
// //                 <Input className="mt-1" type="text" placeholder="username" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Password</span>
// //                 <Input
// //                   className="mt-1"
// //                   placeholder="your-password"
// //                   type="password"
// //                 />
// //               </Label>

// //               {/* Create Account Button with animation */}
// //               <motion.button
// //                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
// //                 onClick={handleCreateAccount}
// //                 initial={{ scale: 1, opacity: 1 }}
// //                 animate={
// //                   clicked
// //                     ? { scale: 0.9, opacity: 0.6 }
// //                     : { scale: 1, opacity: 1 }
// //                 }
// //                 transition={{ duration: 1 }}
// //               >
// //                 {clicked ? "Creating Account..." : "Create Account"}
// //               </motion.button>

// //               <hr className="my-8" />

// //               <p className="mt-4">
// //                 <Link
// //                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
// //                   to="/login"
// //                 >
// //                   Already have an account? Login
// //                 </Link>
// //               </p>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import Front from "../assets/img/Front";
// // import { Input, Label } from "@windmill/react-ui";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [clicked, setClicked] = useState(false);

// //   const handleCreateAccount = () => {
// //     setClicked(true);
// //     setTimeout(() => {
// //       navigate("/login");
// //     }, 1000); // Simulating loading effect before navigation
// //   };

// //   return (
// //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
// //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
// //         <div className="flex flex-row">
// //           {/* Image Section (60% Left Side) */}
// //           <div className="w-3/5 h-auto">
// //             <img
// //               aria-hidden="true"
// //               className="w-full h-full object-cover item-center"
// //               src={Front}
// //               alt="Office"
// //             />
// //           </div>

// //           {/* Form Section (40% Right Side) */}
// //           <main className="w-2/5 flex items-center justify-center p-2 sm:p-6">
// //             <div className="w-full">
// //               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
// //                 Create account
// //               </h1>
// //               <Label>
// //                 <span>Business Name</span>
// //                 <Input className="mt-1" type="text" placeholder="name" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Email</span>
// //                 <Input
// //                   className="mt-1"
// //                   type="email"
// //                   placeholder="email@email.com"
// //                 />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Phone</span>
// //                 <Input className="mt-1" type="text" placeholder="+123456789" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Username</span>
// //                 <Input className="mt-1" type="text" placeholder="username" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Password</span>
// //                 <Input
// //                   className="mt-1"
// //                   placeholder="your-password"
// //                   type="password"
// //                 />
// //               </Label>

// //               {/* Create Account Button with Animation */}
// //               <motion.button
// //                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
// //                 onClick={handleCreateAccount}
// //                 initial={{ scale: 1, opacity: 1 }}
// //                 animate={
// //                   clicked
// //                     ? { scale: 0.9, opacity: 0.6 }
// //                     : { scale: 1, opacity: 1 }
// //                 }
// //                 transition={{ duration: 1 }}
// //               >
// //                 {clicked ? "Creating Account..." : "Create Account"}
// //               </motion.button>

// //               <hr className="my-8" />

// //               <p className="mt-4">
// //                 <Link
// //                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
// //                   to="/login"
// //                 >
// //                   Already have an account? Login
// //                 </Link>
// //               </p>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import Create from "/images/Create.png"; // Ensure correct file extension
// // import { Input, Label } from "@windmill/react-ui";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [clicked, setClicked] = useState(false);

// //   const handleCreateAccount = () => {
// //     setClicked(true);
// //     setTimeout(() => {
// //       navigate("/login");
// //     }, 1000); // Simulating loading effect before navigation
// //   };

// //   return (
// //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
// //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
// //         <div className="flex flex-row">
// //           {/* Image Section (60% Left Side) */}
// //           <div className="w-3/5 h-full">
// //             <img
// //               aria-hidden="true"
// //               className="w-full h-full object-cover"
// //               src={Create}
// //               alt="Office"
// //             />
// //           </div>

// //           {/* Form Section (40% Right Side) */}
// //           <main className="w-2/5 flex items-center justify-center p-2 sm:p-6">
// //             <div className="w-full">
// //               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
// //                 Create account
// //               </h1>
// //               <Label>
// //                 <span>Business Name</span>
// //                 <Input className="mt-1" type="text" placeholder="name" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Email</span>
// //                 <Input
// //                   className="mt-1"
// //                   type="email"
// //                   placeholder="email@email.com"
// //                 />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Phone</span>
// //                 <Input className="mt-1" type="text" placeholder="+123456789" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Username</span>
// //                 <Input className="mt-1" type="text" placeholder="username" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Password</span>
// //                 <Input
// //                   className="mt-1"
// //                   placeholder="your-password"
// //                   type="password"
// //                 />
// //               </Label>

// //               {/* Create Account Button with Animation */}
// //               <motion.button
// //                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
// //                 onClick={handleCreateAccount}
// //                 initial={{ scale: 1, opacity: 1 }}
// //                 animate={
// //                   clicked
// //                     ? { scale: 0.9, opacity: 0.6 }
// //                     : { scale: 1, opacity: 1 }
// //                 }
// //                 transition={{ duration: 1 }}
// //               >
// //                 {clicked ? "Creating Account..." : "Create Account"}
// //               </motion.button>

// //               <hr className="my-8" />

// //               <p className="mt-4">
// //                 <Link
// //                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
// //                   to="/login"
// //                 >
// //                   Already have an account? Login
// //                 </Link>
// //               </p>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import Create from "/images/Create.png"; // Ensure correct path
// // import { Input, Label } from "@windmill/react-ui";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [clicked, setClicked] = useState(false);

// //   const handleCreateAccount = () => {
// //     setClicked(true);
// //     setTimeout(() => {
// //       navigate("/login");
// //     }, 1000); // Simulating loading effect before navigation
// //   };

// //   return (
// //     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
// //       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
// //         <div className="flex flex-row h-full items-stretch">
// //           {/* Image Section (Shifted Right) */}
// //           <div className="w-3/5 h-full">
// //             <img
// //               aria-hidden="true"
// //               className="w-full h-full  object-left"
// //               src={Create}
// //               alt="Office"
// //             />
// //           </div>

// //           {/* Form Section */}
// //           <main className="w-2/5 flex items-center justify-center p-2 sm:px-6">
// //             <div className="w-full">
// //               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
// //                 Create account
// //               </h1>
// //               <Label>
// //                 <span>Business Name</span>
// //                 <Input className="mt-1" type="text" placeholder="name" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Email</span>
// //                 <Input
// //                   className="mt-1"
// //                   type="email"
// //                   placeholder="email@email.com"
// //                 />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Phone</span>
// //                 <Input className="mt-1" type="text" placeholder="+123456789" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Username</span>
// //                 <Input className="mt-1" type="text" placeholder="username" />
// //               </Label>
// //               <Label className="mt-4">
// //                 <span>Password</span>
// //                 <Input
// //                   className="mt-1"
// //                   placeholder="your-password"
// //                   type="password"
// //                 />
// //               </Label>

// //               {/* Create Account Button with Animation */}
// //               <motion.button
// //                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
// //                 onClick={handleCreateAccount}
// //                 initial={{ scale: 1, opacity: 1 }}
// //                 animate={
// //                   clicked
// //                     ? { scale: 0.9, opacity: 0.6 }
// //                     : { scale: 1, opacity: 1 }
// //                 }
// //                 transition={{ duration: 1 }}
// //               >
// //                 {clicked ? "Creating Account..." : "Create Account"}
// //               </motion.button>

// //               <hr className="my-3" />

// //               <p className="mt-3">
// //                 <Link
// //                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
// //                   to="/login"
// //                 >
// //                   Already have an account? Login
// //                 </Link>
// //               </p>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Create from "/images/Create.png"; // Ensure correct path
// import { Input, Label } from "@windmill/react-ui";

// function Login() {
//   const navigate = useNavigate();
//   const [clicked, setClicked] = useState(false);

//   const handleCreateAccount = () => {
//     setClicked(true);
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000); // Simulating loading effect before navigation
//   };

//   return (
//     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
//       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
//         <div className="flex flex-row h-full">
//           {/* Image Section (Left Side - 60%) */}
//           <div className="w-3/5 h-full">
//             <img
//               aria-hidden="true"
//               className="w-full h-full object-cover"
//               src={Create}
//               alt="Office"
//             />
//           </div>

//           {/* Form Section (Right Side - 40%) */}
//           <main className="w-2/5 h-full flex items-center justify-center p-2 sm:px-5">
//             <div className="w-full">
//               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
//                 Create account
//               </h1>
//               <Label>
//                 <span>Business Name</span>
//                 <Input className="mt-1" type="text" placeholder="name" />
//               </Label>
//               <Label className="mt-4">
//                 <span>Email</span>
//                 <Input
//                   className="mt-1"
//                   type="email"
//                   placeholder="email@email.com"
//                 />
//               </Label>
//               <Label className="mt-4">
//                 <span>Phone</span>
//                 <Input className="mt-1" type="text" placeholder="+123456789" />
//               </Label>
//               <Label className="mt-4">
//                 <span>Username</span>
//                 <Input className="mt-1" type="text" placeholder="username" />
//               </Label>
//               <Label className="mt-4">
//                 <span>Password</span>
//                 <Input
//                   className="mt-1"
//                   placeholder="your-password"
//                   type="password"
//                 />
//               </Label>

//               {/* Create Account Button with Animation */}
//               <motion.button
//                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
//                 onClick={handleCreateAccount}
//                 initial={{ scale: 1, opacity: 1 }}
//                 animate={
//                   clicked
//                     ? { scale: 0.9, opacity: 0.6 }
//                     : { scale: 1, opacity: 1 }
//                 }
//                 transition={{ duration: 1 }}
//               >
//                 {clicked ? "Creating Account..." : "Create Account"}
//               </motion.button>

//               <hr className="my-3" />

//               <p className="mt-3">
//                 <Link
//                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                   to="/login"
//                 >
//                   Already have an account? Login
//                 </Link>
//               </p>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Create from "/images/Create.png"; // Ensure correct path
// import { Input, Label } from "@windmill/react-ui";

// function Login() {
//   const navigate = useNavigate();
//   const [clicked, setClicked] = useState(false);

//   const handleCreateAccount = () => {
//     setClicked(true);
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000); // Simulating loading effect before navigation
//   };

//   return (
//     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
//       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
//         <div className="flex h-full">
//           {/* Image Section - Left (60%) */}
//           <div className="w-3/5 h-screen hidden md:block">
//             <img
//               aria-hidden="true"
//               className="w-full h-full object-cover"
//               src="https://www.paj-gps.com/wp-content/uploads/2023/08/fleet-tracking-for-businesses.webp"
//               alt="Office"
//             />
//           </div>

//           {/* Form Section - Right (40%) */}
//           <main className="w-full md:w-2/5 flex items-center justify-center p-6">
//             <div className="w-full">
//               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
//                 Create Account
//               </h1>
//               <Label>
//                 <span>Business Name</span>
//                 <Input
//                   className="mt-1"
//                   type="text"
//                   placeholder="Business Name"
//                 />
//               </Label>
//               <Label className="mt-4">
//                 <span>Email</span>
//                 <Input
//                   className="mt-1"
//                   type="email"
//                   placeholder="email@email.com"
//                 />
//               </Label>
//               <Label className="mt-4">
//                 <span>Phone</span>
//                 <Input className="mt-1" type="text" placeholder="+123456789" />
//               </Label>
//               <Label className="mt-4">
//                 <span>Username</span>
//                 <Input className="mt-1" type="text" placeholder="Username" />
//               </Label>
//               <Label className="mt-4">
//                 <span>Password</span>
//                 <Input
//                   className="mt-1"
//                   type="password"
//                   placeholder="Your Password"
//                 />
//               </Label>

//               {/* Create Account Button with Animation */}
//               <motion.button
//                 className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none focus:ring-0 focus:border-transparent"
//                 onClick={handleCreateAccount}
//                 initial={{ scale: 1, opacity: 1 }}
//                 animate={
//                   clicked
//                     ? { scale: 0.9, opacity: 0.6 }
//                     : { scale: 1, opacity: 1 }
//                 }
//                 transition={{ duration: 1 }}
//               >
//                 {clicked ? "Creating Account..." : "Create Account"}
//               </motion.button>

//               <hr className="my-3" />

//               <p className="mt-3 text-center">
//                 <Link
//                   className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                   to="/login"
//                 >
//                   Already have an account? Login
//                 </Link>
//               </p>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Label } from "@windmill/react-ui";

function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleCreateAccount = async () => {
    setClicked(true);
    setError(null);

    try {
      const response = await fetch("http://15.207.117.91/company/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create account");
      }

      alert("Account created successfully! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      setError(error.message);
      setClicked(false);
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex h-full">
          {/* Image Section */}
          <div className="w-3/5 h-screen hidden md:block">
            <img
              aria-hidden="true"
              className="w-full h-full object-cover"
              src="https://www.paj-gps.com/wp-content/uploads/2023/08/fleet-tracking-for-businesses.webp"
              alt="Office"
            />
          </div>

          {/* Form Section */}
          <main className="w-full md:w-2/5 flex items-center justify-center p-6">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create Account
              </h1>

              <Label>
                <span>Business Name</span>
                <Input
                  className="mt-1"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  required
                />
              </Label>

              <Label className="mt-4">
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                />
              </Label>

              <Label className="mt-4">
                <span>Phone</span>
                <Input
                  className="mt-1"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+123456789"
                  required
                />
              </Label>

              <Label className="mt-4">
                <span>Username</span>
                <Input
                  className="mt-1"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  required
                />
              </Label>

              {/* Show Error Message if API Fails */}
              {error && <p className="mt-2 text-red-600">{error}</p>}

              {/* Create Account Button */}
              <motion.button
                className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300 focus:outline-none"
                onClick={handleCreateAccount}
                disabled={clicked}
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  clicked
                    ? { scale: 0.9, opacity: 0.6 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.5 }}
              >
                {clicked ? "Creating Account..." : "Create Account"}
              </motion.button>

              <hr className="my-3" />

              <p className="mt-3 text-center">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
