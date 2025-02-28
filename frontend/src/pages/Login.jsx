// import { Link } from "react-router-dom";

// import ImageLight from "../assets/img/login-office.jpeg";
// import ImageDark from "../assets/img/login-office-dark.jpeg";
// import { Label, Input, Button } from "@windmill/react-ui";

// function Login() {
//   return (
//     <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
//       <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
//         <div className="flex flex-col overflow-y-auto md:flex-row">
//           <div className="h-32 md:h-auto md:w-1/2">
//             <img
//               aria-hidden="true"
//               className="object-cover w-full h-full dark:hidden"
//               src={ImageLight}
//               alt="Office"
//             />
//             <img
//               aria-hidden="true"
//               className="hidden object-cover w-full h-full dark:block"
//               src={ImageDark}
//               alt="Office"
//             />
//           </div>
//           <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
//             <div className="w-full">
//               <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
//                 Login
//               </h1>
//               <Label>
//                 <span>Username</span>
//                 <Input className="mt-1" type="text" placeholder="UserName" />
//               </Label>

//               <Label className="mt-4">
//                 <span>Password</span>
//                 <Input
//                   className="mt-1"
//                   type="password"
//                   placeholder="Password"
//                 />
//               </Label>

//               <Button className="mt-4 bg-green-700" block tag={Link} to="/app">
//                 Log in
//               </Button>

//               <hr className="my-8" />

//               <p className="mt-4">
//                 <Link
//                   className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
//                   to="/forgot-password"
//                 >
//                   Forgot your password?
//                 </Link>
//               </p>
//               <p className="mt-1">
//                 <Link
//                   className="text-sm font-medium text-green-700 dark:text-green-300 hover:underline"
//                   to="/create-account"
//                 >
//                   Create account
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

// import { Link } from "react-router-dom";
// import ImageLight from "../assets/img/login-office.jpeg";
// import ImageDark from "../assets/img/login-office-dark.jpeg";
// import { Label, Input, Button } from "@windmill/react-ui";

// function Login() {
//   return (
//     <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
//       <div className="flex-1 max-w-5xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 flex overflow-hidden">
//         {/* Image Section - 60% width */}
//         <div className="w-3/5">
//           <img
//             aria-hidden="true"
//             className="w-full h-full object-cover"
//             src="https://whereismystaff.com/wp-content/uploads/2024/01/Wheres-My-Staff-Desktop-Web-app.png"
//             alt="Office"
//           />
//           <img
//             aria-hidden="true"
//             className="hidden w-full h-full object-cover dark:block"
//             src={ImageDark}
//             alt="Office"
//           />
//         </div>

//         {/* Login Section - 40% width */}
//         <main className="w-2/5 flex items-center justify-center p-6 sm:p-12">
//           <div className="w-full">
//             <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
//               Login
//             </h1>

//             <Label>
//               <span className="text-gray-700 dark:text-gray-300">Username</span>
//               <Input className="mt-1" type="text" placeholder="UserName" />
//             </Label>

//             <Label className="mt-4">
//               <span className="text-gray-700 dark:text-gray-300">Password</span>
//               <Input className="mt-1" type="password" placeholder="Password" />
//             </Label>

//             {/* ✅ Button with Exact Color Fix */}
//             {/* <Button
//               className="mt-6 bg-[#046C4E] hover:bg-[#035A41] text-white transition duration-300"
//               block
//               tag={Link}
//               to="/app"
//             >
//               Log in
//             </Button> */}
//             <Link to="/app">
//               <button className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300">
//                 Log in
//               </button>
//             </Link>

//             <hr className="my-8 border-gray-300 dark:border-gray-600" />

//             <p className="mt-4">
//               <Link
//                 className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
//                 to="/forgot-password"
//               >
//                 Forgot your password?
//               </Link>
//             </p>
//             <p className="mt-1">
//               <Link
//                 className="text-sm font-medium text-green-700 dark:text-green-300 hover:underline"
//                 to="/create-account"
//               >
//                 Create account
//               </Link>
//             </p>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { Label, Input } from "@windmill/react-ui";

function Login() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/app");
    }, 1000); // 2-second delay before navigation
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex-1 max-w-5xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 flex overflow-hidden">
        {/* Image Section */}
        <div className="w-3/5">
          <img
            aria-hidden="true"
            className="w-full h-full object-cover"
            src="https://whereismystaff.com/wp-content/uploads/2024/01/Wheres-My-Staff-Desktop-Web-app.png"
            alt="Office"
          />
          <img
            aria-hidden="true"
            className="hidden w-full h-full object-cover dark:block"
            src={ImageDark}
            alt="Office"
          />
        </div>

        {/* Login Section */}
        <main className="w-2/5 flex items-center justify-center p-6 sm:p-12">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>

            <Label>
              <span className="text-gray-700 dark:text-gray-300">Username</span>
              <Input className="mt-1" type="text" placeholder="UserName" />
            </Label>

            <Label className="mt-4">
              <span className="text-gray-700 dark:text-gray-300">Password</span>
              <Input className="mt-1" type="password" placeholder="Password" />
            </Label>

            {/* Animated Login Button */}
            <motion.button
              className="mt-6 w-full bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition duration-300  focus:outline-none"
              onClick={handleLogin}
              initial={{ scale: 1, opacity: 1 }}
              animate={
                clicked
                  ? { scale: 0.9, opacity: 0.6 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              {clicked ? "Logging in..." : "Log in"}
            </motion.button>

            <hr className="my-8 border-gray-300 dark:border-gray-600" />

            <p className="mt-4">
              <a
                className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                href="/forgot-password"
              >
                Forgot your password?
              </a>
            </p>
            <p className="mt-1">
              <a
                className="text-sm font-medium text-green-700 dark:text-green-300 hover:underline"
                href="/create-account"
              >
                Create account
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
