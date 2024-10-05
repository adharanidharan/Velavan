// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const RecordDetails = () => {
// //   const localStorageData = JSON.parse(localStorage.getItem("user"));
// //   const email = localStorageData?.email;
// //   const [record, setRecord] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchRecordDetails = async () => {
// //       if (!email) {
// //         setError("No email provided");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await axios.get(`http://localhost:4000/api/login`);
// //         if (response.data) {
// //           setRecord(response.data);
// //         } else {
// //           setError("No records found");
// //         }
// //       } catch (err) {
// //         setError(err.response ? err.response.data : "Error fetching record");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRecordDetails();
// //   }, [email]);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>{error}</div>;

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         padding: "20px",
// //         fontFamily: "Arial, sans-serif",
// //         width:"1000px",
// //       }}
// //     >
// //       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Record Details</h1>
// //       {record ? (
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             marginTop: "20px",
// //             width: "100%",
// //             overflowX: "auto",
// //           }}
// //         >
// //           <table
// //             style={{
// //               width: "100%",
// //               borderCollapse: "collapse",
// //               border: "1px solid #ddd",
// //             }}
// //           >
// //             <thead>
// //               <tr>
// //                 <th
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                     textAlign: "left",
// //                     backgroundColor: "#f4f4f5",
// //                   }}
// //                 >
// //                   Name
// //                 </th>
// //                 <th
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                     textAlign: "left",
// //                     backgroundColor: "#f4f4f4",
// //                   }}
// //                 >
// //                   Email
// //                 </th>
// //                 <th
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                     textAlign: "left",
// //                     backgroundColor: "#f4f4f4",
// //                   }}
// //                 >
// //                   Phone
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                   }}
// //                 >
// //                   {record.firstName}
// //                 </td>
// //                 <td
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                   }}
// //                 >
// //                   {record.email}
// //                 </td>
// //                 <td
// //                   style={{
// //                     border: "1px solid #ddd",
// //                     padding: "12px",
// //                   }}
// //                 >
// //                   {record.phoneNumber}
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       ) : (
// //         <div style={{ marginTop: "20px" }}>No record found.</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RecordDetails;



// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import EditUserModal from "./EditUserLogin"; // Import the modal component

// // const RecordDetails = () => {
// //   const localStorageData = JSON.parse(localStorage.getItem("user"));
// //   const email = localStorageData?.email;
// //   const [record, setRecord] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isEditing, setIsEditing] = useState(false); // State to track if we are editing

// //   useEffect(() => {
// //     const fetchRecordDetails = async () => {
// //       if (!email) {
// //         setError("No email provided");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await axios.get(`http://localhost:4000/api/login`);
// //         if (response.data) {
// //           setRecord(response.data);
// //         } else {
// //           setError("No records found");
// //         }
// //       } catch (err) {
// //         setError(err.response ? err.response.data : "Error fetching record");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRecordDetails();
// //   }, [email]);

// //   const handleUpdate = async (updatedRecord) => {
// //     try {
// //       // Update the record in your backend
// //       await axios.put(`http://localhost:4000/api/users/${updatedRecord.email}`, updatedRecord);
// //       setRecord(updatedRecord); // Update the record in the frontend state
// //       setIsEditing(false); // Close the modal after the update
// //     } catch (error) {
// //       console.error("Failed to update the user:", error);
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>{error}</div>;

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         padding: "20px",
// //         fontFamily: "Arial, sans-serif",
// //         width: "1000px",
// //       }}
// //     >
// //       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Record Details</h1>
// //       {record ? (
// //         <>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "center",
// //               marginTop: "20px",
// //               width: "100%",
// //               overflowX: "auto",
// //             }}
// //           >
// //             <table
// //               style={{
// //                 width: "100%",
// //                 borderCollapse: "collapse",
// //                 border: "1px solid #ddd",
// //               }}
// //             >
// //               <thead>
// //                 <tr>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f5",
// //                     }}
// //                   >
// //                     Name
// //                   </th>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f4",
// //                     }}
// //                   >
// //                     Email
// //                   </th>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f4",
// //                     }}
// //                   >
// //                     Phone
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.firstName}
// //                   </td>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.email}
// //                   </td>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.phoneNumber}
// //                   </td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //           <button
// //             onClick={() => setIsEditing(true)}
// //             style={{
// //               marginTop: "20px",
// //               padding: "10px 20px",
// //               backgroundColor: "#4CAF50",
// //               color: "white",
// //               border: "none",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Edit
// //           </button>
// //         </>
// //       ) : (
// //         <div style={{ marginTop: "20px" }}>No record found.</div>
// //       )}

