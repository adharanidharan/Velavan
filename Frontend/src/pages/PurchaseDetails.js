// // import React, { useState, useEffect, useContext } from "react";
// // import AddPurchaseDetails from "../components/AddPurchaseDetails";
// // import AuthContext from "../AuthContext";

// // function PurchaseDetails() {
// //   const [showPurchaseModal, setPurchaseModal] = useState(false);
// //   const [purchase, setAllPurchaseData] = useState([]);
// //   const [products, setAllProducts] = useState([]);
// //   const [updatePage, setUpdatePage] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input

// //   const authContext = useContext(AuthContext);

// //   useEffect(() => {
// //     fetchPurchaseData();
// //     fetchProductsData();
// //   }, [updatePage]);

// //   // Fetching Data of All Purchase items
// //   const fetchPurchaseData = () => {
// //     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setAllPurchaseData(data);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   // Fetching Data of All Products
// //   const fetchProductsData = () => {
// //     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setAllProducts(data);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   // Modal for Sale Add
// //   const addSaleModalSetting = () => {
// //     setPurchaseModal(!showPurchaseModal);
// //   };

// //   // Handle Page Update
// //   const handlePageUpdate = () => {
// //     setUpdatePage(!updatePage);
// //   };

// //   // Filtered purchases based on the search term
// //   const filteredPurchases = purchase.filter((element) =>
// //     element.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="col-span-12 lg:col-span-10 flex justify-center">
// //       <div className="flex flex-col gap-5 w-11/12">
// //         {showPurchaseModal && (
// //           <AddPurchaseDetails
// //             addSaleModalSetting={addSaleModalSetting}
// //             products={products}
// //             handlePageUpdate={handlePageUpdate}
// //             authContext={authContext}
// //           />
// //         )}

// //         {/* Search Bar */}
// //         <div className="flex justify-between pt-5 pb-3 px-3">
// //           <div className="flex gap-4 justify-center items-center ">
// //             <span className="font-bold">Purchase Details</span>
// //           </div>
// //           <div className="flex gap-4">
// //             <input
// //               type="text"
// //               placeholder="Search product"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-[200px] p-2 border border-gray-300 rounded-lg" // Adjust width as needed
// //             />
// //             <button
// //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
// //               onClick={addSaleModalSetting}
// //             >
// //               Add Purchase
// //             </button>
// //           </div>
// //         </div>

// //         {/* Table */}
// //         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
// //           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
// //             <thead>
// //               <tr>
// //                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
// //                   Product Name
// //                 </th>
// //                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
// //                   Quantity Purchased
// //                 </th>
// //                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
// //                   Purchase Date
// //                 </th>
// //                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
// //                   Total Purchase Amount
// //                 </th>
// //               </tr>
// //             </thead>

// //             <tbody className="divide-y divide-gray-200">
// //               {filteredPurchases.map((element, index) => (
// //                 <tr key={element._id}>
// //                   <td className="whitespace-nowrap px-4 py-2 text-gray-900">
// //                     {element.ProductID?.name}
// //                   </td>
// //                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
// //                     {element.QuantityPurchased}
// //                   </td>
// //                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
// //                     {new Date(element.PurchaseDate).toLocaleDateString() ===
// //                     new Date().toLocaleDateString()
// //                       ? "Today"
// //                       : element.PurchaseDate}
// //                   </td>
// //                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
// //                   ₹{element.TotalPurchaseAmount}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PurchaseDetails;






// import React, { useState, useEffect, useContext } from "react";
// import AddPurchaseDetails from "../components/AddPurchaseDetails";
// import AuthContext from "../AuthContext";

// function PurchaseDetails() {
//   const [showPurchaseModal, setPurchaseModal] = useState(false);
//   const [purchase, setAllPurchaseData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchPurchaseData();
//     fetchProductsData();
//   }, [updatePage]);

