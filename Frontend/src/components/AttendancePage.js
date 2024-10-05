// // import React, { useState, useEffect } from 'react';

// // const AttendancePage = () => {
// //   const [employees, setEmployees] = useState([]);
// //   const [attendance, setAttendance] = useState({});
// //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// //   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5050/records');
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setEmployees(data);
// //       } catch (error) {
// //         console.error('Error fetching employees:', error);
// //         setError('Error fetching employees.');
// //       }
// //     };

// //     const fetchAttendanceRecords = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:5050/attendance?date=${date}`);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setAttendanceRecords(data);
// //         const attendanceMap = data.reduce((map, record) => {
// //           map[record.employeeId] = record.status;
// //           return map;
// //         }, {});
// //         setAttendance(attendanceMap);
// //       } catch (error) {
// //         console.error('Error fetching attendance records:', error);
// //         setError('Error fetching attendance records.');
// //       }
// //     };

// //     fetchEmployees();
// //     fetchAttendanceRecords();
// //   }, [date]);

// //   const handleAttendanceChange = (employeeId, status) => {
// //     setAttendance((prev) => ({ ...prev, [employeeId]: status }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const attendanceData = Object.keys(attendance).map((employeeId) => ({
// //       employeeId,
// //       date,
// //       status: attendance[employeeId],
// //     }));

// //     try {
// //       const response = await fetch('http://localhost:5050/attendance', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(attendanceData),
// //       });
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       console.log('Attendance saved:', data);
// //       alert('Attendance saved successfully!');
// //     } catch (error) {
// //       console.error('Error saving attendance:', error);
// //       setError('Error saving attendance data.');
// //       alert('Failed to save attendance. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       {error && <p className="error">{error}</p>}
// //       <h1>Daily Attendance</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Date:
// //           <input
// //             type="date"
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //           />
// //         </label>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Employee Name</th>
// //               <th>Present</th>
// //               <th>Absent</th>
// //               <th>On Duty</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {employees.length > 0 ? (
// //               employees.map((employee) => (
// //                 <tr key={employee._id}>
// //                   <td>{employee.name}</td>
// //                   <td>
// //                     <input
// //                       type="radio"
// //                       name={`attendance-${employee._id}`}
// //                       value="Present"
// //                       checked={attendance[employee._id] === 'Present'}
// //                       onChange={() =>
// //                         handleAttendanceChange(employee._id, 'Present')
// //                       }
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="radio"
// //                       name={`attendance-${employee._id}`}
// //                       value="Absent"
// //                       checked={attendance[employee._id] === 'Absent'}
// //                       onChange={() =>
// //                         handleAttendanceChange(employee._id, 'Absent')
// //                       }
// //                     />
// //                   </td>
// //                   <td>
// //                     <input
// //                       type="radio"
// //                       name={`attendance-${employee._id}`}
// //                       value="On Duty"
// //                       checked={attendance[employee._id] === 'On Duty'}
// //                       onChange={() =>
// //                         handleAttendanceChange(employee._id, 'On Duty')
// //                       }
// //                     />
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="4">No employees found.</td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //         <button type="submit">Save Attendance</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default AttendancePage;




// import React, { useState, useEffect } from 'react';

// const AttendancePage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:5050/records');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//         setError('Error fetching employees.');
//       }
//     };

//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await fetch(`http://localhost:5050/attendance?date=${date}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setAttendanceRecords(data);
//         const attendanceMap = data.reduce((map, record) => {
//           map[record.employeeId] = record.status;
//           return map;
//         }, {});
//         setAttendance(attendanceMap);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//         setError('Error fetching attendance records.');
//       }
//     };

//     fetchEmployees();
//     fetchAttendanceRecords();
//   }, [date]);

//   const handleAttendanceChange = (employeeId, status) => {
//     setAttendance((prev) => ({ ...prev, [employeeId]: status }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const attendanceData = Object.keys(attendance).map((employeeId) => ({
//       employeeId,
//       date,
//       status: attendance[employeeId],
//     }));

