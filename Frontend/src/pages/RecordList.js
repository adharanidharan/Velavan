// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//     <td className="p-4 align-middle">{props.record.name}</td>
//     <td className="p-4 align-middle">{props.record.position}</td>
//     <td className="p-4 align-middle">{props.record.level}</td>
//     <td className="p-4 align-middle">{props.record.address}</td>
//     <td className="p-4 align-middle">{props.record.email}</td>
//     <td className="p-4 align-middle">{props.record.phone}</td>
//     <td className="p-4 align-middle">{props.record.gender}</td>
//     <td className="p-4 align-middle">
//       {props.record.attendanceStatus || "No Record"}
//     </td>
//     <td className="p-4 align-middle">
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3 bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:red hover:text-accent-foreground h-9 rounded-md px-3 bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState(""); // For searching by name
//   const [levelFilter, setLevelFilter] = useState(""); // For filtering by level

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [recordResponse, attendanceResponse] = await Promise.all([
//           fetch(`http://localhost:5050/records`),
//           fetch(`http://localhost:5050/attendance`)
//         ]);

//         if (!recordResponse.ok || !attendanceResponse.ok) {
//           throw new Error('HTTP error');
//         }

//         const [recordsData, attendanceData] = await Promise.all([
//           recordResponse.json(),
//           attendanceResponse.json()
//         ]);

//         // Combine records with their attendance
//         const recordsWithAttendance = recordsData.map(record => {
//           const attendance = attendanceData.find(a => a.employeeId === record._id);
//           return {
//             ...record,
//             attendanceStatus: attendance ? attendance.status : "No Record"
//           };
//         });

//         setRecords(recordsWithAttendance);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:5050/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   // Filter the records based on search term and level filter
//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <>
//       {error && <p className="error">{error}</p>}
//       <h3 className="text-lg font-semibold p-4">Employee Records</h3>
      
//       {/* Search bar and level filter */}
//       <div className="p-4 flex gap-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           className="border rounded p-2"
//         />
//         <select
//           value={levelFilter}
//           onChange={e => setLevelFilter(e.target.value)}
//           className="border rounded p-2"
//         >
//           <option value="">All Levels</option>
//           <option value="Junior">Junior</option>
//           <option value="Senior">Senior</option>
//           <option value="Intern">Intern</option>
//         </select>
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <div className="relative w-full overflow-auto">
//           <table className="w-full caption-bottom text-sm">
//             <thead className="[&amp;_tr]:border-b">
//               <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Position</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Level</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Address</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Phone</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Gender</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Attendance Status</th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Action</th>
//               </tr>
//             </thead>
//             <tbody className="[&amp;_tr:last-child]:border-0">
//               {filteredRecords.map((attendance) => (
//                 <Record
//                   record={attendance}
//                   onDelete={deleteRecord}
//                   key={attendance._id}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>{props.record.attendanceStatus || "No Record"}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [recordResponse, attendanceResponse] = await Promise.all([
//           fetch(`http://localhost:5050/records`),
//           fetch(`http://localhost:5050/attendance`)
//         ]);

//         if (!recordResponse.ok || !attendanceResponse.ok) {
//           throw new Error('HTTP error');
//         }

//         const [recordsData, attendanceData] = await Promise.all([
//           recordResponse.json(),
//           attendanceResponse.json()
//         ]);

//         const recordsWithAttendance = recordsData.map(record => {
//           const attendance = attendanceData.find(a => a.employeeId === record._id);
//           return {
//             ...record,
//             attendanceStatus: attendance ? attendance.status : "No Record"
//           };
//         });

//         setRecords(recordsWithAttendance);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:5050/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={e => setLevelFilter(e.target.value)}
//             className="border rounded p-2"
//           >
//             <option value="">All Levels</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Attendance Status</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.map((attendance) => (
//                 <Record
//                   record={attendance}
//                   onDelete={deleteRecord}
//                   key={attendance._id}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>{props.record.attendanceStatus || "No Record"}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [recordResponse, attendanceResponse] = await Promise.all([
//           fetch(`http://localhost:5050/records`),
//           fetch(`http://localhost:5050/attendance`)
//         ]);

//         // Check if responses are okay
//         if (!recordResponse.ok) {
//           throw new Error(`Error fetching records: ${recordResponse.statusText}`);
//         }
//         if (!attendanceResponse.ok) {
//           throw new Error(`Error fetching attendance: ${attendanceResponse.statusText}`);
//         }

//         const [recordsData, attendanceData] = await Promise.all([
//           recordResponse.json(),
//           attendanceResponse.json()
//         ]);

//         const recordsWithAttendance = recordsData.map(record => {
//           const attendance = attendanceData.find(a => a.employeeId === record._id);
//           return {
//             ...record,
//             attendanceStatus: attendance ? attendance.status : "No Record"
//           };
//         });

//         setRecords(recordsWithAttendance);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:5050/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={e => setLevelFilter(e.target.value)}
//             className="border rounded p-2"
//           >
//             <option value="">All Levels</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Attendance Status</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.map((attendance) => (
//                 <Record
//                   record={attendance}
//                   onDelete={deleteRecord}
//                   key={attendance._id}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:5050/records`);

//         // Check if response is okay
//         if (!response.ok) {
//           throw new Error(`Error fetching records: ${response.statusText}`);
//         }

//         const recordsData = await response.json();
//         setRecords(recordsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:5050/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={e => setLevelFilter(e.target.value)}
//             className="border rounded p-2"
//           >
//             <option value="">All Levels</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.map((record) => (
//                 <Record
//                   record={record}
//                   onDelete={deleteRecord}
//                   key={record._id}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:4000/records`);
//         if (!response.ok) {
//           throw new Error(`Error fetching records: ${response.statusText}`);
//         }
//         const recordsData = await response.json();
//         setRecords(recordsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:4000/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={e => setLevelFilter(e.target.value)}
//             // className="border rounded p-2 max-w-100"
//             className="border rounded p-2 max-w-200 text-nowrap"
//           >
//             <option value="">All</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" style={{ width: '120px' }}>Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.length > 0 ? (
//                 filteredRecords.map((record) => (
//                   <Record
//                     record={record}
//                     onDelete={deleteRecord}
//                     key={record._id}
//                   />
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-center py-4 text-gray-500">
//                     No employees are available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:4000/records`);
//         if (!response.ok) {
//           throw new Error(`Error fetching records: ${response.statusText}`);
//         }
//         const recordsData = await response.json();
//         setRecords(recordsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:4000/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   }

//   const filteredRecords = records.filter(record => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const tableData = filteredRecords.map(record => [
//       record.name,
//       record.position,
//       record.level,
//       record.address,
//       record.email,
//       record.phone,
//       record.gender,
//     ]);

//     const headers = ["Name", "Position", "Level", "Address", "Email", "Phone", "Gender"];

//     autoTable(doc, {
//       head: [headers],
//       body: tableData,
//     });

//     doc.save(`employee_records_${levelFilter || 'all'}.pdf`);
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={generatePDF}
//             >
//               Download Records
//             </button>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={e => setLevelFilter(e.target.value)}
//             className="border rounded p-2 max-w-200"
//           >
//             <option value="">All</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" style={{ width: '120px' }}>Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.length > 0 ? (
//                 filteredRecords.map((record) => (
//                   <Record
//                     record={record}
//                     onDelete={deleteRecord}
//                     key={record._id}
//                   />
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-center py-4 text-gray-500">
//                     No employees are available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }







// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// const Record = (props) => (
//   <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
//     <td>{props.record.name}</td>
//     <td>{props.record.position}</td>
//     <td>{props.record.level}</td>
//     <td>{props.record.address}</td>
//     <td>{props.record.email}</td>
//     <td>{props.record.phone}</td>
//     <td>{props.record.gender}</td>
//     <td>
//       <div className="flex gap-2">
//         <button>
//           <Link
//             className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
//             to={`/edit/${props.record._id}`}
//           >
//             Edit
//           </Link>
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
//           type="button"
//           onClick={() => props.onDelete(props.record._id)}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [levelFilter, setLevelFilter] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:4000/records`);
//         if (!response.ok) {
//           throw new Error(`Error fetching records: ${response.statusText}`);
//         }
//         const recordsData = await response.json();
//         setRecords(recordsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data.");
//       }
//     }

//     fetchData();
//   }, []);

//   async function deleteRecord(id) {
//     try {
//       await fetch(`http://localhost:4000/records/${id}`, {
//         method: "DELETE",
//       });
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//     } catch (error) {
//       console.error("Error deleting record:", error);
//     }
//   }

//   const filteredRecords = records.filter((record) => {
//     const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = levelFilter ? record.level === levelFilter : true;
//     return matchesSearch && matchesLevel;
//   });

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const tableData = filteredRecords.map((record) => [
//       record.name,
//       record.position,
//       record.level,
//       record.address,
//       record.email,
//       record.phone,
//       record.gender,
//     ]);

//     const headers = ["Name", "Position", "Level", "Address", "Email", "Phone", "Gender"];
    
//     // Add Velavan Textile title and address
//     doc.setFontSize(18);
//     doc.text("Velavan Textile", 105, 20, null, null, "center");
    
//     doc.setFontSize(12);
//     doc.text("Kumaran Nagar, Perundurai, Tirupur", 105, 30, null, null, "center");

//     // Add the current date
//     const currentDate = new Date().toLocaleDateString();
//     doc.text(`Employee Records - Downloaded on: ${currentDate}`, 105, 40, null, null, "center");

//     autoTable(doc, {
//       startY: 50,
//       head: [headers],
//       body: tableData,
//     });

//     doc.save(`employee_records_${levelFilter || 'all'}.pdf`);
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
        
//         {/* Add New Employee Button */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center">
//             <span className="font-bold">Employee Records</span>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
//               Add New Employee
//             </Link>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={generatePDF}
//             >
//               Download Records
//             </button>
//           </div>
//         </div>

//         {/* Search bar and level filter */}
//         <div className="p-4 flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded p-2"
//           />
//           <select
//             value={levelFilter}
//             onChange={(e) => setLevelFilter(e.target.value)}
//             className="border rounded p-2 max-w-200"
//           >
//             <option value="">All</option>
//             <option value="Junior">Junior</option>
//             <option value="Senior">Senior</option>
//             <option value="Intern">Intern</option>
//           </select>
//         </div>

//         {/* Records Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" style={{ width: '120px' }}>Level</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredRecords.length > 0 ? (
//                 filteredRecords.map((record) => (
//                   <Record
//                     record={record}
//                     onDelete={deleteRecord}
//                     key={record._id}
//                   />
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-center py-4 text-gray-500">
//                     No employees are available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Record = (props) => (
  <tr className="whitespace-nowrap px-4 py-2 text-gray-700">
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>{props.record.address}</td>
    <td>{props.record.email}</td>
    <td>{props.record.phone}</td>
    <td>{props.record.gender}</td>
    <td>
      <div className="flex gap-2">
        <button>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            to={`/edit/${props.record._id}`}
          >
            Edit
          </Link>
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
          type="button"
          onClick={() => props.onDelete(props.record._id)}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/records`);
        if (!response.ok) {
          throw new Error(`Error fetching records: ${response.statusText}`);
        }
        const recordsData = await response.json();
        setRecords(recordsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data.");
      }
    }

    fetchData();
  }, []);

  async function deleteRecord(id) {
    try {
      await fetch(`http://localhost:4000/records/${id}`, {
        method: "DELETE",
      });
      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  }

  const filteredRecords = records.filter((record) => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter ? record.level === levelFilter : true;
    return matchesSearch && matchesLevel;
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableData = filteredRecords.map((record) => [
      record.name,
      record.position,
      record.level,
      record.address,
      record.email,
      record.phone,
      record.gender,
    ]);

    const headers = ["Name", "Position", "Level", "Address", "Email", "Phone", "Gender"];
    
    // Add Velavan Textile title and address
    doc.setFontSize(18);
    doc.text("Velavan Textile", 105, 20, null, null, "center");
    
    doc.setFontSize(12);
    doc.text("3/109 S, Guruvayurappan Nagar, Kannakampalayam, Tirupur.Ph:9790391565", 105, 30, null, null, "center");

    // Add the current date
    const currentDate = new Date().toLocaleDateString();
    doc.text(`Employee Records - Downloaded on: ${currentDate}`, 105, 40, null, null, "center");

    autoTable(doc, {
      startY: 50,
      head: [headers],
      body: tableData,
    });

    doc.save(`employee_records_${levelFilter || 'all'}.pdf`);
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        
        {/* Employee Records Title and Search Bar */}
        <div className="flex justify-between items-center pt-5 pb-3 px-3">
          <div className="flex items-center gap-4">
            <span className="font-bold text-xl">Employee Records</span>
            
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2"
            />
            
            {/* Level filter */}
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">All</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          <div className="flex gap-4">
            <Link to="/record" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded">
              Add New Employee
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
              onClick={generatePDF}
            >
              Download Records
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Position</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" style={{ width: '120px' }}>Level</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Address</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Phone</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Gender</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <Record
                    record={record}
                    onDelete={deleteRecord}
                    key={record._id}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No employees are available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
