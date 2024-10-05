// import React, { useState, useEffect, useContext } from "react";
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   // Fetching Data of All Sales
//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
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

//   // Fetching Data of All Stores
//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filter sales based on search term (by product name or store name)
//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}
//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center ">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sale Amount
//                 </th>
                
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredSales.length > 0 ? (
//                 filteredSales.map((element) => (
//                   <tr key={element._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {element.ProductID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StoreID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StockSold}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.SaleDate}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.SinglePiecePrice}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{element.TotalSaleAmount}
//                     </td>
                    
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-2 text-gray-500">
//                     No sales found.
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

// export default Sales;











// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   // Fetching Data of All Sales
//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
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

//   // Fetching Data of All Stores
//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   // Modal for Sale Add
//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   // Handle Page Update
//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   // Filter sales based on search term (by product name or store name)
//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const generatePDF = () => {
//     const doc = new jsPDF();
  
//     // Get the page width (assuming A4 size, width is 210mm)
//     const pageWidth = doc.internal.pageSize.getWidth();
  
//     // Title: Velavan Textile
//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2; // Centering calculation
//     doc.text(titleText, titleX, 22);
  
//     // Address: Kumaran Nagar, Perundurai, Tirupur
//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2; // Centering calculation
//     doc.text(addressText, addressX, 30);
  
//     // Calculate total quantities and amounts
//     const totalQuantity = filteredSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//     const totalAmount = filteredSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
  
//     // Prepare data for the table
//     const tableData = filteredSales.map((sale) => [
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);
  
//     // Add total row to the table data
//     tableData.push([
//       "Total", // Product Name
//       "", // Store Name (empty)
//       totalQuantity, // Total Quantity
//       "", // Sale Date (empty)
//       "", // Single Piece Price (empty)
//       `₹${totalAmount}`, // Total Sale Amount
//     ]);
  
//     // Add the table with line spacing and total row inside
//     doc.autoTable({
//       head: [["Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 40, // Start the table below the address
//       styles: {
//         halign: 'center', // Center-align text
//         lineHeight: 1.5, // Set line height (line spacing)
//       },
//       footStyles: { halign: 'right' }, // Right-align footer text (optional)
//     });
  
//     // Save the PDF
//     doc.save("sales_report.pdf");
//   };
  
//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}
//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center ">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sale Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredSales.length > 0 ? (
//                 filteredSales.map((element) => (
//                   <tr key={element._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {element.ProductID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StoreID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StockSold}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.SaleDate}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       ₹{element.SinglePiecePrice}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       ₹{element.TotalSaleAmount}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-2 text-gray-500">
//                     No sales found.
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

// export default Sales;




// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const generatePDF = () => {
//     const doc = new jsPDF();
  
//     // Get the page width (assuming A4 size, width is 210mm)
//     const pageWidth = doc.internal.pageSize.getWidth();
  
//     // Title: Velavan Textile
//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2;
//     doc.text(titleText, titleX, 22);
  
//     // Address: Kumaran Nagar, Perundurai, Tirupur
//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2;
//     doc.text(addressText, addressX, 30);
  
//     // New line: "SALES DETAILS"
//     const salesDetailsText = "SALES DETAILS";
//     const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
//     const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
//     doc.text(salesDetailsText, salesDetailsX, 38);
  
//     // Calculate total quantities, amounts, and product count
//     const totalQuantity = filteredSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//     const totalAmount = filteredSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
    
//     // Count unique product names
//     const uniqueProductNames = new Set(filteredSales.map(sale => sale.ProductID?.name)).size;
  
//     // Prepare data for the table
//     const tableData = filteredSales.map((sale, index) => [
//       index + 1, // Add product count as the first column
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);
  
//     // Add total row to the table data
//     tableData.push([
//       "Total", // "Total" in the product count column
//       `${uniqueProductNames} `, // Unique product count in the Product Name column
//       "", // Empty for Store Name
//       totalQuantity, // Total quantity sold
//       "", // Empty for Sale Date
//       "", // Empty for Single Piece Price
//       `₹${totalAmount}`, // Total sale amount
//     ]);
  