// //       {/* Modal to edit user details */}
// //       {isEditing && (
// //         <EditUserModal
// //           user={record}
// //           onUpdate={handleUpdate}
// //           onClose={() => setIsEditing(false)}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default RecordDetails;




// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import EditUserModal from "./EditUserLogin"; // Import the modal component

// // const RecordDetails = () => {
// //   const localStorageData = JSON.parse(localStorage.getItem("user"));
// //   const email = localStorageData?.email;
// //   const [record, setRecord] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isEditing, setIsEditing] = useState(false); // State to track if we are editing

// //   useEffect(() => {
// //     const fetchRecordDetails = async () => {
// //       if (!email) {
// //         setError("No email provided");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await axios.get(`http://localhost:4000/api/login?email=${email}`);
// //         if (response.data) {
// //           setRecord(response.data);
// //         } else {
// //           setError("No records found");
// //         }
// //       } catch (err) {
// //         setError(err.response ? err.response.data : "Error fetching record");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchRecordDetails();
// //   }, [email]);

// //   const handleUpdate = async (updatedRecord) => {
// //     try {
// //       // Update the record in your backend
// //       await axios.put(`http://localhost:4000/api/users/${updatedRecord.email}`, updatedRecord);
// //       setRecord(updatedRecord); // Update the record in the frontend state
// //       setIsEditing(false); // Close the modal after the update
// //     } catch (error) {
// //       console.error("Failed to update the user:", error);
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>{error}</div>;

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         padding: "20px",
// //         fontFamily: "Arial, sans-serif",
// //         width: "1000px",
// //       }}
// //     >
// //       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Record Details</h1>
// //       {record ? (
// //         <>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "center",
// //               marginTop: "20px",
// //               width: "100%",
// //               overflowX: "auto",
// //             }}
// //           >
// //             <table
// //               style={{
// //                 width: "100%",
// //                 borderCollapse: "collapse",
// //                 border: "1px solid #ddd",
// //               }}
// //             >
// //               <thead>
// //                 <tr>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f5",
// //                     }}
// //                   >
// //                     Name
// //                   </th>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f4",
// //                     }}
// //                   >
// //                     Email
// //                   </th>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f4",
// //                     }}
// //                   >
// //                     Password
// //                   </th>
// //                   <th
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                       textAlign: "left",
// //                       backgroundColor: "#f4f4f4",
// //                     }}
// //                   >
// //                     Phone
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.firstName} {record.lastName}
// //                   </td>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.email}
// //                   </td>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.password} {/* Displaying the password directly */}
// //                   </td>
// //                   <td
// //                     style={{
// //                       border: "1px solid #ddd",
// //                       padding: "12px",
// //                     }}
// //                   >
// //                     {record.phoneNumber}
// //                   </td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //           <button
// //             onClick={() => setIsEditing(true)}
// //             style={{
// //               marginTop: "20px",
// //               padding: "10px 20px",
// //               backgroundColor: "#4CAF50",
// //               color: "white",
// //               border: "none",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Edit
// //           </button>
// //         </>
// //       ) : (
// //         <div style={{ marginTop: "20px" }}>No record found.</div>
// //       )}

// //       {/* Modal to edit user details */}
// //       {isEditing && (
// //         <EditUserModal
// //           user={record}
// //           onUpdate={handleUpdate}
// //           onClose={() => setIsEditing(false)}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default RecordDetails;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import EditUserModal from "./EditUserLogin"; // Import the modal component

