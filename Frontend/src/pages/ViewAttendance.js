// // export default ViewAttendance;
// import React, { useState } from 'react';
// import './ViewAttendance.css'; // Import the CSS file

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:5050/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit" className='btn'>View Attendance</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.employeeName}</td>
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No attendance records available for the selected date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;





// import React, { useState } from 'react';
// import './ViewAttendance.css'; // Include your CSS file

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:5050/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="btn">View Attendance</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.employeeName}</td>
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No attendance records available for the selected date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;






// import React, { useState } from 'react';
// import './ViewAttendance.css'; // Include your CSS file

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit" className="btn">View Attendance</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.employeeId.name}</td> {/* Access the employee's name */}
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No records found for this date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;








// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Import the autoTable plugin for jsPDF
// import './ViewAttendance.css'; // Include your CSS file

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     // Add company header
//     doc.setFontSize(16);
//     doc.text('Velavan Textile', 105, 10, { align: 'center' });
//     doc.setFontSize(12);
//     doc.text('Kumaran Nagar, Perundurai, Tirupur', 105, 15, { align: 'center' });
//     doc.text('Employee Attendance Details', 105, 20, { align: 'center' });
//     doc.text(`Date: ${date}`, 105, 25, { align: 'center' });

//     // Set table column headers
//     const tableColumn = ['Employee Name', 'Status'];
//     const tableRows = [];

//     let totalPresent = 0;
//     let totalAbsent = 0;

//     // Add attendance data to rows
//     attendanceRecords.forEach(record => {
//       const attendanceData = [
//         record.employeeId.name, // Access the employee's name
//         record.status
//       ];
//       tableRows.push(attendanceData);

//       // Count totals
//       if (record.status === 'Present') {
//         totalPresent++;
//       } else if (record.status === 'Absent') {
//         totalAbsent++;
//       }
//     });

//     // Add the totals row
//     tableRows.push(['Total Present:', totalPresent]);
//     tableRows.push(['Total Absent:', totalAbsent]);

//     // Generate table
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 30,
//     });

//     // Save the PDF
//     doc.save('attendance_report.pdf');
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         {/* <button type="submit" className="btn">View Attendance</button>
//         <button onClick={downloadPDF} className="btn">Download PDF</button> */}
//         <button type="submit" className="btn">View Attendance</button>
// <button 
//   onClick={downloadPDF} 
//   className="btn" 
//   style={{ marginLeft: '25px' }} // Adjust the value for more or less space
// >
//   Download PDF
// </button>

//       </form>

      
//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.employeeId.name}</td> {/* Access the employee's name */}
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No records found for this date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;





// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Import the autoTable plugin for jsPDF
// import './ViewAttendance.css'; // Include your CSS file

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     // Add company header
//     doc.setFontSize(16);
//     doc.text('Velavan Textile', 105, 10, { align: 'center' });
//     doc.setFontSize(12);
//     doc.text('Kumaran Nagar, Perundurai, Tirupur', 105, 15, { align: 'center' });
//     doc.text('Employee Attendance Details', 105, 20, { align: 'center' });
//     doc.text(`Date: ${date}`, 105, 25, { align: 'center' });

//     // Set table column headers
//     const tableColumn = ['Employee Name', 'Status'];
//     const tableRows = [];

//     let totalPresent = 0;
//     let totalAbsent = 0;

//     // Add attendance data to rows
//     attendanceRecords.forEach(record => {
//       const attendanceData = [
//         record.employeeId.name, // Access the employee's name
//         record.status
//       ];
//       tableRows.push(attendanceData);

//       // Count totals
//       if (record.status === 'Present') {
//         totalPresent++;
//       } else if (record.status === 'Absent') {
//         totalAbsent++;
//       }
//     });

//     // Add the totals row
//     tableRows.push(['Total Present:', totalPresent]);
//     tableRows.push(['Total Absent:', totalAbsent]);

//     // Generate table
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 30,
//     });

//     // Save the PDF
//     doc.save('attendance_report.pdf');
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit} className="flex justify-between items-center">
//         <div className="flex items-center">
//           <label>
//             Date:
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="ml-2" // Add margin for spacing
//             />
//           </label>
//           <button type="submit" className="btn ml-4">View Attendance</button>
//           <button 
//             onClick={downloadPDF} 
//             className="btn ml-4" // Add margin for spacing
//           >
//             Download PDF
//           </button>
//         </div>
//       </form>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.employeeId.name}</td> {/* Access the employee's name */}
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No records found for this date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;






import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin for jsPDF
import './ViewAttendance.css'; // Include your CSS file

const ViewAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  const fetchAttendanceRecords = async () => {
    try {
      const response = await fetch(`http://localhost:4000/attendance?date=${date}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
      }
      const data = await response.json();
      setAttendanceRecords(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAttendanceRecords();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add company header
    doc.setFontSize(16);
    doc.text('Velavan Textile', 105, 10, { align: 'center' });
    doc.setFontSize(12);
    doc.text('3/109 S, Guruvayurappan Nagar, Kannakampalayam, Tirupur.Ph:9790391565', 105, 15, { align: 'center' });
    doc.text('Employee Attendance Details', 105, 20, { align: 'center' });
    doc.text(`Date: ${date}`, 105, 25, { align: 'center' });

    // Set table column headers
    const tableColumn = ['Employee Name', 'Status'];
    const tableRows = [];

    let totalPresent = 0;
    let totalAbsent = 0;

    // Add attendance data to rows
    attendanceRecords.forEach(record => {
      const attendanceData = [
        record.employeeId.name, // Access the employee's name
        record.status
      ];
      tableRows.push(attendanceData);

      // Count totals
      if (record.status === 'Present') {
        totalPresent++;
      } else if (record.status === 'Absent') {
        totalAbsent++;
      }
    });

    // Add the totals row
    tableRows.push(['Total Present:', totalPresent]);
    tableRows.push(['Total Absent:', totalAbsent]);

    // Generate table
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    // Save the PDF
    doc.save('attendance_report.pdf');
  };

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      <div className='fl'>
      <h1><b>View Attendance</b></h1>
      <form onSubmit={handleSubmit}>
      {/* <h1><b>View Attendance</b></h1> */}
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="date-input" // Add margin for spacing
          />
        </label>
        <button type="submit" className="btn">View Attendance</button>
        <button 
          onClick={downloadPDF} 
          className="btn"
        >
          Download PDF
        </button>
      </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.length > 0 ? (
            attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.employeeId.name}</td> {/* Access the employee's name */}
                <td>{record.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No records found for this date.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