//     // Add the table with the product count and other details
//     doc.autoTable({
//       head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 48,
//       styles: {
//         halign: "center",
//         lineHeight: 1.5,
//       },
//     });
  
//     // Save the PDF and show a toast notification
//     doc.save("sales_report.pdf");
//     toast.success("PDF downloaded successfully!");
//   };
  
  
//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Toast container */}
//         <ToastContainer />

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sale Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredSales.length > 0 ? (
//                 filteredSales.map((element) => (
//                   <tr key={element._id}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {element.ProductID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StoreID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.StockSold}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       {element.SaleDate}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       ₹{element.SinglePiecePrice}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                       ₹{element.TotalSaleAmount}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-2 text-gray-500">
//                     No sales found.
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

// export default Sales;
















// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   // Date range states
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Define filteredByDateSales
//   const filteredByDateSales = filteredSales.filter(sale => {
//     const saleDate = new Date(sale.SaleDate);
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     return (!startDate || saleDate >= start) && (!endDate || saleDate <= end);
//   });

//   const generatePDF = () => {
//     // Check if startDate or endDate is not selected
//     if (!startDate && !endDate) {
//       toast.error("Please select both start and end dates.");
//       return;
//     }

//     if (filteredByDateSales.length === 0) {
//       toast.error("No sales found for the selected date range.");
//       return;
//     }

//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();

//     // Title: Velavan Textile
//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2;
//     doc.text(titleText, titleX, 22);

//     // Address: Kumaran Nagar, Perundurai, Tirupur
//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2;
//     doc.text(addressText, addressX, 30);

//     // New line: "SALES DETAILS"
//     const salesDetailsText = "SALES DETAILS";
//     const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
//     const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
//     doc.text(salesDetailsText, salesDetailsX, 38);

//     // Calculate total quantities, amounts, and product count
//     const totalQuantity = filteredByDateSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//     const totalAmount = filteredByDateSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
    
//     const uniqueProductNames = new Set(filteredByDateSales.map(sale => sale.ProductID?.name)).size;

//     // Prepare data for the table
//     const tableData = filteredByDateSales.map((sale, index) => [
//       index + 1, // Add product count as the first column
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);

//     // Add total row to the table data
//     tableData.push([
//       "Total", 
//       `${uniqueProductNames} `, 
//       "", 
//       totalQuantity, 
//       "", 
//       "", 
//       `₹${totalAmount}`, 
//     ]);

//     // Add the table with the product count and other details
//     doc.autoTable({
//       head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 48,
//       styles: {
//         halign: "center",
//         lineHeight: 1.5,
//       },
//     });

//     // Save the PDF and show a toast notification
//     doc.save("sales_report.pdf");
//     toast.success("PDF downloaded successfully!");
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Toast container */}
//         <ToastContainer />

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4 items-center">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
              
//               {/* Date Range Input */}
//               <div className="flex gap-2">
//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sale Amount
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredByDateSales.map((sale) => (
//                 <tr key={sale._id}>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.ProductID?.name}</td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.StoreID?.name}</td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.StockSold}</td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.SaleDate}</td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹{sale.SinglePiecePrice}</td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹{sale.TotalSaleAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sales;














// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";
// import { format } from 'date-fns'; // Import format function from date-fns

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   // Date range states
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Define filteredByDateSales
//   const filteredByDateSales = filteredSales.filter(sale => {
//     const saleDate = new Date(sale.SaleDate);
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     return (!startDate || saleDate >= start) && (!endDate || saleDate <= end);
//   });

//   const generatePDF = () => {
//     // Check if startDate or endDate is not selected
//     if (!startDate && !endDate) {
//       toast.error("Please select both start and end dates.");
//       return;
//     }

//     if (filteredByDateSales.length === 0) {
//       toast.error("No sales found for the selected date range.");
//       return;
//     }

//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();

//     // Title: Velavan Textile
//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2;
//     doc.text(titleText, titleX, 22);

//     // Address: Kumaran Nagar, Perundurai, Tirupur
//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2;
//     doc.text(addressText, addressX, 30);

//     // New line: "SALES DETAILS"
//     const salesDetailsText = "SALES DETAILS";
//     const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
//     const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
//     doc.text(salesDetailsText, salesDetailsX, 38);
//     const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
//     const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
//     doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 14, 44);
    
//     // Calculate total quantities, amounts, and product count
//     const totalQuantity = filteredByDateSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//     const totalAmount = filteredByDateSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
//     const uniqueProductNames = new Set(filteredByDateSales.map(sale => sale.ProductID?.name)).size;

//     // Prepare data for the table
//     const tableData = filteredByDateSales.map((sale, index) => [
//       index + 1, // Add product count as the first column
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);

//     // Add total row to the table data
//     tableData.push([
//       "Total", 
//       `${uniqueProductNames} `, 
//       "", 
//       totalQuantity, 
//       "", 
//       "", 
//       `₹${totalAmount}`, 
//     ]);

//     // Add the table with the product count and other details
//     doc.autoTable({
//       head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 48,
//       styles: {
//         halign: "center",
//         lineHeight: 1.5,
//       },
//     });

//     // Save the PDF and show a toast notification
//     doc.save("sales_report.pdf");
//     toast.success("PDF downloaded successfully!");
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Toast container */}
//         <ToastContainer />

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4 items-center">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
              