//   // Fetching Data of All Purchase items
//   const fetchPurchaseData = () => {
//     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllPurchaseData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Fetching Data of All Products
//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setPurchaseModal(!showPurchaseModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filtered purchases based on the search term
//   const filteredPurchases = purchase.filter((element) =>
//     element.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showPurchaseModal && (
//           <AddPurchaseDetails
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Search Bar */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center ">
//             <span className="font-bold">Purchase Details</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[200px] p-2 border border-gray-300 rounded-lg" // Adjust width as needed
//             />
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={addSaleModalSetting}
//             >
//               Add Purchase
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Quantity Purchased
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Price (₹)
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Purchase Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Purchase Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredPurchases.map((element) => (
//                 <tr key={element._id}>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                     {element.ProductID?.name}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {element.QuantityPurchased}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.SinglePiecePrice} {/* Displaying Single Piece Price */}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {new Date(element.PurchaseDate).toLocaleDateString() ===
//                     new Date().toLocaleDateString()
//                       ? "Today"
//                       : new Date(element.PurchaseDate).toLocaleDateString()}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.TotalPurchaseAmount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PurchaseDetails;














// import React, { useState, useEffect, useContext } from "react";
// import AddPurchaseDetails from "../components/AddPurchaseDetails";
// import AuthContext from "../AuthContext";

// function PurchaseDetails() {
//   const [showPurchaseModal, setPurchaseModal] = useState(false);
//   const [purchase, setAllPurchaseData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchPurchaseData();
//     fetchProductsData();
//   }, [updatePage]);

//   // Fetching Data of All Purchase items
//   const fetchPurchaseData = () => {
//     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllPurchaseData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Fetching Data of All Products
//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setPurchaseModal(!showPurchaseModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filtered purchases based on the search term
//   const filteredPurchases = purchase.filter((element) =>
//     element.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showPurchaseModal && (
//           <AddPurchaseDetails
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Search Bar */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center ">
//             <span className="font-bold">Purchase Details</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[200px] p-2 border border-gray-300 rounded-lg"
//             />
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={addSaleModalSetting}
//             >
//               Add Purchase
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Quantity Purchased
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Purchase Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Purchase Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredPurchases.map((element) => (
//                 <tr key={element._id}>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                     {element.ProductID?.name}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {element.QuantityPurchased}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.SinglePrice} {/* Corrected field name */}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {new Date(element.PurchaseDate).toLocaleDateString() ===
//                     new Date().toLocaleDateString()
//                       ? "Today"
//                       : new Date(element.PurchaseDate).toLocaleDateString()}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.TotalPurchaseAmount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PurchaseDetails;




















// import React, { useState, useEffect, useContext } from "react";
// import AddPurchaseDetails from "../components/AddPurchaseDetails";
// import AuthContext from "../AuthContext";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function PurchaseDetails() {
//   const [showPurchaseModal, setPurchaseModal] = useState(false);
//   const [purchase, setAllPurchaseData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input
//   const [startDate, setStartDate] = useState(null); // Start date for the report
//   const [endDate, setEndDate] = useState(null); // End date for the report

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchPurchaseData();
//     fetchProductsData();
//   }, [updatePage]);

//   // Fetching Data of All Purchase items
//   const fetchPurchaseData = () => {
//     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllPurchaseData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Fetching Data of All Products
//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setPurchaseModal(!showPurchaseModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filtered purchases based on the search term and date range
//   const filteredPurchases = purchase.filter((element) => {
//     const productNameMatches = element.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase());

//     const isWithinDateRange =
//       (!startDate || new Date(element.PurchaseDate) >= new Date(startDate)) &&
//       (!endDate || new Date(element.PurchaseDate) <= new Date(endDate));

//     return productNameMatches && isWithinDateRange;
//   });

//   // Generate and download PDF
//   const generatePDF = () => {
//     // Check if either start date or end date is selected
//     if (!startDate && !endDate) {
//       alert("Please select a start date and/or an end date to generate the report.");
//       return; // Stop the function execution if dates are not selected
//     }

//     const doc = new jsPDF();

//     const tableColumn = ["Product Name", "Quantity Purchased", "Single Price", "Purchase Date", "Total Purchase Amount"];
//     const tableRows = [];

//     let totalPurchaseAmount = 0;
//     let totalProductCount = 0;

//     const isOneDayReport = startDate && !endDate; // If only start date is selected

//     // Filtered purchases based on the selected date range
//     const purchasesForReport = purchase.filter((element) => {
//       const purchaseDate = new Date(element.PurchaseDate);
//       if (isOneDayReport) {
//         // Check if the date matches the selected start date for one-day report
//         return purchaseDate.toLocaleDateString() === new Date(startDate).toLocaleDateString();
//       } else {
//         // For multiple days, check if the date is within the selected range
//         return (
//           (!startDate || purchaseDate >= new Date(startDate)) &&
//           (!endDate || purchaseDate <= new Date(endDate))
//         );
//       }
//     });

//     purchasesForReport.forEach((element) => {
//       const purchaseDate = new Date(element.PurchaseDate).toLocaleDateString();
//       const totalAmount = element.TotalPurchaseAmount;
//       totalPurchaseAmount += totalAmount;
//       totalProductCount += element.QuantityPurchased;

//       const rowData = [
//         element.ProductID?.name,
//         element.QuantityPurchased,
//         `₹${element.SinglePrice}`,
//         purchaseDate,
//         `₹${totalAmount}`,
//       ];

//       tableRows.push(rowData);
//     });

//     // Add table to PDF
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//     });

//     // Add totals to PDF
//     doc.text(`Total Products Purchased: ${totalProductCount}`, 14, doc.lastAutoTable.finalY + 10);
//     doc.text(`Total Purchase Amount: ₹${totalPurchaseAmount}`, 14, doc.lastAutoTable.finalY + 20);

//     // Determine the file name based on the report type (one-day or multiple days)
//     const fileName = isOneDayReport
//       ? `purchase_report_${new Date(startDate).toLocaleDateString()}.pdf`
//       : `purchase_report_${new Date(startDate).toLocaleDateString()}_to_${new Date(endDate).toLocaleDateString()}.pdf`;

//     // Download the PDF
//     doc.save(fileName);
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showPurchaseModal && (
//           <AddPurchaseDetails
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Search Bar */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center ">
//             <span className="font-bold">Purchase Details</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[200px] p-2 border border-gray-300 rounded-lg"
//             />

//             {/* Date Picker for Start Date */}
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               placeholderText="Start Date"
//               className="p-2 border border-gray-300 rounded-lg"
//             />

//             {/* Date Picker for End Date */}
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               placeholderText="End Date"
//               className="p-2 border border-gray-300 rounded-lg"
//             />

//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={addSaleModalSetting}
//             >
//               Add Purchase
//             </button>

//             {/* Download PDF Button */}
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//               onClick={generatePDF}
//             >
//               Download Report
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Quantity Purchased
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Purchase Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Purchase Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredPurchases.map((element) => (
//                 <tr key={element._id}>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                     {element.ProductID?.name}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {element.QuantityPurchased}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.SinglePrice}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {new Date(element.PurchaseDate).toLocaleDateString() ===
//                     new Date().toLocaleDateString()
//                       ? "Today"
//                       : new Date(element.PurchaseDate).toLocaleDateString()}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.TotalPurchaseAmount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PurchaseDetails;





// import React, { useState, useEffect, useContext } from "react";
// import AddPurchaseDetails from "../components/AddPurchaseDetails";
// import AuthContext from "../AuthContext";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// function PurchaseDetails() {
//   const [showPurchaseModal, setPurchaseModal] = useState(false);
//   const [purchase, setAllPurchaseData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input
//   const [startDate, setStartDate] = useState(null); // Start date for the report
//   const [endDate, setEndDate] = useState(null); // End date for the report

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchPurchaseData();
//     fetchProductsData();
//   }, [updatePage]);

//   // Fetching Data of All Purchase items
//   const fetchPurchaseData = () => {
//     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllPurchaseData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Fetching Data of All Products
//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setPurchaseModal(!showPurchaseModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filtered purchases based on the search term and date range
//   const filteredPurchases = purchase.filter((element) => {
//     const productNameMatches = element.ProductID?.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const isWithinDateRange =
//       (!startDate || new Date(element.PurchaseDate) >= new Date(startDate)) &&
//       (!endDate || new Date(element.PurchaseDate) <= new Date(endDate));

//     return productNameMatches && isWithinDateRange;
//   });

//   // Calculate total product count and total purchase amount
//   let totalProductCount = filteredPurchases.reduce(
//     (total, element) => total + element.QuantityPurchased,
//     0
//   );

//   let totalPurchaseAmount = filteredPurchases.reduce(
//     (total, element) => total + element.TotalPurchaseAmount,
//     0
//   );

//   // Generate and download PDF
//   const generatePDF = () => {
//     if (!startDate && !endDate) {
//       alert("Please select a start date and/or an end date to generate the report.");
//       return;
//     }

//     const doc = new jsPDF();
    
//     // Centered Title
//     const title = "Velavan Textile";
//     const address = "Kumaran Nagar, Perundurai, Tirupur";

//     // Set Title
//     doc.setFontSize(20);
//     doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, { align: "center" });
    
//     // Set Address
//     doc.setFontSize(12);
//     doc.text(address, doc.internal.pageSize.getWidth() / 2, 18, { align: "center" });

//     // Table Data
//     const tableColumn = ["Product Name", "Quantity Purchased", "Single Price", "Purchase Date", "Total Purchase Amount"];
//     const tableRows = [];

//     let totalPurchaseAmountForPDF = 0;
//     let totalProductCountForPDF = 0;

//     const isOneDayReport = startDate && !endDate;

//     const purchasesForReport = purchase.filter((element) => {
//       const purchaseDate = new Date(element.PurchaseDate);
//       if (isOneDayReport) {
//         return purchaseDate.toLocaleDateString() === new Date(startDate).toLocaleDateString();
//       } else {
//         return (
//           (!startDate || purchaseDate >= new Date(startDate)) &&
//           (!endDate || purchaseDate <= new Date(endDate))
//         );
//       }
//     });

//     purchasesForReport.forEach((element) => {
//       const purchaseDate = new Date(element.PurchaseDate).toLocaleDateString();
//       const totalAmount = element.TotalPurchaseAmount;
//       totalPurchaseAmountForPDF += totalAmount;
//       totalProductCountForPDF += element.QuantityPurchased;

//       const rowData = [
//         element.ProductID?.name,
//         element.QuantityPurchased,
//         `₹${element.SinglePrice}`,
//         purchaseDate,
//         `₹${totalAmount}`,
//       ];

//       tableRows.push(rowData);
//     });

//     // Adding table to the PDF
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 25, // Start position of the table
//     });

//     // Add total products and total amount to the PDF
//     doc.text(`Total Products Purchased: ${totalProductCountForPDF}`, 14, doc.lastAutoTable.finalY + 10);
//     doc.text(`Total Purchase Amount: ₹${totalPurchaseAmountForPDF}`, 14, doc.lastAutoTable.finalY + 20);

//     const fileName = isOneDayReport
//       ? `purchase_report_${new Date(startDate).toLocaleDateString()}.pdf`
//       : `purchase_report_${new Date(startDate).toLocaleDateString()}_to_${new Date(endDate).toLocaleDateString()}.pdf`;

//     doc.save(fileName);
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showPurchaseModal && (
//           <AddPurchaseDetails
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Search Bar */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center ">
//             <span className="font-bold">Purchase Details</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[200px] p-2 border border-gray-300 rounded-lg"
//             />

//             {/* Date Picker for Start Date */}
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               placeholderText="Start Date"
//               className="p-2 border border-gray-300 rounded-lg"
//             />

//             {/* Date Picker for End Date */}
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               placeholderText="End Date"
//               className="p-2 border border-gray-300 rounded-lg"
//             />

//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={addSaleModalSetting}
//             >
//               Add Purchase
//             </button>

//             {/* Download PDF Button */}
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//               onClick={generatePDF}
//             >
//               Download Report
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Quantity Purchased
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Purchase Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Total Purchase Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredPurchases.length > 0 ? (
//                 filteredPurchases.map((element) => (
//                   <tr key={element._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                       {element.ProductID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                       {element.QuantityPurchased}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                       ₹{element.SinglePrice}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                       {new Date(element.PurchaseDate).toLocaleDateString()}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                       ₹{element.TotalPurchaseAmount}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
//                     No purchases found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>

//             {/* Totals Row */}
//             {/* <tfoot>
//               <tr>
//                 <td colSpan="1" className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Total Products Purchased: {totalProductCount}
//                 </td>
//                 <td colSpan="4" className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
//                   Total Purchase Amount: ₹{totalPurchaseAmount}
//                 </td>
//               </tr>
//             </tfoot> */}
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PurchaseDetails;













// import React, { useState, useEffect, useContext } from "react";
// import AddPurchaseDetails from "../components/AddPurchaseDetails";
// import AuthContext from "../AuthContext";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { format } from "date-fns"; // Import date formatting utility

// function PurchaseDetails() {
//   const [showPurchaseModal, setPurchaseModal] = useState(false);
//   const [purchase, setAllPurchaseData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input
//   const [startDate, setStartDate] = useState(null); // Start date for the report
//   const [endDate, setEndDate] = useState(null); // End date for the report

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchPurchaseData();
//     fetchProductsData();
//   }, [updatePage]);

//   // Fetching Data of All Purchase items
//   const fetchPurchaseData = () => {
//     fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllPurchaseData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Fetching Data of All Products
//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setPurchaseModal(!showPurchaseModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filtered purchases based on the search term and date range
//   const filteredPurchases = purchase.filter((element) => {
//     const productNameMatches = element.ProductID?.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const isWithinDateRange =
//       (!startDate || new Date(element.PurchaseDate) >= new Date(startDate)) &&
//       (!endDate || new Date(element.PurchaseDate) <= new Date(endDate));

//     return productNameMatches && isWithinDateRange;
//   });

//   // Calculate total product count and total purchase amount
//   let totalProductCount = filteredPurchases.length;

//   let totalQuantityPurchased = filteredPurchases.reduce(
//     (total, element) => total + element.QuantityPurchased,
//     0
//   );

//   let totalPurchaseAmount = filteredPurchases.reduce(
//     (total, element) => total + element.TotalPurchaseAmount,
//     0
//   );

//   // Generate and download PDF
//   const generatePDF = () => {
//     if (!startDate && !endDate) {
//       alert("Please select a start date and/or an end date to generate the report.");
//       return;
//     }

//     const doc = new jsPDF();
    
//     // Centered Title
//     const title = "Velavan Textile";
//     const address = "Kumaran Nagar, Perundurai, Tirupur";
//     const d="Purchased Details";
//     // Set Title
//     doc.setFontSize(20);
//     doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, { align: "center" });
    
//     // Set Address
//     doc.setFontSize(12);
//     doc.text(address, doc.internal.pageSize.getWidth() / 2, 18, { align: "center" });
//     doc.setFontSize(18);
//     doc.text(d, doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });
//     // Display Date Range
//     const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
//     const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
//     doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 10, 44);
//     // // Display Total Purchase Count, Quantity, and Amount
//     // doc.text(`Total Quantity Purchased: ${totalQuantityPurchased}`, 14, 44);
//     // doc.text(`Total Purchase Amount: ₹${totalPurchaseAmount}`, 14, 52);

//     // Table Data
//     const tableColumn = ["Product Name", "Quantity Purchased", "Single Price", "Purchase Date", "Total Purchase Amount"];
//     const tableRows = [];

//     let totalPurchaseAmountForPDF = 0;
//     let totalQuantityForPDF = 0;

//     const isOneDayReport = startDate && !endDate;

//     const purchasesForReport = purchase.filter((element) => {
//       const purchaseDate = new Date(element.PurchaseDate);
//       if (isOneDayReport) {
//         return purchaseDate.toLocaleDateString() === new Date(startDate).toLocaleDateString();
//       } else {
//         return (
//           (!startDate || purchaseDate >= new Date(startDate)) &&
//           (!endDate || purchaseDate <= new Date(endDate))
//         );
//       }
//     });

//     purchasesForReport.forEach((element) => {
//       const purchaseDate = format(new Date(element.PurchaseDate), "dd-MM-yyyy");
//       const totalAmount = element.TotalPurchaseAmount;
//       totalPurchaseAmountForPDF += totalAmount;
//       totalQuantityForPDF += element.QuantityPurchased;

//       const rowData = [
//         element.ProductID?.name,
//         element.QuantityPurchased,
//         `₹${element.SinglePrice}`,
//         purchaseDate,
//         `₹${totalAmount}`,
//       ];

//       tableRows.push(rowData);
//     });

//     // Adding table to the PDF
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 60, // Start position of the table
//     });

//     // Add total products, quantity, and total amount in the last row of the table
//     doc.autoTable({
//       body: [[
//         `Total Products: ${totalProductCount}`, 
//         `Total Quantity: ${totalQuantityPurchased}`, 
//         "", "", 
//         `Total Amount: ₹${totalPurchaseAmountForPDF}`
//       ]],
//       startY: doc.lastAutoTable.finalY + 10, // Start after the previous table
//     });

//     const fileName = isOneDayReport
//       ? `purchase_report_${format(new Date(startDate), "dd-MM-yyyy")}.pdf`
//       : `purchase_report_${format(new Date(startDate), "dd-MM-yyyy")}_to_${format(new Date(endDate), "dd-MM-yyyy")}.pdf`;

//     doc.save(fileName);
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showPurchaseModal && (
//           <AddPurchaseDetails
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Search Bar */}
//         <div className="flex justify-between pt-5 pb-3 px-3">
//           <div className="flex gap-4 justify-center items-center ">
//             <span className="font-bold">Purchase Details</span>
//           </div>
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[200px] p-2 border border-gray-300 rounded-lg"
//             />

//             {/* Date Picker for Start Date */}
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//               placeholderText="Start Date"
//               className="p-2 border border-gray-300 rounded-lg"
//               dateFormat="dd-MM-yyyy" // Updated date format
//             />

//             {/* Date Picker for End Date */}
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               placeholderText="End Date"
//               className="p-2 border border-gray-300 rounded-lg"
//               dateFormat="dd-MM-yyyy" // Updated date format
//             />

//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//               onClick={addSaleModalSetting}
//             >
//               Add Purchase
//             </button>

//             {/* Download PDF Button */}
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//               onClick={generatePDF}
//             >
//               Download Report
//             </button>
//           </div>
//         </div>

//         {/* Purchase Table */}
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full text-xs">
//             <thead>
//               <tr className="text-center bg-gray-100">
//                 <th className="p-3">Product Name</th>
//                 <th className="p-3">Quantity Purchased</th>
//                 <th className="p-3">Single Price</th>
//                 <th className="p-3">Purchase Date</th>
//                 <th className="p-3">Total Purchase Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPurchases.length > 0 ? (
//                 filteredPurchases.map((element, index) => (
//                   <tr key={index} className="text-center">
//                     <td className="p-3">{element.ProductID?.name}</td>
//                     <td className="p-3">{element.QuantityPurchased}</td>
//                     <td className="p-3">₹{element.SinglePrice}</td>
//                     <td className="p-3">
//                       {format(new Date(element.PurchaseDate), "dd-MM-yyyy")} {/* Updated date format */}
//                     </td>
//                     <td className="p-3">₹{element.TotalPurchaseAmount}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="p-3 text-center">
//                     No Purchase records found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
// {/* 
//         Display Total Information
//         {filteredPurchases.length > 0 && (
//           <div className="flex justify-between font-bold">
//             <span>Total Products: {totalProductCount}</span>
//             <span>Total Quantity: {totalQuantityPurchased}</span>
//             <span>Total Purchase Amount: ₹{totalPurchaseAmount}</span>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }

// export default PurchaseDetails;






import React, { useState, useEffect, useContext } from "react";
import AddPurchaseDetails from "../components/AddPurchaseDetails";
import AuthContext from "../AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns"; // Import date formatting utility

function PurchaseDetails() {
  const [showPurchaseModal, setPurchaseModal] = useState(false);
  const [purchase, setAllPurchaseData] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // For tracking the search input
  const [startDate, setStartDate] = useState(null); // Start date for the report
  const [endDate, setEndDate] = useState(null); // End date for the report

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchPurchaseData();
    fetchProductsData();
  }, [updatePage]);

  // Fetching Data of All Purchase items
  const fetchPurchaseData = () => {
    fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPurchaseData(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Modal for Sale Add
  const addSaleModalSetting = () => {
    setPurchaseModal(!showPurchaseModal);
  };

  // Handle Page Update
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  // Filtered purchases based on the search term and date range
  const filteredPurchases = purchase.filter((element) => {
    const productNameMatches = element.ProductID?.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const isWithinDateRange =
      (!startDate || new Date(element.PurchaseDate) >= new Date(startDate)) &&
      (!endDate || new Date(element.PurchaseDate) <= new Date(endDate));

    return productNameMatches && isWithinDateRange;
  });

  // Calculate total product count and total purchase amount
  let totalProductCount = filteredPurchases.length;

  let totalQuantityPurchased = filteredPurchases.reduce(
    (total, element) => total + element.QuantityPurchased,
    0
  );

  let totalPurchaseAmount = filteredPurchases.reduce(
    (total, element) => total + element.TotalPurchaseAmount,
    0
  );

  // Generate and download PDF
  const generatePDF = () => {
    if (!startDate && !endDate) {
      alert("Please select a start date and/or an end date to generate the report.");
      return;
    }

    const doc = new jsPDF();
    
    // Centered Title
    const title = "Velavan Textile";
    const address = "3/109 S, Guruvayurappan Nagar, Kannakampalayam, Tirupur.Ph:9790391565";
    const d = "Purchased Details";
    
    // Set Title
    doc.setFontSize(20);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, { align: "center" });
    
    // Set Address
    doc.setFontSize(12);
    doc.text(address, doc.internal.pageSize.getWidth() / 2, 18, { align: "center" });
    doc.setFontSize(18);
    doc.text(d, doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });
    
    // Display Date Range
    const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
    const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
    
    // Smaller Font for Date Range
    doc.setFontSize(10);
    doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 10, 44);

    // Table Data
    const tableColumn = ["Product Name", "Quantity Purchased", "Single Price", "Purchase Date", "Total Purchase Amount"];
    const tableRows = [];

    let totalPurchaseAmountForPDF = 0;
    let totalQuantityForPDF = 0;

    const isOneDayReport = startDate && !endDate;

    const purchasesForReport = purchase.filter((element) => {
      const purchaseDate = new Date(element.PurchaseDate);
      if (isOneDayReport) {
        return purchaseDate.toLocaleDateString() === new Date(startDate).toLocaleDateString();
      } else {
        return (
          (!startDate || purchaseDate >= new Date(startDate)) &&
          (!endDate || purchaseDate <= new Date(endDate))
        );
      }
    });

    purchasesForReport.forEach((element) => {
      const purchaseDate = format(new Date(element.PurchaseDate), "dd-MM-yyyy");
      const totalAmount = element.TotalPurchaseAmount;
      totalPurchaseAmountForPDF += totalAmount;
      totalQuantityForPDF += element.QuantityPurchased;

      const rowData = [
        element.ProductID?.name,
        element.QuantityPurchased,
        `₹${element.SinglePrice}`,
        purchaseDate,
        `₹${totalAmount}`,
      ];

      tableRows.push(rowData);
    });

    // Adding table to the PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 60, // Start position of the table
    });

    // Add total products, quantity, and total amount in the last row of the table
    doc.autoTable({
      body: [[
        `Total Products: ${totalProductCount}`, 
        `Total Quantity: ${totalQuantityPurchased}`, 
        "", "", 
        `Total Amount: ₹${totalPurchaseAmountForPDF}`
      ]],
      startY: doc.lastAutoTable.finalY + 10, // Start after the previous table
    });

    const fileName = isOneDayReport
      ? `purchase_report_${format(new Date(startDate), "dd-MM-yyyy")}.pdf`
      : `purchase_report_${format(new Date(startDate), "dd-MM-yyyy")}_to_${format(new Date(endDate), "dd-MM-yyyy")}.pdf`;

    doc.save(fileName);
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        {showPurchaseModal && (
          <AddPurchaseDetails
            addSaleModalSetting={addSaleModalSetting}
            products={products}
            handlePageUpdate={handlePageUpdate}
            authContext={authContext}
          />
        )}

        {/* Search Bar */}
        <div className="flex justify-between pt-5 pb-2 px-3"> {/* Reduced padding-bottom for less space */}
          <div className="flex gap-4 justify-center items-center ">
            <span className="font-bold">Purchase Details</span>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[200px] p-2 border border-gray-300 rounded-lg"
            />

            {/* Date Picker for Start Date */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="p-2 border border-gray-300 rounded-lg"
              dateFormat="dd-MM-yyyy" // Updated date format
            />

            {/* Date Picker for End Date */}
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              className="p-2 border border-gray-300 rounded-lg"
              dateFormat="dd-MM-yyyy" // Updated date format
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
              onClick={addSaleModalSetting}
            >
              Add Purchase
            </button>

            {/* Download PDF Button */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
              onClick={generatePDF}
            >
              Download Report
            </button>
          </div>
        </div>

        {/* Purchase Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-xs">
            <thead>
              <tr className="text-center bg-gray-100">
                <th className="p-3">Product Name</th>
                <th className="p-3">Quantity Purchased</th>
                <th className="p-3">Single Price</th>
                <th className="p-3">Purchase Date</th>
                <th className="p-3">Total Purchase Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredPurchases.length > 0 ? (
                filteredPurchases.map((element, index) => {
                  return (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-3">{element.ProductID?.name}</td>
                      <td className="p-3">{element.QuantityPurchased}</td>
                      <td className="p-3">₹{element.SinglePrice}</td>
                      <td className="p-3">{format(new Date(element.PurchaseDate), "dd-MM-yyyy")}</td>
                      <td className="p-3">₹{element.TotalPurchaseAmount}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-red-500">
                    No matching purchases found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="w-full mt-5 px-3">
          <div className="grid grid-cols-2 gap-5 text-xs">
            <div className="p-2 border border-gray-300 bg-white shadow rounded">
              <div className="font-bold">Total Products:</div>
              <div>{totalProductCount}</div>
            </div>

            <div className="p-2 border border-gray-300 bg-white shadow rounded">
              <div className="font-bold">Total Quantity Purchased:</div>
              <div>{totalQuantityPurchased}</div>
            </div>

            <div className="p-2 border border-gray-300 bg-white shadow rounded">
              <div className="font-bold">Total Purchase Amount:</div>
              <div>₹{totalPurchaseAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetails;


