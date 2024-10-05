// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UploadImage from "../components/UploadImage";

// function Register() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//     imageUrl: "",
//   });

//   const navigate = useNavigate();

//   // Handling Input change for registration form.
//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Register User
//   const registerUser = () => {
//     fetch("http://localhost:4000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then((result) => {
//         alert("Successfully Registered, Now Login with your details");
//         navigate('/login')
        
//       })
//       .catch((err) => console.log(err));
//   };
//   // ------------------

//   // Uploading image to cloudinary
//   const uploadImage = async (image) => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "inventoryapp");

//     await fetch("https://api.cloudinary.com/v1_1/ddhayhptm/image/upload", {
//       method: "POST",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setForm({ ...form, imageUrl: data.url });
//         alert("Image Successfully Uploaded");
//       })
//       .catch((error) => console.log(error));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  items-center place-items-center">
//         <div className="w-full max-w-md space-y-8  p-10 rounded-lg">
//           <div>
//             <img
//               className="mx-auto h-12 w-auto"
//               src={require("../assets/logo.png")}
//               alt="Your Company"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//               Register your account in Velavan Textile
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             {/* <input type="hidden" name="remember" defaultValue="true"  /> */}
//             <div className="flex flex-col gap-4 rounded-md shadow-sm">
//   <div className="flex flex-col gap-2">
//     <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name:</label>
//     <input
//       id="firstName"
//       name="firstName"
//       type="text"
//       required
//       className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//       placeholder="First Name"
//       value={form.firstName}
//       onChange={handleInputChange}
//     />
//   </div>

//   <div className="flex flex-col gap-2">
//     <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name:</label>
//     <input
//       id="lastName"
//       name="lastName"
//       type="text"
//       required
//       className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//       placeholder="Last Name"
//       value={form.lastName}
//       onChange={handleInputChange}
//     />
//   </div>

//               <div>
//                 <p>Email:</p>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <p>Password:</p>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <p>Phone Number:</p>
//                 <input
//                   name="phoneNumber"
//                   type="number"
//                   autoComplete="phoneNumber"
//                   required
//                   className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Phone Number"
                  
//                   value={form.phoneNumber}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <UploadImage uploadImage={uploadImage} />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   checked
//                   required
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   I Agree Terms & Conditons
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <span className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot your password?
//                 </span>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 onClick={registerUser}
//               >
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   {/* <LockClosedIcon
//                       className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                       aria-hidden="true"
//                     /> */}
//                 </span>
//                 Sign up
//               </button>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Or{" "}
//                 <span
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                    <Link to="/login">Already Have an Account, Please
//                   Signin now </Link>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="flex justify-center order-first sm:order-last">
//           <img src={require("../assets/Login.png")} alt="" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UploadImage from "../components/UploadImage";

// function Register() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//     imageUrl: "",
//   });
//   const [emailError, setEmailError] = useState(""); // State for email error

//   const navigate = useNavigate();

//   // Email validation function
//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   // Handling Input change for registration form.
//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Register User
//   const registerUser = () => {
//     // Check if email is valid
//     if (!validateEmail(form.email)) {
//       setEmailError("Please enter a valid email address");
//       return; // Prevent further execution if email is invalid
//     } else {
//       setEmailError(""); // Clear error message if email is valid
//     }

//     // Continue with registration if email is valid
//     fetch("http://localhost:4000/api/register", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then((result) => {
//         alert("Successfully Registered, Now Login with your details");
//         navigate('/login');
//       })
//       .catch((err) => console.log(err));
//   };

//   // Uploading image to Cloudinary
//   const uploadImage = async (image) => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "inventoryapp");

//     await fetch("https://api.cloudinary.com/v1_1/ddhayhptm/image/upload", {
//       method: "POST",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setForm({ ...form, imageUrl: data.url });
//         alert("Image Successfully Uploaded");
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     registerUser(); // Trigger registration on form submit
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center">
//         <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
//           <div>
//             <img
//               className="mx-auto h-12 w-auto"
//               src={require("../assets/logo.png")}
//               alt="Your Company"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//               Register your account in Velavan Textile
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-4 rounded-md shadow-sm">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
//                   First Name:
//                 </label>
//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   required
//                   className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                   placeholder="First Name"
//                   value={form.firstName}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
//                   Last Name:
//                 </label>
//                 <input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   required
//                   className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                   placeholder="Last Name"
//                   value={form.lastName}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <p>Email:</p>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={handleInputChange}
//                 />
//                 {/* Display email error if email is invalid */}
//                 {emailError && (
//                   <p className="text-red-500 text-sm mt-1">{emailError}</p>
//                 )}
//               </div>

//               <div>
//                 <p>Password:</p>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <p>Phone Number:</p>
//                 <input
//                   name="phoneNumber"
//                   type="number"
//                   autoComplete="phoneNumber"
//                   required
//                   className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="Phone Number"
//                   value={form.phoneNumber}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <UploadImage uploadImage={uploadImage} />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   required
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   I Agree Terms & Conditons
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <span className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot your password?
//                 </span>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign up
//               </button>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Or{" "}
//                 <span className="font-medium text-indigo-600 hover:text-indigo-500">
//                   <Link to="/login">Already Have an Account, Please Signin now</Link>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="flex justify-center order-first sm:order-last">
//           <img src={require("../assets/Login.png")} alt="" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    imageUrl: "",
    position: "", // New field for position
    gender: "", // New field for gender
    salary: "", // New field for salary
  });
  const [emailError, setEmailError] = useState(""); // State for email error

  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handling Input change for registration form.
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register User
  const registerUser = () => {
    // Check if email is valid
    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address");
      return; // Prevent further execution if email is invalid
    } else {
      setEmailError(""); // Clear error message if email is valid
    }

    // Continue with registration if email is valid
    fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((result) => {
        alert("Successfully Registered, Now Login with your details");
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  // Uploading image to Cloudinary
  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "inventoryapp");

    await fetch("https://api.cloudinary.com/v1_1/ddhayhptm/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setForm({ ...form, imageUrl: data.url });
        alert("Image Successfully Uploaded");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(); // Trigger registration on form submit
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center">
        <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={require("../assets/logo.png")}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register your account in Velavan Textile
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 rounded-md shadow-sm">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name:
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name:
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="block w-full rounded-md border border-gray-300 py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Email:</p>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleInputChange}
                />
                {/* Display email error if email is invalid */}
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <p>Password:</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Phone Number:</p>
                <input
                  name="phoneNumber"
                  type="number"
                  autoComplete="phoneNumber"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              {/* New input fields for position, gender, and salary */}
              <div>
                <p>Position:</p>
                <input
                  name="position"
                  type="text"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Position"
                  value={form.position}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Gender:</p>
                <select
                  name="gender"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={form.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <p>Salary:</p>
                <input
                  name="salary"
                  type="number"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Salary"
                  value={form.salary}
                  onChange={handleInputChange}
                />
              </div>

              <UploadImage uploadImage={uploadImage} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  required
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  I Agree Terms & Conditons
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Register
              </button>
            </div>

            <div>
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