//               {/* Date Range Input */}
//               <div className="flex gap-2">
//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Single Piece Price
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sales Amount
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {filteredByDateSales.map((sale) => (
//                 <tr key={sale._id}>
//                   <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
//                     {sale.ProductID?.name}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
//                     {sale.StoreID?.name}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {sale.StockSold}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     {sale.SaleDate}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{sale.SinglePiecePrice}
//                   </td>
//                   <td className="whitespace-nowrap px-4 py-2 text-gray-700">
//                     ₹{sale.TotalSaleAmount}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="w-full mt-5 px-3">
//           <div className="grid grid-cols-2 gap-5 text-xs">
//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Products:</div>
//               <div>{totalProductCount}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Quantity Purchased:</div>
//               <div>{totalQuantity}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Purchase Amount:</div>
//               <div>₹{totalPurchaseAmount}</div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sales;





// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";
// import { format } from 'date-fns'; // Import format function from date-fns

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   // Date range states
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       });
//   };

//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Define filteredByDateSales
//   const filteredByDateSales = filteredSales.filter(sale => {
//     const saleDate = new Date(sale.SaleDate);
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     return (!startDate || saleDate >= start) && (!endDate || saleDate <= end);
//   });

//   // Calculate totals
//   const totalQuantity = filteredByDateSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//   const totalPurchaseAmount = filteredByDateSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
//   const totalProductCount = new Set(filteredByDateSales.map(sale => sale.ProductID?.name)).size;

//   const generatePDF = () => {
//     // Check if startDate or endDate is not selected
//     if (!startDate && !endDate) {
//       toast.error("Please select both start and end dates.");
//       return;
//     }

//     if (filteredByDateSales.length === 0) {
//       toast.error("No sales found for the selected date range.");
//       return;
//     }

//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();

//     // Title: Velavan Textile
//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2;
//     doc.text(titleText, titleX, 22);

//     // Address: Kumaran Nagar, Perundurai, Tirupur
//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2;
//     doc.text(addressText, addressX, 30);

//     // New line: "SALES DETAILS"
//     const salesDetailsText = "SALES DETAILS";
//     const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
//     const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
//     doc.text(salesDetailsText, salesDetailsX, 38);
//     const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
//     const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
//     doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 14, 44);
    
//     // Prepare data for the table
//     const tableData = filteredByDateSales.map((sale, index) => [
//       index + 1, // Add product count as the first column
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);

//     // Add total row to the table data
//     tableData.push([
//       "Total", 
//       `${totalProductCount}`, 
//       "", 
//       totalQuantity, 
//       "", 
//       "", 
//       `₹${totalPurchaseAmount}`, 
//     ]);

//     // Add the table with the product count and other details
//     doc.autoTable({
//       head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 48,
//       styles: {
//         halign: "center",
//         lineHeight: 1.5,
//       },
//     });

//     // Save the PDF and show a toast notification
//     doc.save("sales_report.pdf");
//     toast.success("PDF downloaded successfully!");
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         {/* Toast container */}
//         <ToastContainer />

