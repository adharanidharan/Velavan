// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Record.css'; // Ensure this CSS file is created and contains relevant styles

// const Record = () => {
//   const [record, setRecord] = useState({
//     name: '',
//     position: '',
//     level: '',
//     address: '',
//     email: '',
//     phone: '',
//     gender: '',
//     password: '',
//   });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       const fetchRecord = async () => {
//         try {
//           const response = await fetch(`http://localhost:5050/records/${id}`);
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           const data = await response.json();
//           setRecord(data);
//         } catch (error) {
//           console.error('Error fetching record:', error);
//           setError('Error fetching record.');
//         }
//       };

//       fetchRecord();
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     setRecord({ ...record, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const method = id ? 'PATCH' : 'POST';
//     const url = id
//       ? `http://localhost:5050/records/${id}`
//       : 'http://localhost:5050/records';

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(record),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Record saved:', data);
//       navigate('/employee-details'); // Navigate to the RecordList page
//     } catch (error) {
//       console.error('Error saving record:', error);
//       setError('Error saving record.');
//     }
//   };

//   return (
//     <div className="record-container">
//       {error && <p className="error">{error}</p>}
//       <h1 className="title">{id ? 'Edit Record' : 'Add New Record'}</h1>
//       <form className="record-form" onSubmit={handleSubmit}>
//         <label className="form-label">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={record.name}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <label className="form-label">
//           Position:
//           <input
//             type="text"
//             name="position"
//             value={record.position}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <label className="form-label">
//           Level:
//           <select
//             name="level"
//             value={record.level}
//             onChange={handleChange}
//             required
//             className="form-select"
//           >
//             <option value="">Select Level</option>
//             <option value="Intern">Intern</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//           </select>
//         </label>
//         <label className="form-label">
//           Address:
//           <input
//             type="text"
//             name="address"
//             value={record.address}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <label className="form-label">
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={record.email}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <label className="form-label">
//           Phone:
//           <input
//             type="text"
//             name="phone"
//             value={record.phone}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <label className="form-label">
//           Gender:
//           <select
//             name="gender"
//             value={record.gender}
//             onChange={handleChange}
//             required
//             className="form-select"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label className="form-label">
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={record.password}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </label>
//         <button type="submit" className="submit-button">{id ? 'Update' : 'Save'}</button>
//       </form>
//     </div>
//   );
// };

// export default Record;



import React, { useState, useEffect, Fragment, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import './Record.css';

const Record = ({ handleModalClose }) => {
  const [record, setRecord] = useState({
    name: "",
    position: "",
    level: "",
    address: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (id) {
      const fetchRecord = async () => {
        try {
          const response = await fetch(`http://localhost:4000/records/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setRecord(data);
        } catch (error) {
          console.error("Error fetching record:", error);
          setError("Error fetching record.");
        }
      };

      fetchRecord();
    }
  }, [id]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PATCH" : "POST";
    const url = id
      ? `http://localhost:4000/records/${id}`
      : "http://localhost:4000/records";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Record saved:", data);
      navigate("/employee-details");
    } catch (error) {
      console.error("Error saving record:", error);
      setError("Error saving record.");
    }
  };

  const handleCancel = () => {
    setOpen(false);
    handleModalClose(); // Ensure the parent closes the modal
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCancel} // Close when clicking outside or pressing Escape
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PlusIcon
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900"
                      >
                        {id ? "Edit Record" : "Add New Record"}
                      </Dialog.Title>
                      {error && <p className="error">{error}</p>}
                      <form className="grid gap-4 mb-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                        {/* Form Fields */}
                        <div>
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={record.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="position" className="form-label">
                            Position
                          </label>
                          <input
                            type="text"
                            name="position"
                            value={record.position}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="level" className="form-label">
                            Level
                          </label>
                          <select
                            name="level"
                            value={record.level}
                            onChange={handleChange}
                            required
                            className="form-input"
                          >
                            <option value="">Select Level</option>
                            <option value="Internship">Intern</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={record.address}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={record.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={record.phone}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="gender" className="form-label">
                            Gender
                          </label>
                          <select
                            name="gender"
                            value={record.gender}
                            onChange={handleChange}
                            required
                            className="form-input"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={record.password}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    {id ? "Update" : "Save"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleCancel}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Record;