// const RecordDetails = () => {
//   const localStorageData = JSON.parse(localStorage.getItem("user"));
//   const email = localStorageData?.email;
//   const [record, setRecord] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false); // State to track if we are editing

//   useEffect(() => {
//     const fetchRecordDetails = async () => {
//       if (!email) {
//         setError("No email provided");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:4000/api/login?email=${email}`);
//         if (response.data) {
//           setRecord(response.data);
//         } else {
//           setError("No records found");
//         }
//       } catch (err) {
//         setError(err.response ? err.response.data : "Error fetching record");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecordDetails();
//   }, [email]);

//   const handleUpdate = async (updatedRecord) => {
//     try {
//       // Update the record in your backend
//       await axios.put(`http://localhost:4000/api/users/${updatedRecord.email}`, updatedRecord);
//       setRecord(updatedRecord); // Update the record in the frontend state
//       setIsEditing(false); // Close the modal after the update
//     } catch (error) {
//       console.error("Failed to update the user:", error);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         width: "1000px",
//       }}
//     >
//       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Record Details</h1>
//       {record ? (
//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "20px",
//               width: "100%",
//               overflowX: "auto",
//             }}
//           >
//             <table
//               style={{
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 border: "1px solid #ddd",
//               }}
//             >
//               <thead>
//                 <tr>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f5",
//                     }}
//                   >
//                     Name
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Email
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Password
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Phone
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Position
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Gender
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                       textAlign: "left",
//                       backgroundColor: "#f4f4f4",
//                     }}
//                   >
//                     Salary
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.firstName} {record.lastName}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.email}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.password} {/* Displaying the password directly */}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.phoneNumber}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.position}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     {record.gender}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid #ddd",
//                       padding: "12px",
//                     }}
//                   >
//                     ${record.salary}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <button
//             onClick={() => setIsEditing(true)}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Edit
//           </button>
//         </>
//       ) : (
//         <div style={{ marginTop: "20px" }}>No record found.</div>
//       )}

//       {/* Modal to edit user details */}
//       {isEditing && (
//         <EditUserModal
//           user={record}
//           onUpdate={handleUpdate}
//           onClose={() => setIsEditing(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default RecordDetails;



import React, { useEffect, useState } from "react";
import axios from "axios";
import EditUserModal from "./EditUserLogin"; // Import the modal component

const RecordDetails = () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const email = localStorageData?.email;
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to track if we are editing

  useEffect(() => {
    const fetchRecordDetails = async () => {
      if (!email) {
        setError("No email provided");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:4000/api/login?email=${email}`);
        if (response.data) {
          setRecord(response.data);
        } else {
          setError("No records found");
        }
      } catch (err) {
        setError(err.response ? err.response.data : "Error fetching record");
      } finally {
        setLoading(false);
      }
    };

    fetchRecordDetails();
  }, [email]);

  const handleUpdate = async (updatedRecord) => {
  try {
    // Update the record in your backend
    const response = await axios.put(`http://localhost:4000/api/users/${updatedRecord.email}`, updatedRecord);
    setRecord(response.data); // Update the record in the frontend state
    // Update local storage with new user data
    localStorage.setItem("user", JSON.stringify(response.data));
    setIsEditing(false); // Close the modal after the update
  } catch (error) {
    console.error("Failed to update the user:", error);
  }
};


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", fontFamily: "Arial, sans-serif", width: "1000px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Record Details</h1>
      {record ? (
        <>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
              <thead>
                <tr>
                  {/* Table headers */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th>Gender</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{record.firstName} {record.lastName}</td>
                  <td>{record.email}</td>
                  <td>{record.password}</td>
                  <td>{record.phoneNumber}</td>
                  <td>{record.position}</td>
                  <td>{record.gender}</td>
                  <td>${record.salary}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => setIsEditing(true)} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
            Edit
          </button>
        </>
      ) : (
        <div style={{ marginTop: "20px" }}>No record found.</div>
      )}

      {/* Modal to edit user details */}
      {isEditing && (
        <EditUserModal
          user={record}
          onUpdate={handleUpdate}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default RecordDetails;