//         {/* Table */}
//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4 items-center">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>
              
//               {/* Date Range Input */}
//               <div className="flex gap-2">
//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product "
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Product Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Store Name
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Stock Sold
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Sales Date
//                 </th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
//                   Total Sale Amount
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredByDateSales.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="whitespace-nowrap px-4 py-2 text-center">
//                     No sales found
//                   </td>
//                 </tr>
//               ) : (
//                 filteredByDateSales.map((sale, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {sale.ProductID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {sale.StoreID?.name}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {sale.StockSold}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       {new Date(sale.SaleDate).toLocaleDateString()}
//                     </td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">
//                       ₹{sale.TotalSaleAmount}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
// {/* 
        
//         <div className="bg-gray-100 p-4 rounded-lg">
//           <h2 className="font-bold">Total Summary</h2>
//           <p>Total Quantity Sold: {totalQuantity}</p>
//           <p>Total Products Count: {totalProductCount}</p>
//           <p>Total Sale Amount: ₹{totalPurchaseAmount}</p>
//         </div> */}

// <div className="w-full mt-5 px-3">
//           <div className="grid grid-cols-2 gap-5 text-xs">
//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Quantity Sold:</div>
//               <div>{totalQuantity}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Products Count: </div>
//               <div>{totalProductCount}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Sale Amount:</div>
//               <div>₹{totalPurchaseAmount}</div>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
    
//   );
// }

// export default Sales;








// import React, { useState, useEffect, useContext } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AddSale from "../components/AddSale";
// import AuthContext from "../AuthContext";
// import { format } from 'date-fns';
// import DatePicker from "react-datepicker"; // Import the date picker
// import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS

// function Sales() {
//   const [showSaleModal, setShowSaleModal] = useState(false);
//   const [sales, setAllSalesData] = useState([]);
//   const [products, setAllProducts] = useState([]);
//   const [stores, setAllStores] = useState([]);
//   const [updatePage, setUpdatePage] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Date range states
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     fetchSalesData();
//     fetchProductsData();
//     fetchStoresData();
//   }, [updatePage]);

//   const fetchSalesData = () => {
//     fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllSalesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchProductsData = () => {
//     fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const fetchStoresData = () => {
//     fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllStores(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const addSaleModalSetting = () => {
//     setShowSaleModal(!showSaleModal);
//   };

//   const handlePageUpdate = () => {
//     setUpdatePage(!updatePage);
//   };

//   const filteredSales = sales.filter((sale) =>
//     sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredByDateSales = filteredSales.filter(sale => {
//     const saleDate = new Date(sale.SaleDate);
//     const start = startDate ? new Date(startDate) : null;
//     const end = endDate ? new Date(endDate) : null;

//     return (
//       (!start || saleDate >= start) &&
//       (!end || saleDate <= end)
//     );
//   });

//   const totalQuantity = filteredByDateSales.reduce((sum, sale) => sum + sale.StockSold, 0);
//   const totalPurchaseAmount = filteredByDateSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
//   const totalProductCount = new Set(filteredByDateSales.map(sale => sale.ProductID?.name)).size;

//   const generatePDF = () => {
//     if (!startDate && !endDate) {
//       toast.error("Please select both start and end dates.");
//       return;
//     }

//     if (filteredByDateSales.length === 0) {
//       toast.error("No sales found for the selected date range.");
//       return;
//     }

//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();

//     doc.setFontSize(18);
//     const titleText = "Velavan Textile";
//     const titleWidth = doc.getTextWidth(titleText);
//     const titleX = (pageWidth - titleWidth) / 2;
//     doc.text(titleText, titleX, 22);

//     doc.setFontSize(12);
//     const addressText = "Kumaran Nagar, Perundurai, Tirupur";
//     const addressWidth = doc.getTextWidth(addressText);
//     const addressX = (pageWidth - addressWidth) / 2;
//     doc.text(addressText, addressX, 30);

//     const salesDetailsText = "SALES DETAILS";
//     const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
//     const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
//     doc.text(salesDetailsText, salesDetailsX, 38);
//     const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
//     const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
//     doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 14, 44);

