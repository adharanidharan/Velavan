// import { useEffect, useState } from "react";
// import axios from "axios";

// const ViewLogins = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch all users when the component mounts
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">All Logins</h1>
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Name</th>
//             <th className="border border-gray-300 px-4 py-2">Email</th>
//             <th className="border border-gray-300 px-4 py-2">Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td className="border border-gray-300 px-4 py-2">{user.firstName} {user.lastName}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.email}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewLogins;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import EditUserModal from "./EditUserLogin"; // Adjust the import path

// const ViewLogins = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleUpdate = async (updatedUser) => {
//     try {
//       await axios.put(`http://localhost:4000/api/users/${updatedUser._id}`, updatedUser);
//       setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">All Logins</h1>
//       <table className="min-w-[1000px] border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">First Name</th>
//             <th className="border border-gray-300 px-4 py-2">Last Name</th>
//             <th className="border border-gray-300 px-4 py-2">Email</th>
//             <th className="border border-gray-300 px-4 py-2">Phone Number</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.email}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.phoneNumber}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <button 
//                   onClick={() => handleEdit(user)} 
//                   className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button 
//                   onClick={() => handleDelete(user._id)} 
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedUser && (
//         <EditUserModal 
//           user={selectedUser} 
//           onUpdate={handleUpdate} 
//           onClose={() => setIsModalOpen(false)} 
//         />
//       )}
//     </div>
//   );
// };

// export default ViewLogins;









import { useEffect, useState } from "react";
import axios from "axios";
import EditUserModal from "./EditUserLogin"; // Adjust the import path
import './c.css';

const ViewLogins = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedUser) => {
    try {
      await axios.put(`http://localhost:4000/api/users/${updatedUser._id}`, updatedUser);
      setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="p-4">
      {/* <h1 className="logtxt">All Logins</h1> */}
      <div className="logtxt">
        <h1>All login And Employee Details</h1>
      </div>
      <table className="min-w-[1000px] border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Password</th> {/* New column for Password */}
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.phoneNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{user.password}</td> {/* Display Password */}
              <td className="border border-gray-300 px-4 py-2">
                <button 
                  onClick={() => handleEdit(user)} 
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(user._id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedUser && (
        <EditUserModal 
          user={selectedUser} 
          onUpdate={handleUpdate} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default ViewLogins;