//     try {
//       const response = await fetch('http://localhost:5050/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('Attendance saved:', data);
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <h1 className="text-2xl font-bold mb-4">Daily Attendance</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex items-center mb-4">
//           <label htmlFor="date" className="block text-sm font-medium text-gray-700 mr-4">
//             Date:
//           </label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="bg-white border border-gray-300 rounded-lg p-2 w-48"
//           />
//         </div>
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left text-gray-700">Employee Name</th>
//               <th className="py-2 px-4 border-b text-left text-gray-700">Present</th>
//               <th className="py-2 px-4 border-b text-left text-gray-700">Absent</th>
//               <th className="py-2 px-4 border-b text-left text-gray-700">On Duty</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.length > 0 ? (
//               employees.map((employee) => (
//                 <tr key={employee._id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b text-gray-900">{employee.name}</td>
//                   <td className="py-2 px-4 border-b">
//                     <input
//                       type="radio"
//                       name={`attendance-${employee._id}`}
//                       value="Present"
//                       checked={attendance[employee._id] === 'Present'}
//                       onChange={() => handleAttendanceChange(employee._id, 'Present')}
//                       className="mr-2"
//                     />
//                   </td>
//                   <td className="py-2 px-4 border-b">
//                     <input
//                       type="radio"
//                       name={`attendance-${employee._id}`}
//                       value="Absent"
//                       checked={attendance[employee._id] === 'Absent'}
//                       onChange={() => handleAttendanceChange(employee._id, 'Absent')}
//                       className="mr-2"
//                     />
//                   </td>
//                   <td className="py-2 px-4 border-b">
//                     <input
//                       type="radio"
//                       name={`attendance-${employee._id}`}
//                       value="On Duty"
//                       checked={attendance[employee._id] === 'On Duty'}
//                       onChange={() => handleAttendanceChange(employee._id, 'On Duty')}
//                       className="mr-2"
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="py-2 px-4 text-center">No employees found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//           >
//             Save Attendance
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// // export default AttendancePage;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // import useNavigate for navigation

// const AttendancePage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // for navigation

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:5050/records');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//         setError('Error fetching employees.');
//       }
//     };

//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await fetch(`http://localhost:5050/attendance?date=${date}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setAttendanceRecords(data);
//         const attendanceMap = data.reduce((map, record) => {
//           map[record.employeeId] = record.status;
//           return map;
//         }, {});
//         setAttendance(attendanceMap);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//         setError('Error fetching attendance records.');
//       }
//     };

//     fetchEmployees();
//     fetchAttendanceRecords();
//   }, [date]);

//   const handleAttendanceChange = (employeeId, status) => {
//     setAttendance((prev) => ({ ...prev, [employeeId]: status }));
//   };