//     const tableData = filteredByDateSales.map((sale, index) => [
//       index + 1,
//       sale.ProductID?.name,
//       sale.StoreID?.name,
//       sale.StockSold,
//       sale.SaleDate,
//       sale.SinglePiecePrice,
//       sale.TotalSaleAmount,
//     ]);

//     tableData.push([
//       "Total", 
//       `${totalProductCount}`, 
//       "", 
//       totalQuantity, 
//       "", 
//       "", 
//       `₹${totalPurchaseAmount}`, 
//     ]);

//     doc.autoTable({
//       head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
//       body: tableData,
//       startY: 48,
//       styles: {
//         halign: "center",
//         lineHeight: 1.5,
//       },
//     });

//     doc.save("sales_report.pdf");
//     toast.success("PDF downloaded successfully!");
//   };

//   return (
//     <div className="col-span-12 lg:col-span-10 flex justify-center">
//       <div className="flex flex-col gap-5 w-11/12">
//         {showSaleModal && (
//           <AddSale
//             addSaleModalSetting={addSaleModalSetting}
//             products={products}
//             stores={stores}
//             handlePageUpdate={handlePageUpdate}
//             authContext={authContext}
//           />
//         )}

//         <ToastContainer />

//         <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
//           <div className="flex justify-between pt-5 pb-3 px-3">
//             <div className="flex gap-4 justify-center items-center">
//               <span className="font-bold">Sales</span>
//             </div>

//             <div className="flex gap-4 items-center">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={addSaleModalSetting}
//               >
//                 Add Sales
//               </button>

//               {/* Date Range Input */}
//               <div className="flex gap-2">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   placeholderText="Start Time"
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   placeholderText="End Time"
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
//                 onClick={generatePDF}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search product"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[150px] p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Product Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Store Name</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Stock Sold</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Sales Date</th>
//                 <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Total Sale Amount</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredByDateSales.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="whitespace-nowrap px-4 py-2 text-center">No sales found</td>
//                 </tr>
//               ) : (
//                 filteredByDateSales.map((sale, index) => (
//                   <tr key={index}>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">{sale.ProductID?.name}</td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">{sale.StoreID?.name}</td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">{sale.StockSold}</td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">{new Date(sale.SaleDate).toLocaleDateString()}</td>
//                     <td className="whitespace-nowrap px-4 py-2 text-gray-900">₹{sale.TotalSaleAmount}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="w-full mt-5 px-3">
//           <div className="grid grid-cols-2 gap-5 text-xs">
//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Quantity Sold:</div>
//               <div>{totalQuantity}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Products Count:</div>
//               <div>{totalProductCount}</div>
//             </div>

//             <div className="p-2 border border-gray-300 bg-white shadow rounded">
//               <div className="font-bold">Total Sale Amount:</div>
//               <div>₹{totalPurchaseAmount}</div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Sales;









