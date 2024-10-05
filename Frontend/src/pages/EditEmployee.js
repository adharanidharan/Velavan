// import { useEffect, useState, useRef, Fragment } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Dialog, Transition } from "@headlessui/react";
// import { PlusIcon } from "@heroicons/react/24/outline";

// export default function EditEmployee() {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(true); // Open modal by default
//   const cancelButtonRef = useRef(null);

//   useEffect(() => {
//     async function fetchRecord() {
//       try {
//         const response = await fetch(`http://localhost:5050/records/${id}`);
//         if (!response.ok) {
//           throw new Error(`Error fetching record: ${response.statusText}`);
//         }
//         const recordData = await response.json();
//         setRecord(recordData);
//       } catch (error) {
//         console.error('Error fetching record:', error);
//         setError('Error fetching record.');
//       }
//     }

//     fetchRecord();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5050/records/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(record),
//       });
//       if (!response.ok) {
//         throw new Error(`Error updating record: ${response.statusText}`);
//       }
//       navigate("/recordlist"); // Navigate back to the record list
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setError('Error updating record.');
//     }
//   };

//   if (error) return <div>{error}</div>;
//   if (!record) return <div>Loading...</div>;

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <PlusIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
//                       <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 ">
//                         Edit Employee
//                       </Dialog.Title>
//                       <form onSubmit={handleSubmit} className="space-y-4">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Name"
//                           value={record.name}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         />
//                         <input
//                           type="text"
//                           name="position"
//                           placeholder="Position"
//                           value={record.position}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         />
//                         <select
//                           name="level"
//                           value={record.level}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         >
//                           <option value="">Select Level</option>
//                           <option value="Junior">Junior</option>
//                           <option value="Senior">Senior</option>
//                           <option value="Intern">Intern</option>
//                         </select>
//                         <input
//                           type="text"
//                           name="address"
//                           placeholder="Address"
//                           value={record.address}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Email"
//                           value={record.email}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         />
//                         <input
//                           type="tel"
//                           name="phone"
//                           placeholder="Phone"
//                           value={record.phone}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         />
//                         <select
//                           name="gender"
//                           value={record.gender}
//                           onChange={handleChange}
//                           className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
//                           required
//                         >
//                           <option value="">Select Gender</option>
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
//                           Update Employee
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                   <button
//                     type="button"
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={() => setOpen(false)}
//                     ref={cancelButtonRef}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }



import { useEffect, useState, useRef, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function EditEmployee() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true); // Open modal by default
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    async function fetchRecord() {
      try {
        const response = await fetch(`http://localhost:4000/records/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching record: ${response.statusText}`);
        }
        const recordData = await response.json();
        setRecord(recordData);
      } catch (error) {
        console.error('Error fetching record:', error);
        setError('Error fetching record.');
      }
    }

    fetchRecord();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/records/${id}`, {
        method: "PATCH", // Use PATCH for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });
      if (!response.ok) {
        throw new Error(`Error updating record: ${response.statusText}`);
      }
      navigate("/employee-details"); // Navigate back to the record list
    } catch (error) {
      console.error('Error updating record:', error);
      setError('Error updating record.');
    }
  };

  if (error) return <div>{error}</div>;
  if (!record) return <div>Loading...</div>;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                      <PlusIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 ">
                        Edit Employee
                      </Dialog.Title>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={record.name}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        />
                        <input
                          type="text"
                          name="position"
                          placeholder="Position"
                          value={record.position}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        />
                        <select
                          name="level"
                          value={record.level}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        >
                          <option value="">Select Level</option>
                          <option value="Junior">Junior</option>
                          <option value="Senior">Senior</option>
                          <option value="Intern">Intern</option>
                        </select>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={record.address}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={record.email}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={record.phone}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        />
                        <select
                          name="gender"
                          value={record.gender}
                          onChange={handleChange}
                          className="border rounded p-2 w-full bg-gray-800 text-white" // Updated styles
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                          Update Employee
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
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
}