//   const handleViewAttendance = () => {
//     navigate(`/viewattendance?date=${date}`); // navigate to attendance page with the selected date
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const attendanceData = Object.keys(attendance).map((employeeId) => ({
//       employeeId,
//       date,
//       status: attendance[employeeId],
//     }));

//     try {
//       const response = await fetch('http://localhost:5050/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('Attendance saved:', data);
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Daily Attendance</span>
//             </div>
//             <div className="flex gap-4">
//               <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                 Date:
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="bg-white border border-gray-300 rounded-lg p-2"
//               />
//             </div>
//           </div>

//           {/* View Attendance Button at the Top Right Corner */}
//           <div className="flex justify-end px-3 mb-3">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleViewAttendance}
//             >
//               View Attendance
//             </button>
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Employee Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Present
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Absent
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   On Duty
//                 </th>
//                 {/* <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Actions
//                 </th> */}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {employees.length > 0 ? (
//                 employees.map((employee) => (
//                   <tr key={employee._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {employee.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Present"
//                         checked={attendance[employee._id] === 'Present'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Present')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Absent"
//                         checked={attendance[employee._id] === 'Absent'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Absent')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="On Duty"
//                         checked={attendance[employee._id] === 'On Duty'}
//                         onChange={() => handleAttendanceChange(employee._id, 'On Duty')}
//                         className="mr-2"
//                       />
//                     </td>
//                     {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <button
//                         className="text-blue-600 hover:underline"
//                         onClick={() => handleViewAttendance(employee._id)}
//                       >
//                         View Attendance
//                       </button>
//                     </td> */}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-2 px-4">No employees found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <div className="flex justify-end p-3">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleSubmit}
//             >
//               Save Attendance
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AttendancePage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/records');
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//         setError('Error fetching employees.');
//       }
//     };

//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         setAttendanceRecords(data);
//         const attendanceMap = data.reduce((map, record) => {
//           map[record.employeeId] = record.status;
//           return map;
//         }, {});
//         setAttendance(attendanceMap);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//         setError('Error fetching attendance records.');
//       }
//     };

//     fetchEmployees();
//     fetchAttendanceRecords();
//   }, [date]);

//   const handleAttendanceChange = (employeeId, status) => {
//     setAttendance((prev) => ({ ...prev, [employeeId]: status }));
//   };

//   const handleViewAttendance = () => {
//     navigate(`/viewattendance?date=${date}`);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Ensure all employees have a status selected
//     if (Object.values(attendance).some(status => !status)) {
//       alert('Please select attendance status for all employees.');
//       return;
//     }

//     const attendanceData = Object.keys(attendance).map((employeeId) => ({
//       employeeId,
//       date,
//       status: attendance[employeeId],
//     }));

//     try {
//       const response = await fetch('http://localhost:4000/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData),
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       const data = await response.json();
//       console.log('Attendance saved:', data);
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Daily Attendance</span>
//             </div>
//             <div className="flex gap-4">
//               <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                 Date:
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="bg-white border border-gray-300 rounded-lg p-2"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end px-3 mb-3">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleViewAttendance}
//             >
//               View Attendance
//             </button>
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Employee Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Present
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Absent
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   On Duty
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {employees.length > 0 ? (
//                 employees.map((employee) => (
//                   <tr key={employee._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {employee.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Present"
//                         checked={attendance[employee._id] === 'Present'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Present')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Absent"
//                         checked={attendance[employee._id] === 'Absent'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Absent')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="On Duty"
//                         checked={attendance[employee._id] === 'On Duty'}
//                         onChange={() => handleAttendanceChange(employee._id, 'On Duty')}
//                         className="mr-2"
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="text-center py-2 px-4">No employees found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <div className="flex justify-end p-3">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleSubmit}
//             >
//               Save Attendance
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AttendancePage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/records');
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//         setError('Error fetching employees.');
//       }
//     };

//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         setAttendanceRecords(data);
//         const attendanceMap = data.reduce((map, record) => {
//           map[record.employeeId] = record.status;
//           return map;
//         }, {});
//         setAttendance(attendanceMap);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//         setError('Error fetching attendance records.');
//       }
//     };

//     fetchEmployees();
//     fetchAttendanceRecords();
//   }, [date]);

//   const handleAttendanceChange = (employeeId, status) => {
//     setAttendance((prev) => ({ ...prev, [employeeId]: status }));
//   };

//   const handleViewAttendance = () => {
//     navigate(`/viewattendance?date=${date}`);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Ensure all employees have a status selected
//     if (Object.values(attendance).some(status => !status)) {
//       alert('Please select attendance status for all employees.');
//       return;
//     }

//     const attendanceData = Object.keys(attendance).map((employeeId) => ({
//       employeeId,
//       date,
//       status: attendance[employeeId],
//     }));

//     try {
//       const response = await fetch('http://localhost:4000/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData),
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       const data = await response.json();
//       console.log('Attendance saved:', data);
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   // Filter employees by search term
//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Daily Attendance</span>
//             </div>
//             <div className="flex gap-4">
//               <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                 Date:
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="bg-white border border-gray-300 rounded-lg p-2"
//               />
//             </div>
//           </div>

//           <div className="flex justify-between px-3 mb-3">
//             <input
//               type="text"
//               placeholder="Search employee"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="bg-white border border-gray-300 rounded-lg p-2"
//             />
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleViewAttendance}
//             >
//               View Attendance
//             </button>
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Employee Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Present
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Absent
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   On Duty
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredEmployees.length > 0 ? (
//                 filteredEmployees.map((employee) => (
//                   <tr key={employee._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {employee.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Present"
//                         checked={attendance[employee._id] === 'Present'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Present')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="Absent"
//                         checked={attendance[employee._id] === 'Absent'}
//                         onChange={() => handleAttendanceChange(employee._id, 'Absent')}
//                         className="mr-2"
//                       />
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       <input
//                         type="radio"
//                         name={`attendance-${employee._id}`}
//                         value="On Duty"
//                         checked={attendance[employee._id] === 'On Duty'}
//                         onChange={() => handleAttendanceChange(employee._id, 'On Duty')}
//                         className="mr-2"
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="text-center py-2 px-4">No employees found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <div className="flex justify-end p-3">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
//               onClick={handleSubmit}
//             >
//               Save Attendance
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AttendancePage = () => {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:4000/records');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError('Error fetching employees.');
      }
    };

    const fetchAttendanceRecords = async () => {
      try {
        const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setAttendanceRecords(data);
        const attendanceMap = data.reduce((map, record) => {
          map[record.employeeId] = record.status;
          return map;
        }, {});
        setAttendance(attendanceMap);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
        setError('Error fetching attendance records.');
      }
    };

    fetchEmployees();
    fetchAttendanceRecords();
  }, [date]);

  const handleAttendanceChange = (employeeId, status) => {
    setAttendance((prev) => ({ ...prev, [employeeId]: status }));
  };

  const handleViewAttendance = () => {
    navigate(`/viewattendance?date=${date}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure all employees have a status selected
    if (Object.values(attendance).some(status => !status)) {
      alert('Please select attendance status for all employees.');
      return;
    }

    const attendanceData = Object.keys(attendance).map((employeeId) => ({
      employeeId,
      date,
      status: attendance[employeeId],
    }));

    try {
      const response = await fetch('http://localhost:4000/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log('Attendance saved:', data);
      alert('Attendance saved successfully!');
    } catch (error) {
      console.error('Error saving attendance:', error);
      setError('Error saving attendance data.');
      alert('Failed to save attendance. Please try again.');
    }
  };

  // Filter employees by search term
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 items-center">
              <span className="font-bold">Daily Attendance</span>
              <input
                type="text"
                placeholder="Search employee"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg p-2"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
                onClick={handleViewAttendance}
              >
                View Attendance
              </button>
            </div>
          </div>

          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Employee Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Present
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Absent
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  On Duty
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <tr key={employee._id}>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                      {employee.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="radio"
                        name={`attendance-${employee._id}`}
                        value="Present"
                        checked={attendance[employee._id] === 'Present'}
                        onChange={() => handleAttendanceChange(employee._id, 'Present')}
                        className="mr-2"
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="radio"
                        name={`attendance-${employee._id}`}
                        value="Absent"
                        checked={attendance[employee._id] === 'Absent'}
                        onChange={() => handleAttendanceChange(employee._id, 'Absent')}
                        className="mr-2"
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="radio"
                        name={`attendance-${employee._id}`}
                        value="On Duty"
                        checked={attendance[employee._id] === 'On Duty'}
                        onChange={() => handleAttendanceChange(employee._id, 'On Duty')}
                        className="mr-2"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-2 px-4">No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-end p-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
              onClick={handleSubmit}
            >
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