import React, { useState, useEffect, useContext } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSale from "../components/AddSale";
import AuthContext from "../AuthContext";
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Sales() {
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [sales, setAllSalesData] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [stores, setAllStores] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchSalesData();
    fetchProductsData();
    fetchStoresData();
  }, [updatePage]);

  const fetchSalesData = () => {
    fetch(`http://localhost:4000/api/sales/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllSalesData(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchStoresData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      })
      .catch((err) => console.log(err));
  };

  const addSaleModalSetting = () => {
    setShowSaleModal(!showSaleModal);
  };

  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  const filteredSales = sales.filter((sale) =>
    sale.ProductID?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.StoreID?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByDateSales = filteredSales.filter(sale => {
    const saleDate = new Date(sale.SaleDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (
      (!start || saleDate >= start) &&
      (!end || saleDate <= end)
    );
  });

  const totalQuantity = filteredByDateSales.reduce((sum, sale) => sum + sale.StockSold, 0);
  const totalPurchaseAmount = filteredByDateSales.reduce((sum, sale) => sum + sale.TotalSaleAmount, 0);
  const totalProductCount = new Set(filteredByDateSales.map(sale => sale.ProductID?.name)).size;

  const generatePDF = () => {
    if (!startDate && !endDate) {
      toast.error("Please select both start and end dates.");
      return;
    }

    if (filteredByDateSales.length === 0) {
      toast.error("No sales found for the selected date range.");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    const titleText = "Velavan Textile";
    const titleWidth = doc.getTextWidth(titleText);
    const titleX = (pageWidth - titleWidth) / 2;
    doc.text(titleText, titleX, 22);

    doc.setFontSize(12);
    const addressText = "3/109 S, Guruvayurappan Nagar, Kannakampalayam, Tirupur.Ph:9790391565";
    const addressWidth = doc.getTextWidth(addressText);
    const addressX = (pageWidth - addressWidth) / 2;
    doc.text(addressText, addressX, 30);

    const salesDetailsText = "SALES DETAILS";
    const salesDetailsWidth = doc.getTextWidth(salesDetailsText);
    const salesDetailsX = (pageWidth - salesDetailsWidth) / 2;
    doc.text(salesDetailsText, salesDetailsX, 38);
    const formattedStartDate = startDate ? format(new Date(startDate), "dd-MM-yyyy") : "N/A";
    const formattedEndDate = endDate ? format(new Date(endDate), "dd-MM-yyyy") : "N/A";
    doc.text(`Report Date Range: ${formattedStartDate} to ${formattedEndDate}`, 14, 44);

    const tableData = filteredByDateSales.map((sale, index) => [
      index + 1,
      sale.ProductID?.name + " (T-shirt)", // Extend product name with T-shirt type
      sale.StoreID?.name,
      sale.StockSold,
      sale.SaleDate,
      sale.SinglePiecePrice,
      sale.TotalSaleAmount,
    ]);

    tableData.push([
      "Total", 
      `${totalProductCount}`, 
      "", 
      totalQuantity, 
      "", 
      "", 
      `₹${totalPurchaseAmount}`, 
    ]);

    doc.autoTable({
      head: [["SNO", "Product Name", "Store Name", "Stock Sold", "Sale Date", "Single Piece Price", "Total Sale Amount"]],
      body: tableData,
      startY: 48,
      styles: {
        halign: "center",
        lineHeight: 1.5,
      },
    });

    doc.save("sales_report.pdf");
    toast.success("PDF downloaded successfully!");
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        {showSaleModal && (
          <AddSale
            addSaleModalSetting={addSaleModalSetting}
            products={products}
            stores={stores}
            handlePageUpdate={handlePageUpdate}
            authContext={authContext}
          />
        )}

        <ToastContainer />

        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
          <div className="flex justify-between pt-5 pb-3 px-3">
            {/* Align "Sales" and Search Bar */}
            <div className="flex gap-4 justify-center items-center">
              <span className="font-bold">Sales</span>
              <input
                type="text"
                placeholder="Search product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[150px] p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex gap-4 items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
                onClick={addSaleModalSetting}
              >
                Add Sales
              </button>

              {/* Date Range Input */}
              <div className="flex gap-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Start Time"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="End Time"
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded"
                onClick={generatePDF}
              >
                Download PDF
              </button>
            </div>
          </div>

          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Product Name</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Store Name</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Stock Sold</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Sales Date</th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Total Sale Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredByDateSales.map((sale) => (
                <tr key={sale._id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {sale.ProductID?.name} 
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.StoreID?.name}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.StockSold}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.SaleDate}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sale.TotalSaleAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="w-full mt-5 px-3">
           <div className="grid grid-cols-2 gap-5 text-xs">
             <div className="p-2 border border-gray-300 bg-white shadow rounded">
               <div className="font-bold">Total Quantity Sold:</div>
               <div>{totalQuantity}</div>
             </div>

             <div className="p-2 border border-gray-300 bg-white shadow rounded">
               <div className="font-bold">Total Products Count:</div>
               <div>{totalProductCount}</div>
             </div>
             <div className="p-2 border border-gray-300 bg-white shadow rounded">
               <div className="font-bold">Total Sale Amount:</div>
               <div>₹{totalPurchaseAmount}</div>
             </div>
           </div>
        
        </div>
      </div>
    </div>
  );
}

export default Sales;
