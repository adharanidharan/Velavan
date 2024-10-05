
import React, { useState } from 'react';
import './EditUserLogin.css'; // Adjust the import path

const EditUserModal = ({ user, onUpdate, onClose }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, firstName, lastName, email, phoneNumber };
    await onUpdate(updatedUser);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUserModal;


// // import React, { useState } from 'react';
// // import './EditUserLogin.css'; // Adjust the import path

// // const EditUserModal = ({ user, onUpdate, onClose }) => {
// //   const [firstName, setFirstName] = useState(user.firstName);
// //   const [lastName, setLastName] = useState(user.lastName);
// //   const [email, setEmail] = useState(user.email);
// //   const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
// //   const [password, setPassword] = useState(''); // New state for password

// //   // New state variables for additional fields
// //   const [position, setPosition] = useState(user.position || ''); 
// //   const [gender, setGender] = useState(user.gender || '');
// //   const [salary, setSalary] = useState(user.salary || '');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const updatedUser = { 
// //       ...user, 
// //       firstName, 
// //       lastName, 
// //       email, 
// //       phoneNumber,
// //       position,
// //       gender,
// //       salary,
// //       password: password || user.password // Only update password if it's provided
// //     };
// //     await onUpdate(updatedUser);
// //     onClose();
// //   };

// //   return (
// //     <div className="modal">
// //       <form onSubmit={handleSubmit}>
// //         <h2>Edit User</h2>
// //         <input
// //           type="text"
// //           value={firstName}
// //           onChange={(e) => setFirstName(e.target.value)}
// //           placeholder="First Name"
// //           required
// //         />
// //         <input
// //           type="text"
// //           value={lastName}
// //           onChange={(e) => setLastName(e.target.value)}
// //           placeholder="Last Name"
// //           required
// //         />
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //           required
// //         />
// //         <input
// //           type="text"
// //           value={phoneNumber}
// //           onChange={(e) => setPhoneNumber(e.target.value)}
// //           placeholder="Phone Number"
// //           required
// //         />
        
// //         {/* New input fields for position, gender, and salary */}
// //         <input
// //           type="text"
// //           value={position}
// //           onChange={(e) => setPosition(e.target.value)}
// //           placeholder="Position"
// //           required
// //         />
// //         <input
// //           type="text"
// //           value={gender}
// //           onChange={(e) => setGender(e.target.value)}
// //           placeholder="Gender"
// //           required
// //         />
// //         <input
// //           type="number"
// //           value={salary}
// //           onChange={(e) => setSalary(e.target.value)}
// //           placeholder="Salary"
// //           required
// //         />
        
// //         <input
// //           type="password" // Password field
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="New Password (leave blank to keep current)"
// //         />
// //         <button type="submit">Update</button>
// //         <button type="button" onClick={onClose}>Cancel</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditUserModal;







































// import React, { useState } from 'react';
// import './EditUserLogin.css'; // Adjust the import path

// const EditUserModal = ({ user, onUpdate, onClose }) => {
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [email, setEmail] = useState(user.email);
//   const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
//   const [password, setPassword] = useState(''); // New state for password

//   const [position, setPosition] = useState(user.position || ''); 
//   const [gender, setGender] = useState(user.gender || '');
//   const [salary, setSalary] = useState(user.salary || '');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedUser = { 
//       ...user, 
//       firstName, 
//       lastName, 
//       email, 
//       phoneNumber,
//       position,
//       gender,
//       salary,
//       password: password || user.password // Only update password if it's provided
//     };
//     await onUpdate(updatedUser);
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <form onSubmit={handleSubmit}>
//         <h2>Edit User</h2>
//         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
//         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
//         <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
//         <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" required />
//         <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password (leave blank to keep current)" />
//         <button type="submit">Update</button>
//         <button type="button" onClick={onClose}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default EditUserModal;
